/*CMD
  command: /YEAR-2024/Vocational
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: /year-2023/vocational
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
    { title: "BALLB 1", command: `${COURSE}/BALLB-I` },
    { title: "BALLB 2", command: `${COURSE}/BALLB-II` },
    { title: "BALLB 3", command: `${COURSE}/BALLB-III` }
  ],
  [
    { title: "BED 1", command: `${COURSE}/BED-I` },
    { title: "BED 2", command: `${COURSE}/BED-II` },
    { title: "BPED 1", command: `${COURSE}/BPED-I` }
  ],
  [
    { title: "BPED 2", command: `${COURSE}/BPED-II` },
    { title: "LLB 1", command: `${COURSE}/LLB-I` },
    { title: "LLB 2", command: `${COURSE}/LLB-II` }
  ],
  [
    { title: "LLB 3", command: `${COURSE}/LLB-III` },
    { title: "PART 1", command: `${COURSE}/PART-I` },
    { title: "PART 2", command: `${COURSE}/PART-II` }
  ],
  [{ title: "PART 3", command: `${COURSE}/PART-III` }]
]

if (YEAR == 1) {
  Bot.runCommand(`${COURSE}/PART-I`)
} else if (YEAR == 2) {
  Bot.runCommand(`${COURSE}/PART-II`)
} else if (YEAR == 3) {
  Bot.runCommand(`${COURSE}/PART-III`)
} else {
  Bot.editInlineKeyboard(keyboard)
}
