/*CMD
  command: /YEAR-2022/Vocational
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: /year-2021/vocational
  group: 
CMD*/

var yr = parseInt(User.getProperty("year")) + 1
var roll = User.getProperty("roll")
var ryr = roll.slice(0,2)
const YEAR = yr - ryr
//const subj = roll.slice(5, 7)

var COURSE = message
var keyboard = [
  [{ title: "SELECT YOUR STREAM", command: "!" }],
  [
    { title: "BALLB 1", command: `${COURSE}/BALLB1` },
    { title: "BALLB 2", command: `${COURSE}/BALLB2` },
    { title: "BED-I", command: `${COURSE}/BED-I` }
  ],
  [
    { title: "BED-II", command: `${COURSE}/BED-II` },
    { title: "BPED-I", command: `${COURSE}/BPED-I` },
    { title: "BPED-II", command: `${COURSE}/BPED-II` }
  ],
  [
    { title: "LLB-I", command: `${COURSE}/LLB-I` },
    { title: "LLB-II", command: `${COURSE}/LLB-II` },
    { title: "PART-1", command: `${COURSE}/PART-1` }
  ],
  [
    { title: "PART-2", command: `${COURSE}/PART-2` },
    { title: "PART-3", command: `${COURSE}/PART-3` }
  ]
]

if (YEAR == 1) {
  Bot.runCommand(`${COURSE}/PART-1`)
} else if (YEAR == 2) {
  Bot.runCommand(`${COURSE}/PART-2`)
} else if (YEAR == 3) {
  Bot.runCommand(`${COURSE}/PART-3`)
} else {
  Bot.editInlineKeyboard(keyboard)
}
