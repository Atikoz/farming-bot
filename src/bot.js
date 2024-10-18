import { conversations, createConversation } from '@grammyjs/conversations'
import { run } from '@grammyjs/runner'
import { apiThrottler } from '@grammyjs/transformer-throttler'
import { Bot, session, InlineKeyboard } from 'grammy'

import dd from 'dedent'

import { crossFiMessage, decimalMessage } from './startBotMesage.js'
import User from './models/User.js'
import { changeCrossFiAddress, changeDecimalAddress, MainMenuKeyboard, selectNetworkIK } from './keyboard.js'
import { sendMessage } from './sendMessage.js'

const throttler = apiThrottler();
const bot = new Bot(process.env.BOT_API_TOKEN);

bot.use(
  session({
    initial() {
      return {
        id: null,
        referrer: null,
        network: null,
      }
    },
  })
)

bot.use(conversations())
bot.use(createConversation(registration))
bot.api.config.use(throttler)

bot.command('start', async (ctx) => {
  await ctx.conversation.exit()
  const { id } = ctx.msg.from
  ctx.session.id = id
  ctx.session.referrer = ctx.match || +process.env.ADMIN_ID

  const referrer2Data = await User.findOne({ _id: ctx.session.referrer }, 'referrer').lean();
  const referrer2Id = referrer2Data ? referrer2Data.referrer : +process.env.ADMIN_ID;

  const referrer3Data = await User.findOne({ _id: referrer2Id }, 'referrer').lean();
  const referrer3Id = referrer3Data ? referrer3Data.referrer : +process.env.ADMIN_ID;

  const user = await User.findOne({ _id: id }).lean();

  if (!user) {
    await User.create({
      _id: ctx.session.id,
      referrer: ctx.session.referrer,
      referrer2: referrer2Id,
      referrer3: referrer3Id
    });

    sendMessage(`Пользователь ${id} зарегестрировался в нашем боте. Добро пожаловать!`);
    sendMessage(`Зарегестрировался новый реферал 1 уровня ${id}`, ctx.session.referrer);
    sendMessage(`Зарегестрировался новый реферал 2 уровня ${id}`, referrer2Id);
    sendMessage(`Зарегестрировался новый реферал 3 уровня ${id}`, referrer3Id);
  }

  await ctx.reply('Добро пожаловать!\n\nДля того что бы начать пользоваться ботом, пожалуйста укажите адресса crossFi и Decimal с которых вы будете делегировать!', { reply_markup: MainMenuKeyboard });

})

bot.on('message', async (ctx) => {
  const userId = ctx.msg.chat.id;
  const text = ctx.msg.text;
  const user = await User.findOne({ _id: userId }).lean();

  console.log(`Пользователь ${userId} отправил сообщение боту: ${text}`);

  const listUsers = await User.find().lean();

  const referralCounts = listUsers.reduce((acc, user) => {
    if (user.referrer === userId) {
      acc.referrer1Lvl += 1;
    }
    if (user.referrer2 === userId) {
      acc.referrer2Lvl += 1;
    }
    if (user.referrer3 === userId) {
      acc.referrer3Lvl += 1;
    }
    return acc;
  }, { referrer1Lvl: 0, referrer2Lvl: 0, referrer3Lvl: 0 });

  switch (text) {
    case '/update':
      async function update() {
        try {
          const users = await User.find();

          for (const u of users) {
            const referrer1Data = await User.findOne({ _id: u.referrer }, 'referrer').lean();
            const referrer2Id = referrer1Data ? referrer1Data.referrer : 0;

            const referrer2Data = await User.findOne({ _id: referrer2Id }, 'referrer').lean();
            const referrer3Id = referrer2Data ? referrer2Data.referrer : 0;

            console.log('id', u._id);
            console.log('referrer1Id', u.referrer);
            console.log('referrer2Id', referrer2Id);
            console.log('referrer3Id', referrer3Id);
  
            await User.updateOne(
              { _id: u._id },
              {
                $set: {
                  referrer2: referrer2Id,
                  referrer3: referrer3Id,
                },
              }
            );
  
            console.log('user reffer update')
            console.log('----------------');

          };
          
          console.log('update done');
        } catch (error) {
          console.error(error)
        }
      }

      await update()
      break;

    case 'Главное меню':
      const numberOfReferrals1Lvl = referralCounts.referrer1Lvl;
      const numberOfReferrals2Lvl = referralCounts.referrer2Lvl;
      const numberOfReferrals3Lvl = referralCounts.referrer3Lvl;

      const homeText = [
        'Вы в главном меню!\n',
        `Ваш ID: <code>${userId}</code>\n`,
        `💸 <b>Стейк:</b> ...\n`,
        `<b>👤 Количество рефералов 1 уровня:</b> ${numberOfReferrals1Lvl}`,
        `<b>👤 Количество рефералов 2 уровня:</b> ${numberOfReferrals2Lvl}`,
        `<b>👤 Количество рефералов 3 уровня:</b> ${numberOfReferrals3Lvl}`
      ]

      ctx.reply(homeText.join('\n'), { reply_markup: MainMenuKeyboard, parse_mode: 'HTML' });
      break;

    case 'Стейкинг':
      ctx.reply('В hfphf,jnrt')
      break;

    case 'Пригласить друга':
      if (user.addressCrossFi && user.addressDecimal) {
        const referralUrl = `https://t.me/${process.env.BOT_USER_NAME}?start=${userId}`;

        ctx.reply(`Ваша ссылка для приглашения:\n\n<code>${referralUrl}</code>`, { parse_mode: 'HTML' })
      } else {
        ctx.reply('Для использования функции приглашения рефералов, вам нужно заполнить адресса для делегирования!')
      }
      break;

    case 'Адресса делегирования':
      ctx.reply('Выберите пожалуйста сеть:', {
        reply_markup: selectNetworkIK
      })
      break;

    default:
      break;
  }
})

bot.on('callback_query', async (ctx) => {
  const callback = ctx.update.callback_query.data;
  const chatId = ctx.chat.id;
  const messageId = ctx.update.callback_query.message.message_id;
  const userId = ctx.msg.chat.id;
  const user = await User.findOne({ _id: userId }).lean()

  console.log(`Пользователь ${userId} отправил колбек: ${callback}`);

  switch (callback) {
    case ('crossFi'):
      ctx.session.network = 'crossFi';
      ctx.api.deleteMessage(chatId, messageId);
      await ctx.reply(crossFiMessage, { parse_mode: 'HTML' })

      if (user.addressCrossFi) {
        await ctx.reply(
          dd`Ваш crossFi адрес: <code>${user.addressCrossFi}</code>`,
          {
            reply_markup: changeCrossFiAddress, parse_mode: 'HTML'
          }
        )
        return
      }
      await ctx.conversation.enter('registration')
      break;

    case ('decimal'):
      ctx.session.network = 'decimal';
      ctx.api.deleteMessage(chatId, messageId);
      await ctx.reply(decimalMessage, { parse_mode: 'HTML' })

      if (user.addressDecimal) {
        await ctx.reply(
          dd`Ваш decimal адрес: <code>${user.addressDecimal}</code>`,
          {
            reply_markup: changeDecimalAddress, parse_mode: 'HTML'
          }
        )
        return
      }
      await ctx.conversation.enter('registration')
      break;

    case ('changeCrossFiAddress'):
      ctx.session.network = 'crossFi';
      ctx.api.deleteMessage(chatId, messageId);

      await User.updateOne(
        { _id: userId },
        {
          $set: { addressCrossFi: null },
        }
      )
      await ctx.conversation.enter('registration')
      break;

    case ('changeDecimalAddress'):
      ctx.session.network = 'decimal';
      ctx.api.deleteMessage(chatId, messageId);

      await User.updateOne(
        { _id: userId },
        {
          $set: { addressDecimal: null },
        }
      )
      await ctx.conversation.enter('registration')
      break;
  }
})


async function registration(conversation, ctx) {
  const reCrossFi = RegExp(/^mx[0-9a-zA-Z]{39}$/)
  const reDecimal = RegExp(/^d0[0-9a-zA-Z]{39}$/)
  const re = ctx.session.network === 'crossFi' ? reCrossFi : reDecimal
  const userId = ctx.msg.chat.id;


  await ctx.reply(
    `Введите адрес ${ctx.session.network} с которого вы будете делегировать`
  )

  const {
    message: { text: address },
  } = await conversation.waitForHears(re, {
    otherwise: (ctx) =>
      ctx.reply(
        `Не правильный формат адреса. Введите адрес ${ctx.session.network} с которого вы будете делегировать`
      ),
  })

  conversation.session.address = address
  await ctx.reply(`Пожалуйста подождите`)

  await conversation.external(async () => {
    if (ctx.session.network === 'crossFi') {
      await User.updateOne(
        {
          _id: userId,
        },
        {
          $set: {
            addressCrossFi: address,
          },
        }
      )
    }

    if (ctx.session.network === 'decimal') {
      await User.updateOne(
        {
          _id: userId,
        },
        {
          $set: {
            addressDecimal: address,
          },
        }
      )
    }

    const user = await User.findOne({ _id: userId }).lean()
    conversation.log(user)
  })
  await ctx.reply(`Успешно зарегистрировались`)
  ctx.reply('Нажмите /start')
}

run(bot)
