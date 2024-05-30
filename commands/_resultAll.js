/*CMD
  command: /resultAll
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Are You Sure Want to broadcast result?? type y/n default=n
  keyboard: 
  aliases: 
  group: 
CMD*/

let formattedMessage = message.trim().toLowerCase()

// Check if message is 'y' or 'yes'
if (
  user.telegramid == "1991415479" &&
  (formattedMessage === "y" || formattedMessage === "yes")
) {
  Bot.sendMessage("Success !!")
  // Bot.runAll("/YEAR-2024")
} else {
  Bot.sendMessage("Aborted !!")
}

