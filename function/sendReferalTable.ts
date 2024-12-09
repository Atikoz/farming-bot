import { RefferalNicks, ReffersNicks } from "../interface/IRefferalTable";
import { sendMessage } from "../src/sendMessage";
import createRefferalTable from "./createReferalTable"

const MAX_TELEGRAM_MESSAGE_LENGTH = 4096;

const sendMessageInChunks = async (messages: string[], userId: number) => {
  let currentMessage = '';

  for (const line of messages) {
    if (currentMessage.length + line.length + 1 > MAX_TELEGRAM_MESSAGE_LENGTH) {
      await sendMessage(currentMessage, userId);
      currentMessage = '';
    }
    currentMessage += `${line}\n`;
  }

  if (currentMessage) {
    await sendMessage(currentMessage, userId);
  }
};


const sendReferalTable = async (userId: number) => {
  try {
    const referalTableData = await createRefferalTable(userId);
    const reffersData = referalTableData.reffersNicks;
    const refferalsData = referalTableData.referralNicks;
    const reffersMsg = ['Список рефферов:\n'];

    const reffersKeys = Object.keys(reffersData);

    for (let i = 0; i < reffersKeys.length; i++) {
      const key = reffersKeys[i];
      const reffer = reffersData[key as keyof ReffersNicks];
      
      if (reffer) {
        reffersMsg.push(`Ваш реффер ${i+1} уровня с ID ${reffer.id}: @${reffer.userName}`);
      }
    }

    const refferalsMsg = ['Список реферералов:'];
    const refferalsKeys = Object.keys(refferalsData);

    for (let i = 0; i < refferalsKeys.length; i++) {
      const key = refferalsKeys[i];
      const level = refferalsData[key as keyof RefferalNicks];

      if (level.length <= 0) {
        refferalsMsg.push(`\n<b>У вас нету рефералов ${i+1} уровня.</b>`);
        continue
      }

      refferalsMsg.push(`\n<b>Список рефералов ${i+1} уровня:</b>`)

      level.forEach((user) => {
        refferalsMsg.push(`   Пользователь ${user.id}: @${user.userName}`)
      })
    }

    await sendMessage(reffersMsg.join('\n'), userId)
    await sendMessageInChunks(refferalsMsg, userId)

    return
  } catch (error) {
    console.error('error send referal table: ', error)
  }
}

export default sendReferalTable