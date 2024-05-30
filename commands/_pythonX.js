/*CMD
  command: /pythonX
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Enter User ID and Message in this format ⤵️
  keyboard: 
  aliases: 
  group: 
CMD*/

let id = message.slice(0, 10)
let msg = message.slice(10, -1)

Bot.sendMessageToChatWithId(
  id,
  `User: [${user.first_name}](tg://user?id=${user.telegramid})
Message: ${msg}`
)
Api.sendMessage({
  text: `✨ Message Successfully sent to User: [${id}](tg://user?id=${id})
${message}
`
})

