import { sendMessage } from "../sendMessage"

const sendMessage123 = async () => {
  try {
    const textChanel = 'Выплата вознаграждения по программе реферального фарминга @BazerFarming_bot\n' +
      '\n' +
      '<a href="https://xfiscan.com/txs/CF37DB774CD49EFF04A67747D6EAA932E9E9040E850702A217351AB9B4308F5F">🏷Мультисенд CrossFI</a>\n' +
      '<a href="https://xfiscan.com/addresses/mx15y740km6sunhvclscl4zae3dxzj3sqyhkz2q97">mx15...2q97</a> 0.00000011 XFI\n' +
      '<a href="https://xfiscan.com/addresses/mx18fmnulm4wd4uhh8q03mt9q4z0stu53zp9w2jcs">mx18...2jcs</a> 0.00000014 XFI\n' +
      '<a href="https://xfiscan.com/addresses/mx1flq3w3mejp99zfv9dyq8k3crxex85kdj9h0fp3">mx1f...0fp3</a> 0.00000017 XFI\n' +
      '<a href="https://xfiscan.com/addresses/mx1jzfe4jw75wzzqclzfy499phpr5vqvs2vy7972n">mx1j...972n</a> 0.00000008 XFI\n'


    await sendMessage(textChanel);
    await sendMessage('Выплата вознаграждения по программе реферального фарминга 0.00000017 XFI', 764692835);
    await sendMessage('Выплата вознаграждения по программе реферального фарминга 0.00000014 XFI', 601013890);
    await sendMessage('Выплата вознаграждения по программе реферального фарминга 0.00000011 XFI', 1762471327);
    await sendMessage('Выплата вознаграждения по программе реферального фарминга 0.00000008 XFI', 7001859210);


    await sendMessage(`Возврат остатка комиссии администратору: 1.85467083 XFI`);
    await sendMessage(`Возврат остатка комиссии: 1.85467083 XFI`, 1511153147);
  } catch (error) {
    console.error(error)
  }
}

async () => {
  await sendMessage123()
}