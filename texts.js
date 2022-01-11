// .replaceAll('	', '')

let texts_hy = {
	"start_text" : `
		Բարի գալուստ <b>BeeBrand Creative Agency</b> 
		Ցանկանու՞մ եք տարբերվել, 
		լինել կրեատիվ և մրցունակ, 
		ունենալ ձեր ուրույն տեղը շուկայում, 
		դիմե՛ք մեզ:
	`.replaceAll('	', ''),

	"action_text" : `
		Մեզ հայտ ուղարկելու համար 
		գրեք ձեր հեռախոսահամարը կամ 
		կիսվեք ձեր սոց կայքով և 
		մենք անպայման կապ կհաստատենք Ձեզ հետ։
	`.replaceAll('	', ''),

	"after_req_text" : `
		Շնորհակալություն հայտի համար, մեր պուպուշ բոքոն մասնագետը շուտով կկապվի Ձեզ հետ։
	`,

	"contact_text" : `
		Կիևյան 11
		093997374
		Beebrand.am
		
		Instagram 
		Photostudio - beelight.ph
		Branding - beebrand.ca
	`.replaceAll('	', ''),

	"questions_text" : [
		'Ծառայության արժեք',
		'Ինչպես կապ հաստատել'
	],

	"answers" : [
		'Մեր ծառայությունները չունեն ֆիքսված արժեք, դրանք փոփոխական են կախված փաթեթից, ծառայությունից և քանակից։ Մանրամասների համար գրեք մեզ։',
		'Վերադարձեք մենյու սեղմեք 《կապ մեզ հետ》կոճակը '
	]
	
}


let texts_ru = {
	"start_text" : `
		Добро пожаловать <b>Beebrand</b>. 
		Хотите отличаться, 
		быть творческими, 
		конкурентоспособными, 
		иметь собственное место на всех платформax ? 
		Свяжитесь с нами!
	`.replaceAll('	', ''),

	"action_text" : `
	Для заявки поделитесь вашими соцсетями или 
	напишите ваш номер телефона и мы обязательно свяжемся с вами.
	`.replaceAll('	', ''),

	"after_req_text" : `
		Спасибо за заявку. Наш специалист свяжется с вами в ближайшее время. 
	`,

	"contact_text" : `
		Киевян 11
		093997374
		Beebrand.am
		
		Instagram 
		Photostudio - beelight.ph
		Branding - beebrand.ca
	`.replaceAll('	', ''),

	"questions_text" : [
		'Цена услуг',
		'Как связаться с нами ?'
	],

	"answers" : [
		'У нас нет фиксированных цен.Они разные зависимости от покета услуг и количества. Для деталей напишите нам.',
		'Вернитесь в меню и нажмите на кнопку "связаться с нами".'
	]
	
}



let texts_en = {
	"start_text" : `
		Welcome to <b>BIBRAND</b> 
		If You want to be different,  
		creative and competitive, 
		to have Your own place on the online platform, 
		contact us!
	`.replaceAll('	', ''),

	"action_text" : `
		For apply share your social networks or write your phone number 
		and we will definitely contact you.
	`.replaceAll('	', ''),

	"after_req_text" : `
		Thank you for your request. Our specialist will contact you soon.
	`,

	"contact_text" : `
		Kievyan 11
		093997374
		Beebrand.am
		
		Instagram 
		Photostudio - beelight.ph
		Branding - beebrand.ca
	`.replaceAll('	', ''),

	"questions_text" : [
		'Price lists',
		'How contact us?'
	],

	"answers" : [
		'Our services have no fixed value, they vary depending on the package, service and quantity. Write to us for details.',
		'Back to menu and click on "contact us button".'
	]
	
}


export {texts_hy, texts_ru, texts_en}
