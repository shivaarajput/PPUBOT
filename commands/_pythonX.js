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

Bot.sendMessageToChatWithId(id, `Admin: ${msg}`)
//Api.sendMessage({
// text: `✨ Message Successfully sent to User: [${id}](tg://user?id=${id})
//${message}
//`
//})
// Bot.run({
 // command: "/changeRequest"
// })
Bot.sendMessage("Success!")
