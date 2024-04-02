/*CMD
  command: /resetRoll
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *Please Enter Correct Roll Number after that you won't be able to change your Roll Number ⤵️*
  keyboard: 
  aliases: /resetroll
  group: 
CMD*/

var roll_value = User.getProperty("value")
var current_roll = User.getProperty("roll")
if (roll_value == 1) {
  Bot.sendMessage(`Your Roll ${message} is reset successfully.`)
  User.setProperty("roll", message, "string")
  User.setProperty("value", 2, "integer")
  Bot.runCommand("/result")
} else if (roll_value == 2) {
  Bot.sendMessage(
    `You have already reset your Roll and Your Current Roll is ${current_roll}.`
  )
} else {
  Bot.sendMessage(
    `Please use /setRoll to set Your Roll. ${roll_value}, ${current_roll}`
  )
}

