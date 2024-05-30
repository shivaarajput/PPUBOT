/*CMD
  command: /changeRequest
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

if (user.telegramid == "5958259650" || user.telegramid == "1991415479") {
  User.setProperty("roll", null, "integer")
  Bot.run({
    command: "/setRoll"
  })
}

