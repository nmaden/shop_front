export default {
    "notif_button": "Send notification of guest arrival",
    "notif_button_mobile": "Send notification",
    "menu_header": [
        {
            "name": "home",
            "to": "/",
            "url": false
        },
        {
            "name": "useful phone numbers",
            "to": "/telephones",
            "url": false
        },
        {
            "name": "cellular operators",
            "to": "/connection",
            "url": false
        },
        {
            "name": "migration gulde",
            "to": "/migration",
            "url": false
        },
        {
            "name": "currency",
            "to": "/currency",
            "url": false
        },
        {
            "name": "hotels",
            "to": "https://kazakhstan.travel/hotels",
            "url": true
        },
        {
            "name": "3D tours around Kazakhstan",
            "to": "https://kazakhstan.travel/threedtours",
            "url": true
        },
        {
            "name": "Tours",
            "to": "https://kazakhstan.travel/tours",
            "url": true
        },
        {
            "name": "How to get a Kazakhstan visa",
            "to": "https://kazakhstan.travel/tourist-help/ru/documents",
            "url": true
        },
        {
            "name": "Time zones",
            "to": "https://kazakhstan.travel/tourist-help/ru/time_zones",
            "url": true
        },
        {
            "name": "Weather",
            "to": "https://kazakhstan.travel/tourist-help/ru/weather",
            "url": true
        },
        {
            "name": "Languages",
            "to": "https://kazakhstan.travel/tourist-help/ru/language",
            "url": true
        },
        {
            "name": "Transport infrastructure",
            "to": "https://kazakhstan.travel/tourist-help/ru/transport",
            "url": true
        },
        {
            "name": "Useful web resources",
            "to": "https://kazakhstan.travel/tourist-help/ru/resources",
            "url": true
        },
        {
            "name": "Публикации о Казахстане",
            "to": "https://kazakhstan.travel/tourist-help/ru/phones",
            "url": true
        }
    ],
    "baner__title": "К ВАМ ПРИБЫЛ ИНОСТРАННЫЙ ГОСТЬ?",
    "baner__description": "Согласно Постановлению Правительства № 148 от 21 января 2012 года вы обязаны в течение 3-х дней проинформировать органы внутренних дел.",
    "baner__array": [
        {
            "id": 1,
            "img": require('../assets/icons/smart__phone.svg'),
            "text": "Авторизуйтесь в системе или мобильном приложении eQonaq"
        },
        {
            "id": 2,
            "img": require('../assets/icons/smart__face.svg'),
            "text": "Отсканируйте документ иностранца или внесите данные вручную"
        },
        {
            "id": 3,
            "img":  require('../assets/icons/smart__card.svg'),
            "text": "Результат услуги будет доступен в личном кабинете"
        }
    ],
    welcome__title: "Добро пожаловать в информационную cистему eQonaq",
    welcome__task__title: "Основные задачи",
    welcome__service: [
        {
            img: require('../assets/icons/1.svg'),
            text: 'Создание единого реестра мест размещения.'
        },
        {
            img: require('../assets/icons/2.svg'),
            text: 'Учет и контроль прибытия и убытия туристов.'
        },
        {
            img: require('../assets/icons/3.svg'),
            text: 'Аналитика туристического потока и портрета туриста.'
        },
        {
            img: require('../assets/icons/4.svg'),
            text: 'Инфраструктура для учета туристического сбора.'
        },
        {
            img: require('../assets/icons/5.svg'),
            text: 'Предоставление различных сервисов для повышения качества пребывания туристов.'
        },
        {
            img: require('../assets/icons/6.svg'),
            text: 'Уведомление МВД РК о прибытии иностранных туристов, во избежание штрафа по ст. 518'
        },
    ],
    interesting__places__title: 'Интересные места',
    interesting__places: [
        {
            title: 'УЗНАЙТЕ БОЛЬШЕ О КАЗАХСТАНЕ НА kazakhstan.travel',
            img: require('../assets/all/pr_img0.png'),
            uri: 'https://kazakhstan.travel/publications/ru/15/10-must-see-landscapes-in-kazakhstan',
            sub_logo: require('../assets/all/travelLogo.svg')
        },
        {
            title: 'ОТДЫХ НА Открытом воздухе',
            img: require('../assets/all/pr_img1.png'),
            uri: 'https://kazakhstan.travel/publications/ru/15/10-must-see-landscapes-in-kazakhstan'
        },
        {
            title: 'АРХИТЕКТУРА',
            img: require('../assets/all/pr_img2.png'),
            uri: 'https://kazakhstan.travel/publications/ru/108/seven-architectural-wonders-of-kazakhstan'
        },
        {
            title: 'Куда съездить',
            img: require('../assets/all/pr_img3.png'),
            uri: 'https://kazakhstan.travel/'
        },
    ],
    bookhotel__title: 'Забронировать отель / гостиницу',
    bookhotel__descriptions: 'Найдите спецпредложения от отелей, домов и других вариантов',
    bookhotel__city: 'Куда вы хотите поехать?',
    bookhotel__arrival: 'Заезд',
    bookhotel__departure: 'Отъезд',
    book__hotel__users: 'Взрослых',
    book__hotel__numbers: 'Номер',
    book__hotel__get__price: 'Проверить цены',
    book__hotel__applications__title: 'Полезные приложения',
    book__hotel__footer__reg: 'ЗАРЕГИСТРИРОВАТЬСЯ',
    book__hotel__footer__login: 'АВТОРИЗОВАТЬСЯ',
    footer__info: 'ИНФОРМАЦИЯ',
    footer__menu__info: [
        {
            name: 'О системе',
            to: '',
            type_route: 'on_page',
        },
        {
            name: 'Номера телефонов',
            to: '/telephones',
            type_route: 'on_site',
        },
        {
            name: 'Связь',
            to: '/connection',
            type_route: 'on_site',
        },
        {
            name: 'Миграционный справочник',
            to: '/migration',
            type_route: 'on_site',
        },
        {
            name: 'Валюта',
            to: '/currency',
            type_route: 'on_site',
        },
        {
            name: 'Гостиницы',
            to: 'https://api.eqonaq.kz/hotels',
            type_route: 'on_new_site',
        },
    ],
    auth__login__title: 'Войти в eQonaq?',
    auth__login__descriptions: 'Выберите способ авторизации',
    auth__reg__title: 'Впервые на eQonaq?',
    auth__reg__button: 'ЗАРЕГИСТРИРОВАТЬСЯ',
    auth__reg__modal__title: 'Зарегистрироваться как',
    auth__reg__modal__btn__individuals: 'Физическое лицо',
    auth__reg__modal__btn__entities: ' Юридическое лицо',
    tabs_array__name__eds: 'ЭЦП',
    tabs_array__name__login: 'Логин',
    eds__btn: 'Выбрать сертификат',
    login__label__password: 'Пароль',
    login__btn: 'Войти',
    login__forgot__password: 'Забыли пароль?',
    nav__bar__title: 'Назад',
    registration__title: 'Регистрация',
    registration__description: 'Данный вид регистрации дает вам статус постоянного пользователя. Вы можете без ограничений пользоваться всеми услугами.',
    registration__eds__btn: 'Выбрать ЭЦП',
    forgot__password__page__title: 'Восстановления пароля',
    forgot__password__page__input__placeholder: 'Введите электронный адрес',
    forgot__password__page__btn: 'Отправить',
    telephones__page__title: 'Полезные номера телефонов',
    telephones__page__description: 'Вызов экстренных служб с любого оператора сотовой связи и городских номеров производится в Казахстане бесплатно',
    telephones__page__phones: [
        {
            title: 'служба аварийно-спасательных работ (служба спасения)',
            number: '112',
            phone: 'tel:112',
        },
        {
            title: 'противопожарная служба',
            number: '101',
            phone: 'tel:101',
        },
        {
            title: 'полиция',
            number: '102',
            phone: 'tel:102',
        },
        {
            title: 'скорая медицинская помощь',
            number: '103',
            phone: 'tel:103',
        },
        {
            title: 'заказ международных и межугородных звонков',
            number: '171',
            phone: 'tel:171',
        },
        {
            title: 'справочная служба операторов местной телефонной связи',
            number: '118',
            phone: 'tel:118',
        },
        {
            title: 'платная информационная служба',
            number: '169',
            phone: 'tel:169',
        },
    ],
    migration__page__title: 'Миграционный справочник',
    migration__page__description: 'Миграционный справочник - это справочник с данными о необходимости визы для прибывания в Республики Казахстан. Также информация о безвизовом нахождений туриста.',
    migration__page__description__two: 'Для получения элекронной визы необходимо обратиться в визово-миграционный портал {action}',
    migration__select__label: 'Выберите страну',
    migration__select__description: 'Турист может прибывать в Республике Казахстан без визы в течении {number__text} дней, если свыше указанного срока необходимо оформление визы.',
    migration__day: 'Безвизовый въезд',
    migration__visa: 'Электронная виза (eVisa)',
    migration__day__text: 'Дней',

}