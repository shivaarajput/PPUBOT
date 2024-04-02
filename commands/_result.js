/*CMD
  command: /result
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
  group: 
CMD*/

var keyboard = [
  [{ title: "SELECT YEAR", command: "!" }],
  [
    { title: "2024", command: "/YEAR-2024" },
    { title: "2023", command: "/YEAR-2023" },
    { title: "2022", command: "/YEAR-2022" }
  ],
  [
    { title: "2021", command: "/YEAR-2021" },
    { title: "2020", command: "/YEAR-2020" }
  ]
]

// Example message
//const message = "2310056789123";

// Regular expression parts
var roll = User.getProperty("roll")

const CURRENT_YEAR = 24
// const yr = roll.slice(0, 2)

if (roll == null) {
  Bot.runCommand("/setRoll")
} else {
  Bot.sendInlineKeyboard(keyboard, "*Select Option Correctly*")
}

