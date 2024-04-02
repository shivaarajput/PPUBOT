/*CMD
  command: *
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

function isNumeric(value) {
  return !isNaN(value)
}
var msg = message.slice(0, 1)
var roll = User.getProperty("roll")
var value = User.getProperty("value")
var url = `https://lu.indiaexaminfo.co.in/PATLIPUTRA${message}/${roll}.pdf`
if (msg == "/" && isNumeric(roll)) {
  if (roll.length == 13) {
    Api.sendDocument({ document: url })
    Bot.sendMessage("Result sent successfully!")
  } else {
    // Code to handle the error
    Bot.sendMessage("Try Again!")
  }
} else if (value == 1) {
  Bot.runCommand("/resetRoll")
} else {
  Bot.runCommand("/result")
}

