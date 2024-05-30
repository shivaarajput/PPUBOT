/*CMD
  command: /result
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

/*
// First Code
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

// Year based on user roll
var roll = User.getProperty("roll")
var yr = roll.slice(0,2)
User.setProperty("year", yr, "string")

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
*/

/*
// Second Code
var keyboard = [
  [{ title: "SELECT YEAR", command: "!" }]
];

// Year based on user roll
var roll = User.getProperty("roll");
var yr = parseInt(roll.slice(0, 2)); // Convert to integer for comparison
User.setProperty("year", yr.toString(), "string");

// Adjust the keyboard based on the user's roll
if (yr >= 21 && yr <= 24) {
  var adjustedKeyboard = [];
  for (var i = yr; i <= 24; i++) {
    adjustedKeyboard.push({ title: "20" + i, command: "/YEAR-20" + i });
  }
  Bot.sendInlineKeyboard(adjustedKeyboard, "*Select Option Correctly*");
} else {
  Bot.sendMessage("Invalid roll or year!");
}

*/

// Year based on user roll
var roll = User.getProperty("roll")
if (roll) {
  var yr = parseInt(roll.slice(0, 2)) // Convert to integer for comparison
  User.setProperty("year", yr.toString(), "string")
  // Adjust the keyboard based on the user's roll
  if (yr >= 21 && yr <= 24) {
    var adjustedKeyboard = []
    var maxOptions = Math.min(3, 25 - yr) // Maximum 3 options, or available years from 20xx to 24
    for (var i = yr; i <= 24 && i <= yr + maxOptions - 1; i++) {
      adjustedKeyboard.push({ title: "20" + i, command: "/YEAR-20" + i })
    }
    Bot.sendInlineKeyboard(adjustedKeyboard, "*Select Option Correctly*")
  } else {
    Bot.sendMessage("Invalid roll or year!")
  }
} else {
  Bot.runCommand("/setRoll")
}

