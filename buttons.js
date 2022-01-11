import { Markup } from 'telegraf'
import {texts_hy, texts_ru, texts_en} from './texts.js'


let buttons_hy = {
    "general_menu" : Markup.keyboard([
        ['Ծառայություններ', 'Հատուկ առաջարկ'], 
        ['Կապ մեզ հետ','Փոխել լեզուն'], 
        ['Կապ սպասարկման բաժնի հետ']
    ])
    .oneTime()
    .resize(),

    "services" : Markup.keyboard([
        ['Բրենդինգ/ռեբրենդինգ'],
        ['Դիզայն Վեբ/մոբայլ և գրաֆիկ'],
        ['Կայքերի պատրաստում'],
        ['Բիզնես ռազմավարություն և մարքեթինգ'],
        ['Թիրախավորում(ՍՄՄ)'],
        ['Ֆոտո/վիդեո նկարահանում'],
        ['Տպագրություն'],
        ['Գլխավոր մենյու']
    ])
    .oneTime()
    .resize(),

    "questions" : Markup.keyboard([
        [texts_hy.questions_text[0]], 
        [texts_hy.questions_text[1]], 
        ['Գլխավոր մենյու'] 
      ])
      .oneTime()
      .resize(),

      "number" : Markup.keyboard([
        [Markup.button.contactRequest('Կիսվել հեռախոսահամարով')],
        ['Գրել հեռախոսահամարը'],
        ['Հետ գնալ']
    ])
    .resize()
}



let buttons_ru = {
    "general_menu" : Markup.keyboard([
        ['Услуги', 'Специальное предложение'], 
        ['контакты', 'Изменить язык'], 
        ['Связаться с отделом обслуживания'] 

    ])
    .oneTime()
    .resize(),

    "services" : Markup.keyboard([
        ['Брендинг/ребрендинг '],
        ['Дизайн Веб/мобилный и графический '],
        ['Разработка сайтов'],
        ['Бизнес стратегия и маркетинг '],
        ['Таргетинг'],
        ['Фото и видео'],
        ['Типография'],
        ['Меню']
    ])
    .oneTime()
    .resize(),

    "questions" : Markup.keyboard([
        [texts_ru.questions_text[0]], 
        [texts_ru.questions_text[1]], 
        ['Меню'] 
      ])
      .oneTime()
      .resize(),

      "number" : Markup.keyboard([
        [Markup.button.contactRequest('Поделиться по номеру телефона')],
        ['Написать номер телефона'],
        ['Возвращаться']
    ])
    .resize()
}



let buttons_en = {
    "general_menu" : Markup.keyboard([
        ['Services', 'Special offers'], 
        ['Contacts','Change the language'], 
        ['Contact the service department'] 
    ])
    .oneTime()
    .resize(),

    "services" : Markup.keyboard([
        ['Branding/rebranding'],
        ['Design Web/mobile and graphic'],
        ['Web development'],
        ['Business strategy and marketing'],
        ['Targeting'],
        ['Photo and video production'],
        ['Typography'],
        ['Menu']
    ])
    .oneTime()
    .resize(),

    "questions" : Markup.keyboard([
        [texts_en.questions_text[0]], 
        [texts_en.questions_text[1]], 
        ['Menu'] 
      ])
      .oneTime()
      .resize(),

      "number" : Markup.keyboard([
        [Markup.button.contactRequest('Share by phone number')],
        ['Write the phone number'],
        ['Go back']
    ])
    .resize()
}


export {buttons_hy, buttons_ru, buttons_en}
