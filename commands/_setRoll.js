/*CMD
  command: /setRoll
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *Enter Your 13-digit Roll Number ⤵️*
  keyboard: 
  aliases: /setroll
  group: 
CMD*/

var roll_value = User.getProperty("value")
var current_roll = User.getProperty("roll")
let regex = /^2[1-4]/

if (
  regex.test(message) &&
  message.length == 13 &&
  ((roll_value != 1 && roll_value != 2) ||
    user.telegramid == "1991415479" ||
    user.telegramid == "1909916082" ||
    user.telegramid == "5958259650")
) {
  Bot.sendMessage(`Your Roll ${message} is set successfully.`)
  User.setProperty("roll", message, "string")
  User.setProperty("value", 1, "integer")
  Bot.runCommand("/result")
} else if (roll_value != 1 && roll_value != 2) {
  Bot.sendMessage("Incorrect Roll! Send Again.")
  Bot.runCommand("/setRoll")
} else if (roll_value == 2) {
  Bot.sendMessage(
    `You have already reset your Roll and Your Current Roll is ${current_roll}.`
  )
} else if (roll_value == 1) {
  Bot.sendMessage(
    `You have already set your Roll and Your Current Roll is ${current_roll}.`
  )
}

