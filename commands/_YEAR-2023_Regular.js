/*CMD
  command: /YEAR-2023/Regular
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: /year-2022/regular, /year-2021/regular
  group: 
CMD*/

var yr = parseInt(User.getProperty("year")) + 1
var roll = User.getProperty("roll")
var ryr = roll.slice(0,2)
const YEAR = yr - ryr
const subj = roll.slice(5, 7)

var COURSE = message
var keyboard = [
  [{ title: "SELECT YOUR STREAM", command: "!" }],
  [
    { title: "BA 1", command: `${COURSE}/B.A.Hons.(Part-I)` },
    { title: "BA 2", command: `${COURSE}/B.A.Hons.(Part-II)` },
    { title: "BA 3", command: `${COURSE}/B.A.Hons.(Part-III)` }
  ],
  [
    { title: "BSc 1", command: `${COURSE}/B.Sc.Hons.(Part-I)` },
    { title: "BSc 2", command: `${COURSE}/B.Sc.Hons.(Part-II)` },
    { title: "BSc 3", command: `${COURSE}/B.Sc.Hons.(Part-III)` }
  ],
  [
    { title: "BCOM 1", command: `${COURSE}/B.Com(Part-I)` },
    { title: "BCOM 2", command: `${COURSE}/B.Com(Part-II)` },
    { title: "BCOM 3", command: `${COURSE}/B.Com(Part-III)` }
  ]
]

if (YEAR == 1) {
  if (subj == 11) {
    Bot.runCommand(`${COURSE}/B.Sc.Hons.(Part-I)`)
  } else if (subj == 21) {
    Bot.runCommand(`${COURSE}/B.A.Hons.(Part-I)`)
  } else if (subj == 31) {
    Bot.runCommand(`${COURSE}/B.Com(Part-I)`)
  }
} else if (YEAR == 2) {
  if (subj == 11) {
    Bot.runCommand(`${COURSE}/B.Sc.Hons.(Part-II)`)
  } else if (subj == 21) {
    Bot.runCommand(`${COURSE}/B.A.Hons.(Part-II)`)
  } else if (subj == 31) {
    Bot.runCommand(`${COURSE}/B.Com(Part-II)`)
  }
} else if (YEAR == 3) {
  if (subj == 11) {
    Bot.runCommand(`${COURSE}/B.Sc.Hons.(Part-III)`)
  } else if (subj == 21) {
    Bot.runCommand(`${COURSE}/B.A.Hons.(Part-III)`)
  } else if (subj == 31) {
    Bot.runCommand(`${COURSE}/B.Com(Part-III)`)
  }
} else {
  Bot.editInlineKeyboard(keyboard)
}

