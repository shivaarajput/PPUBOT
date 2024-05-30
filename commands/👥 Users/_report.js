/*CMD
  command: /report
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 👥 Users
  answer: If you have any issue, suggestion or feedback please send ⤵️
  keyboard: 
  aliases: /admin, /feedback, /suggestion, @admin
  group: 
CMD*/

Api.forwardMessage({
  from_chat_id: user.telegramid,
  message_id: request.message_id,
  chat_id: "1991415479"
})
Bot.sendMessage("✨ Message Successfully sent to Admin.")
