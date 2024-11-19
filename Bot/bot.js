const { Telegraf } = require('telegraf')
const bot = new Telegraf('7685394881:AAFjP7PoneOEhwJRFl23xqtLzyGLcolj6NE')
bot.start((ctx) =>
ctx.reply("Welcome :)))))", {
    reply_markup: {
    keyboard: [[{ text: "web app", web_app: { url: 'https://mellow-gnome-f69689.netlify.app/' } }]],
    },
}))
bot.launch()