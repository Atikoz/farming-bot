import { RefferalNicks, ReffersNicks } from "../interface/IRefferalTable";
import { sendMessage } from "../src/sendMessage";
import createRefferalTable from "./createReferalTable"

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
        refferalsMsg.push(`\nУ вас нету рефералов ${i+1} уровня.`);
        continue
      }

      refferalsMsg.push(`\nСписок рефералов ${i+1} уровня:`)

      level.forEach((user) => {
        refferalsMsg.push(`Пользователь ${user.id}: @${user.userName}`)
      })
    }

    await sendMessage(reffersMsg.join('\n'), userId)
    await sendMessage(refferalsMsg.join('\n'), userId)

    return
  } catch (error) {
    console.error('error send referal table: ', error)
  }
}

export default sendReferalTable