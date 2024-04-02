/*CMD
  command: /YEAR-2023
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: /year-2022, /year-2021, /year-2020
  group: 
CMD*/

var roll = User.getProperty("roll")
const subj = roll.slice(5, 7)
const ryr = roll.slice(2)
var YEAR = message
const yr = message.slice(-2)
var keyboard = [
  [{ title: "SELECT COURSE", command: "!" }],
  [{ title: "REGULAR", command: `${YEAR}/Regular` }],
  [{ title: "VOCATIONAL", command: `${YEAR}/Vocational` }]
]

if (yr < 24) {
  if (subj == 40) {
    User.setProperty("year", yr, "string")
    Bot.runCommand(`${YEAR}/Vocational`)
  } else if (subj == 21 || subj == 11 || subj == 31) {
    User.setProperty("year", yr, "string")
    Bot.runCommand(`${YEAR}/Regular`)
  } else {
    User.setProperty("year", yr, "string")
    Bot.editInlineKeyboard(keyboard)
  }
} else {
  Bot.sendMessage("Please provide correct roll no.")
  Bot.runCommand("/result")
}

