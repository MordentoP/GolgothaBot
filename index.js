const { Telegraf } = require('telegraf')
const songs = require('./Songs/AllSongs')
const token = require('./token')

const bot = new Telegraf(token);



// Getting song titles

 const titles = songs.map(songs => songs.title);

    bot.hears("Всі пісні", (ctx) => {
        
        ctx.reply(titles.join().replace(/,/g, ''))
        
       })

bot.hears("всі пісні", (ctx) => {
        
        ctx.reply(titles.join().replace(/,/g, ''))
        
       })


   // New line added
    for (let i = 0; i < titles.length; i++){
        titles.sort()
        titles[i] = titles[i] + `\n`
    }
    
    
    bot.command('info', ctx => {
        bot.telegram.sendMessage(ctx.chat.id,
             `Привіт ${ctx.message.from.first_name}! Щоб знайти текст пісні, напиши її назву. Всі доступні пісні можна знайти за командою  Всі пісні 
             \n Якщо хочеш добавити пісню, напиши моєму розробнику`, {
            
            reply_markup: {
                
                resize_keyboard: true,
                keyboard: [
                    [
                        {text: 'Всі пісні'},
                        {text: 'Випадкова пісня'},
                        {text: 'Написати розробнику'},
                    
                    ]
                ],
                one_time_keyboard: true,
                
                
            }
            
        })
    })
    bot.hears("Випадкова пісня", (ctx) =>  ctx.reply(songs[random()].text) + songs[random()])
    bot.hears("Написати розробнику", (ctx) =>  ctx.reply('https://t.me/mordento'))
   
    let random = function(){ 
        return Math.floor(Math.random() * titles.length)
    }
     // Get song by title
    for (let i = 0; i < songs.length; i++){
     
        bot.hears(songs[i].title, (ctx) => ctx.reply(songs[i].text))
        
     
     // title case-insensetive
    }
    for (let i = 0; i < songs.length; i++){
     
        bot.hears(songs[i].title.toLowerCase(), (ctx) => ctx.reply(songs[i].text))
       
        
     
    }
    
    
bot.launch()    

