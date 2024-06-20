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
const subj = typeof roll !== "undefined" && roll.slice ? roll.slice(6, 7) : -1
var YEAR = message
const yr_click = message.slice(-2)
var yr =
  typeof roll !== "undefined" && roll.slice ? parseInt(roll.slice(0, 2)) : 20
var keyboard = [
  [{ title: "SELECT COURSE", command: "!" }],
  [{ title: "UG", command: `${YEAR}/UG` }],
  [{ title: "VOCATIONAL", command: `${YEAR}/Vocational` }],
  [{ title: "REGULAR", command: `${YEAR}/Regular` }]
]

if (yr >= 22 && yr <= 24) {
  Api.sendChatAction({
    chat_id: user.telegramid,
    action: "upload_document"
  })
  if (subj == 0) {
    User.setProperty("year", yr_click, "string")
    Bot.runCommand(`${YEAR}/Vocational`)
  } else if (subj == 1 && yr == 24) {
    User.setProperty("year", yr_click, "string")
    Bot.runCommand(`${YEAR}/UG`)
  } else if (subj == 1 && yr < 24) {
    User.setProperty("year", yr_click, "string")
    Bot.runCommand(`${YEAR}/Regular`)
  } else {
    User.setProperty("year", yr_click, "string")
    Bot.editInlineKeyboard(keyboard)
  }
} else {
  Bot.runCommand("/setRoll")
}

