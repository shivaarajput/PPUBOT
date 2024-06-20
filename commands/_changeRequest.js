/*CMD
  command: /changeRequest
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

var roll_value = User.getProperty("value")
Api.forwardMessage({
  from_chat_id: user.telegramid,
  message_id: request.message_id,
  chat_id: "1991415479"
})
if (
  roll_value != 2 &&
  (user.telegramid == "1250842195" ||
    user.telegramid == "1991415479" ||
    user.telegramid == "6663676284")
) {
  User.setProperty("value", 1, "integer")
  Bot.run({
    command: "/resetRoll"
  })
} else {
  Bot.sendMessage("You already changed your roll many times.")
}

