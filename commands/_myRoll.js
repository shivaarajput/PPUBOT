/*CMD
  command: /myRoll
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: /myroll
  group: 
CMD*/

var current_roll = User.getProperty("roll")
Bot.sendMessage(
    `Your Current Roll is ${current_roll}.`
  )
