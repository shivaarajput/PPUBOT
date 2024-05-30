/*CMD
  command: /shivaX
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Enter message: 
  keyboard: 
  aliases: 
  group: 
CMD*/

if (user.telegramid == "1991415479") {
  Bot.setProperty("messageId", request.message_id, "string")
  Bot.runAll({
    command: "/messageX"
  })
  //Bot.setProperty("newMsg", message, "string")
}

