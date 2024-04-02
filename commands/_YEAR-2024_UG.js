/*CMD
  command: /YEAR-2024/UG
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

var yr = parseInt(User.getProperty("year")) + 1
var roll = User.getProperty("roll")
var ryr = roll.slice(0, 2)
const YEAR = yr - ryr
const subj = roll.slice(5, 7)

//YEAR-2024/UG/BA(SEM-I)

var COURSE = message
var keyboard = [
  [{ title: "SELECT YOUR STREAM", command: "!" }],
  [
    { title: "BA SEM-I", command: `${COURSE}/BA(SEM-I)` },
    { title: "BSC SEM-I", command: `${COURSE}/BSC(SEM-I)` },
    { title: "BCOM SEM-I", command: `${COURSE}/BCOM(SEM-I)` },
    { title: "BA SEM-II", command: `${COURSE}/BA(SEM-II)` },
    { title: "BSC SEM-II", command: `${COURSE}/BSC(SEM-II)` },
    { title: "BCOM SEM-II", command: `${COURSE}/BCOM(SEM-II)` }
  ]
]

if (subj == 51) {
  Bot.runCommand(`${COURSE}/BCOM(SEM-I)`)
} else if (subj == 41) {
  Bot.runCommand(`${COURSE}/BA(SEM-I)`)
}
//else if (subj == 31) {
//Bot.runCommand(`${COURSE}/B.Com(Part-I)`)}
else {
  Bot.editInlineKeyboard(keyboard)
}

