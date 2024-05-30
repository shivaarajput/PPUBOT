/*CMD
  command: /YEAR-2024
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

var roll = User.getProperty("roll")
const subj = roll.slice(6, 7)
var YEAR = message
const yr_click = message.slice(-2)
var yr = parseInt(roll.slice(0, 2))
var keyboard = [
  [{ title: "SELECT COURSE", command: "!" }],
  [{ title: "UG", command: `${YEAR}/UG` }],
  [{ title: "VOCATIONAL", command: `${YEAR}/Vocational` }]
]

if (yr == 24) {
  if (subj == 0) {
    User.setProperty("year", yr_click, "string")
    Bot.runCommand(`${YEAR}/Vocational`)
  } else if (subj == 1) {
    User.setProperty("year", yr_click, "string")
    Bot.runCommand(`${YEAR}/UG`)
  } else {
    User.setProperty("year", yr_click, "string")
    Bot.editInlineKeyboard(keyboard)
  }
} else {
  Bot.sendMessage("Your 2024 is currently not available!")
}

