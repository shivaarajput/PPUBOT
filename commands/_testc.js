/*CMD
  command: /testc
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: UserId
  keyboard: 
  aliases: 
  group: 
CMD*/

Bot.sendMessage(`[${message}](tg://user?id=${message})`)
