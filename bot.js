import dotenv from 'dotenv'; dotenv.config()
import { Telegraf, Markup } from 'telegraf'
import {buttons_hy, buttons_ru, buttons_en} from './buttons.js'
import {texts_hy, texts_ru, texts_en} from './texts.js'
const bot = new Telegraf(process.env.TOKEN)

var start_text = `
  Ընտրեք ձեր լեզուն։
  Выберите ваш язык.
  Choose your language.
`.replaceAll('  ', '')

const buttons = Markup.inlineKeyboard([
  Markup.button.callback('Հայերեն🇦🇲', 'hy'),
  Markup.button.callback('Русский🇷🇺', 'ru'),
  Markup.button.callback('Engilsh🇺🇸', 'en')
])

bot.start(async (ctx) => {
  try{
	  await ctx.replyWithHTML(start_text, buttons)
  }catch(err){
    console.log(err);
    return	
  }
})

bot.action('hy', async (ctx) => {
  try{
	  await ctx.replyWithHTML(texts_hy.start_text, buttons_hy.general_menu)
  }catch(err){
    console.log(err);
    return	
  }
})

bot.action('ru', async (ctx) => {
  try{
	  await ctx.replyWithHTML(texts_ru.start_text, buttons_ru.general_menu)
  }catch(err){
    console.log(err);
    return	
  }
})

bot.action('en', async (ctx) => {
  try{
	  await ctx.replyWithHTML(texts_en.start_text, buttons_en.general_menu)
  }catch(err){
    console.log(err);
    return	
  }
})


const service_names_hy = [
  'Բրենդինգ/ռեբրենդինգ',
  'Դիզայն Վեբ/մոբայլ և գրաֆիկ',
  'Կայքերի պատրաստում',
  'Բիզնես ռազմավարություն և մարքեթինգ',
  'Թիրախավորում(ՍՄՄ)',
  'Ֆոտո/վիդեո նկարահանում',
  'Տպագրություն'
]
const service_names_ru = [
  'Брендинг/ребрендинг',
  'Дизайн Веб/мобилный и графический',
  'Разработка сайтов',
  'Бизнес стратегия и маркетинг',
  'Таргетинг',
  'Фото и видео',
  'Типография'
]
const service_names_en = [
  'Branding/rebranding',
  'Design Web/mobile and graphic',
  'Web development',
  'Business strategy and marketing',
  'Targeting',
  'Photo and video production',
  'Typography'
]
bot.hears(service_names_hy, async (ctx) => {
  try{
    await ctx.reply(ctx.message.text, Markup.inlineKeyboard([
    	Markup.button.callback('Ուղարկել հայտ', 'send_request_hy'),
  	]))
  }catch(err){
    console.log(err);
    return	
  }
})
bot.hears(service_names_ru, async (ctx) => {
  try{
    await ctx.reply(ctx.message.text, Markup.inlineKeyboard([
    	Markup.button.callback('Подавать заявление', 'send_request_ru'),
  	]))
  }catch(err){
    console.log(err);
    return	
  }
})
bot.hears(service_names_en, async (ctx) => {
  try{
    await ctx.reply(ctx.message.text, Markup.inlineKeyboard([
    	Markup.button.callback('Submit an application', 'send_request_en'),
  	]))
  }catch(err){
    console.log(err);
    return	
  }
})
bot.action('send_request_hy', (ctx) => {
  try{
    ctx.reply(texts_hy.action_text, buttons_hy.number)
  }catch(err){
    console.log(err);
    return	
  }
})
bot.action('send_request_ru', (ctx) => {
  try{
    ctx.reply(texts_ru.action_text, buttons_ru.number)
  }catch(err){
    console.log(err);
    return	
  }
})
bot.action('send_request_en', (ctx) => {
  try{
    ctx.reply(texts_en.action_text, buttons_en.number)
  }catch(err){
    console.log(err);
    return	
  }
})





const all_texts = {
  "Ծառայություններ" : ["Մեր ծառայությունները՝", buttons_hy.services],
  "Հետ գնալ" : ["Մեր ծառայությունները՝", buttons_hy.services],
  "Կապ սպասարկման բաժնի հետ" : ["Գրեք ձեր հարցը այստեղ և սպասեք պատասխանի:)"],
  "Կապ մեզ հետ" : [texts_hy.contact_text],
  "Հաճախ տրվող հարցեր" : ["Հաճախ տրվող հարցերը՝", buttons_hy.questions],
  [texts_hy.questions_text[0]] : [texts_hy.answers[0],  buttons_hy.questions],
  [texts_hy.questions_text[1]] : [texts_hy.answers[1], buttons_hy.questions],
  "Գլխավոր մենյու" : ["Գլխավոր մենյու՝", buttons_hy.general_menu],
  "Գրել հեռախոսահամարը" : ["Մուտքագրեք ձեր հեռախոսահամարը և մեր պուպուշ բոքոն մասնագետը շուտով կկապվի Ձեզ հետ։"],
  "Փոխել լեզուն" : [start_text, buttons],


  "Услуги" : ["Наши услуги", buttons_ru.services],
  "Возвращаться" : ["Наши услуги", buttons_ru.services],
  "Связаться с отделом обслуживания" : ["Напишите свой вопрос здесь и ждите ответа :)"],
  "контакты" : [texts_ru.contact_text],
  "Часто задаваемые вопросы" : ["Часто задаваемые вопросы", buttons_ru.questions],
  [texts_ru.questions_text[0]] : [texts_ru.answers[0],  buttons_ru.questions],
  [texts_ru.questions_text[1]] : [texts_ru.answers[1], buttons_ru.questions],
  "Меню" : ["Меню", buttons_ru.general_menu],
  "Написать номер телефона" : ["Введите свой номер телефона и наш специалист свяжется с вами в ближайшее время."],
  "Изменить язык" : [start_text, buttons],


  "Services" : ["Our services", buttons_en.services],
  "Go back" : ["Our services:", buttons_en.services],
  "Contact the service department" : ["Write your question here and wait for an answer :)"],
  "Contacts" : [texts_en.contact_text],
  "Frequently asked questions" : ["Frequently asked questions", buttons_en.questions],
  [texts_en.questions_text[0]] : [texts_en.answers[0],  buttons_en.questions],
  [texts_en.questions_text[1]] : [texts_en.answers[1], buttons_en.questions],
  "Menu" : ["Menu", buttons_en.general_menu],
  "Write the phone number" : ["Enter your phone number and our specialist will contact you soon."],
  "Change the language" : [start_text, buttons],

}


var special_chat_id, special_message_id;
bot.hears('Հատուկ առաջարկ', async (ctx) => {
  try{
    await bot.telegram.copyMessage(ctx.message.chat.id, special_chat_id, special_message_id)
  }catch(err){
    ctx.reply("Հատուկ առաջարկ չի գտնվել։")
    console.log(err);
    return	
  }
})

var special_chat_id, special_message_id;
bot.hears('Специальное предложение', async (ctx) => {
  try{
    await bot.telegram.copyMessage(ctx.message.chat.id, special_chat_id, special_message_id)
  }catch(err){
    ctx.reply("Специальное предложение не найдено.")
    console.log(err);
    return	
  }
})

var special_chat_id, special_message_id;
bot.hears('Special offers', async (ctx) => {
  try{
    await bot.telegram.copyMessage(ctx.message.chat.id, special_chat_id, special_message_id)
  }catch(err){
    ctx.reply("No special offer was found.")
    console.log(err);
    return	
  }
})





bot.on('contact', async (ctx) => {
  console.log(ctx.message)
  try{
    if(ctx.message.reply_to_message.text.includes("Մեզ")){
      await ctx.reply(texts_hy.after_req_text, buttons_hy.services)
    }
    if(ctx.message.reply_to_message.text.includes("Для")){
      await ctx.reply(texts_ru.after_req_text, buttons_ru.services)
    }
    if(ctx.message.reply_to_message.text.includes("For")){
      await ctx.reply(texts_en.after_req_text, buttons_en.services)
    }
  }catch(err){
      console.log(err);
      return
  }
})
 


bot.command('special', async (ctx) => {
  try{
    console.log(ctx.message)
  	if(ctx.message.chat.id == '1319378597' || ctx.message.chat.id == '5073289691'){
	  special_message_id = ctx.message.reply_to_message.message_id
    special_chat_id = ctx.message.chat.id
	  await ctx.reply('Հատուկ առաջարկը տեղադրաված է։')
	}else{
	  await ctx.reply('Սխալ:(')		
	}
  }catch(e){
    console.log(e)
	  await ctx.reply('Սխալ:(')
	  return
	}
})


bot.on('message', async (ctx) => {
  console.log(ctx.message.text)
  if(all_texts[ctx.message.text]){
    try{
      await ctx.reply(...all_texts[ctx.message.text])
    }catch(err){
        console.log(err);
        return
    }
  }
})



function start(){
  try{
    bot.launch()
    console.log('[+] bot startred')
  }catch(err){
    console.log(err)
    return
  }
}

start()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
