/*CMD
  command: /messageX
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

var current_msg = Bot.getProperty("newMsg")
var msgId = Bot.getProperty("messageId")

/*
Api.sendMessage({
  text: `
 ✨ Message from admin!
——————————————
${current_msg}
`,
  parse_mode: "HTML",
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: "Share Bot! 🚀",
          url: "tg://share?url=https://t.me/PPU_Result_Bot?start=start"
        }
      ]
    ]
  }
})
*/

Api.copyMessage({
  from_chat_id: "1991415479",
  message_id: msgId,
  chat_id: user.telegramid,
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: "Share Bot! 🚀",
          url: "tg://share?url=https://t.me/PPU_Result_Bot?start=start"
        }
      ]
    ]
  }
})

/*
Bot.sendMessageToChatWithId(
  "1991415479",
  `✨ Message Successfully sent to [${user.telegramid}](tg://user?id=${user.telegramid})`
)
*/

