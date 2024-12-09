import { InlineKeyboard, Keyboard } from "grammy";

export const MainMenuKeyboard = new Keyboard()
  .text('Главное меню')
  .text('Стейкинг')
  .row()
  .text('Пригласить друга')
  .row()
  .text('Адресса делегирования')
  .resized();

export const selectNetworkIK = new InlineKeyboard()
  .text('crossFI', 'crossFi')
  .text('Decimal', 'decimal');

export const changeDecimalAddress = new InlineKeyboard()
  .text('Изменить адресс Decimal', 'changeDecimalAddress');

export const changeCrossFiAddress = new InlineKeyboard()
  .text('Изменить адресс CrossFI', 'changeCrossFiAddress');