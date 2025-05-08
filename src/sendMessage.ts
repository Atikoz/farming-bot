import { Bot } from 'grammy'

const botToken = process.env.BOT_API_TOKEN;

if (!botToken) {
  throw new Error("BOT_API_TOKEN is not defined in environment variables.");
}

const bot = new Bot(botToken);
const idLogsChannel = -1002047739175;
const idTestChannel = -1002218110159;

async function sendMessage(text: string, id: number | string = idLogsChannel,): Promise<void> {
  console.log(`send message: ${text}`)
  console.log(`id: ${id}`)
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
