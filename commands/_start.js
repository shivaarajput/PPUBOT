/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: /help, /command
  group: 
CMD*/

Bot.sendMessage(
  `
👋 Heya ${user.first_name}!

I'm here to assist you with downloading results. To get started, just send me a command:


- To set your roll, type /setRoll
- To reset your roll, type /resetRoll
- To download your results, type /result
- To see your roll, type /myRoll
- To see all commands, type /help
- To share any issue with admin, type /report

Feel free to explore and let me know if you need any help! 😊
    `
)

var old_user = User.getProperty("old_user", false)

if (!old_user) {
  User.setProperty("old_user", true)
  var totalUsers = parseInt(Bot.getProperty("activeUsers")) + 1
  Bot.setProperty("activeUsers", totalUsers, "string")
}

