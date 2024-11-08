import { Bot, session, InlineKeyboard } from 'grammy'
const bot = new Bot(process.env.BOT_API_TOKEN);

const idLogsChannel = -1002047739175;
const idTestChannel = -1002218110159;

async function sendMessage(text, id = idTestChannel,) {
  try {
    await bot.api.sendMessage(id, text, {
      parse_mode: 'HTML',
      disable_web_page_preview: false,
    })
  } catch (error) {
    console.log(error)
  }
}

export { sendMessage }
