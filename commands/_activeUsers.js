/*CMD
  command: /activeUsers
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

if (user.telegramid == "1991415479") {
  var x = Bot.getProperty("activeUsers")
  Bot.sendMessage("Active Users: " + x)
}

