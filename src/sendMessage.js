import { Bot, session, InlineKeyboard } from 'grammy'
const bot = new Bot(process.env.BOT_API_TOKEN)

async function sendMessage(text) {
  try {
    await bot.api.sendMessage(-1002047739175, text, {
      parse_mode: 'HTML',
      disable_web_page_preview: false,
    })
  } catch (error) {
    console.log(error)
  }
}

export { sendMessage }
