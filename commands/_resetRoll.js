/*CMD
  command: /resetRoll
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *Last chance to change roll ⤵️*
  keyboard: 
  aliases: /resetroll
  group: 
CMD*/

var roll_value = User.getProperty("value")
var current_roll = User.getProperty("roll")
let regex = /^2[1-4]/

if (regex.test(message) && message.length == 13 && roll_value == 1) {
  Bot.sendMessage(`Your Roll ${message} is reset successfully.`)
  User.setProperty("roll", message, "string")
  User.setProperty("value", 2, "integer")
  Bot.runCommand("/result")
} else if (roll_value == 2) {
  Bot.sendMessage(
    `You have already reset your Roll and Your Current Roll is ${current_roll}.`
  )
} else {
  Bot.sendMessage(`Invalid Roll !!`)
}

