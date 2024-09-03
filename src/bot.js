import 'dotenv/config'
import { conversations, createConversation } from '@grammyjs/conversations'
import { run } from '@grammyjs/runner'
import { apiThrottler } from '@grammyjs/transformer-throttler'
import { Bot, session, InlineKeyboard } from 'grammy'

import dd from 'dedent'

import { crossFiMessage, decimalMessage } from './startBotMesage.js'
import User from './models/User.js'

const throttler = apiThrottler();
const bot = new Bot(process.env.BOT_API_TOKEN)

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
  const { id } = ctx.from
  ctx.session.id = id
  ctx.session.referrer = ctx.match || +process.env.ADMIN_ID
  const user = await User.findOne({ _id: id }).lean()
  console.log(user);
  if (!user) {
    await User.create({
      _id: ctx.session.id,
      referrer: ctx.session.referrer,
    })
  }
  await ctx.reply('Выберите пожалуйста сеть', {
    reply_markup: new InlineKeyboard()
      .text('crossFI', 'crossFi')
      .text('Decimal', 'decimal'),
  })
})

bot.callbackQuery('crossFi', async (ctx) => {
  ctx.session.network = 'crossFi'
  await ctx.reply(crossFiMessage, { parse_mode: 'HTML' })
  const user = await User.findOne({ _id: ctx.session.id }).lean()

  if (user.addressCrossFi) {
    await ctx.reply(
      dd`Ваш id ${ctx.session.id}
  Ваш crossFi адрес: ${user.addressCrossFi}
  Реферальная ссылка: https://t.me/${bot.botInfo.username}?start=${ctx.session.id}
  `,
      {
        reply_markup: new InlineKeyboard().text(
          'Change CrossFI address',
          'changeCrossFiAddress'
        ),
      }
    )
    return
  }
  await ctx.conversation.enter('registration')
})

bot.callbackQuery('decimal', async (ctx) => {
  ctx.session.network = 'decimal'
  await ctx.reply(decimalMessage, { parse_mode: 'HTML' })
  const user = await User.findOne({ _id: ctx.session.id }).lean()

  if (user.addressDecimal) {
    await ctx.reply(
      dd`Ваш id ${ctx.session.id}
  Ваш decimal адрес: ${user.addressDecimal}
  Реферальная ссылка: https://t.me/${bot.botInfo.username}?start=${ctx.session.id}
  `,
      {
        reply_markup: new InlineKeyboard().text(
          'Change Decimal address',
          'changeDecimalAddress'
        ),
      }
    )
    return
  }
  await ctx.conversation.enter('registration')
})

bot.callbackQuery('changeCrossFiAddress', async (ctx) => {
  ctx.session.network = 'crossFi'
  await User.updateOne(
    { _id: ctx.session.id },
    {
      $set: { addressCrossFi: null },
    }
  )
  await ctx.conversation.enter('registration')
})

bot.callbackQuery('changeDecimalAddress', async (ctx) => {
  ctx.session.network = 'decimal'
  await User.updateOne(
    { _id: ctx.session.id },
    {
      $set: { addressDecimal: null },
    }
  )
  await ctx.conversation.enter('registration')
})

async function registration(conversation, ctx) {
  const reCrossFi = RegExp(/^mx[0-9a-zA-Z]{39}$/)
  const reDecimal = RegExp(/^d0[0-9a-zA-Z]{39}$/)
  const re = ctx.session.network === 'crossFi' ? reCrossFi : reDecimal

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
          _id: ctx.session.id,
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
          _id: ctx.session.id,
        },
        {
          $set: {
            addressDecimal: address,
          },
        }
      )
    }

    const user = await User.findOne({ _id: ctx.session.id }).lean()
    conversation.log(user)
  })
  await ctx.reply(`Успешно зарегистрировались`)
  ctx.reply('Нажмите /start')
}

run(bot)
