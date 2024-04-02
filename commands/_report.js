/*CMD
  command: /report
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: If you have any issue, suggestion or feedback please send ⤵️
  keyboard: 
  aliases: /admin, /feedback, /suggestion, @admin
  group: 
CMD*/

Bot.sendMessageToChatWithId(
  "1991415479",
  `User: [${user.first_name}](tg://user?id=${user.telegramid})
Message: ${message}`
)
Bot.sendMessage("✨ Message Successfully sent to Admin.")

