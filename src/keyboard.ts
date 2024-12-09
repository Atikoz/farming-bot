import { InlineKeyboard, Keyboard } from "grammy";

export const MainMenuKeyboard = new Keyboard()
  .text('Данные')
  .text('Стейкинг')
  .row()
  .text('Рефералы')
  .row()
  .text('Адресса делегирования')
  .resized();

export const RefferalKeyboard = new Keyboard()
  .text('Пригласить друга')
  .text('Посмотреть реферальную структуру')
  .row()
  .text('Главное меню')
  .resized();

export const selectNetworkIK = new InlineKeyboard()
  .text('crossFI', 'crossFi')
  .text('Decimal', 'decimal');

export const changeDecimalAddress = new InlineKeyboard()
  .text('Изменить адресс Decimal', 'changeDecimalAddress');

export const changeCrossFiAddress = new InlineKeyboard()
  .text('Изменить адресс CrossFI', 'changeCrossFiAddress');