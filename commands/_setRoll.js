/*CMD
  command: /setRoll
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *Enter Your Correct Roll Number ⤵️*
  keyboard: 
  aliases: /setroll
  group: 
CMD*/

var roll_value = User.getProperty("value")
var current_roll = User.getProperty("roll")
if (roll_value == null) {
  Bot.sendMessage(`Your Roll ${message} is set successfully.`)
  User.setProperty("roll", message, "string")
  User.setProperty("value", 1, "integer")
  Bot.runCommand("/result")
} else if (roll_value == 2) {
  Bot.sendMessage(
    `You have already reset your Roll and Your Current Roll is ${current_roll}.`
  )
} else {
  Bot.sendMessage(
    `You have already set your Roll and Your Current Roll is ${current_roll}.`
  )
}

