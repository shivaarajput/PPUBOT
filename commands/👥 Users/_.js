/*CMD
  command: *
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 👥 Users
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

if (msg == "/" && message.length >= 12) {
  if (isNumeric(roll) && roll.length == 13) {
    Api.sendDocument({
      document: url,
      caption:
        "Happy to Share Your Results!\nPlease share this bot to your friends @PPU_Result_Bot",
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "Share Bot! 🚀",
              url: "tg://share?url=https://t.me/PPU_Result_Bot?start=start"
            }
          ]
        ]
      }
    })
    //Bot.sendMessage("Result sent successfully!")
  } else {
    // Code to handle the error
    Bot.sendMessage("Error occured report to /admin!")
  }
} else {
  Bot.runCommand("/help")
}

