export const translations = {
  uk: {
    h: { home: "Додому", about: "Про мене", contacts: "Контакти", my_works: "Мої Роботи", greeting: "Привіт!" },
    home: {
      name: "Лашин Ростислав",
      greeting: "Вітаю! Мене звати",
      knowledge: "Frontend developer",
      from: "Ужгород / Україна",
      description:
        "Створення красивих, функціональних та зручних вебсайтів. Я зосереджуюсь на розробці адаптивних, інтерактивних веб-застосунків з використанням сучасних технологій.",
      contact_me: "Зв'язатися зі мною",
      resume: "Моє резюме",
    },
    aboutMe: {
      headH2: "Про мене",
      headH4: "Інформація",
      context:
        "Мотивований молодший розробник з практичним досвідом створення SPA-застосунків за допомогою React + Vite. Я створив кілька проектів на GitHub, включаючи прототип соціальної мережі. Я відкритий до неоплачуваних стажувань та маю багато вільного часу для навчання та розвитку. Я маю ґрунтовне розуміння основ React (керування станами, хуки, маршрутизація) та використовую ChatGPT для рефакторингу коду та покращення архітектури.",
      tools: "Інструменти, які я використовую:",
    },
    my_works: {
      headH2: "Моє портфоліо",
      headH4: "Мої останні роботи",
      description:
        "Ласкаво просимо до мого портфоліо веб-розробки! Перегляньте колекцію моїх проектів, що демонструють мій досвід у frontend-розробці.",
      aboutP: "Про проект:",
      toolsIUse: "Інструменти які я використовував:",
      projects: {
        WeatherApp: { aboutProject: "Ви можете побачити прогноз на сьогодні. Сучасний дизайн з гарним" },
        Echat: {
          aboutProject:
            "Ви можете робити публікації, Rest-Api (новини, найкращі місця, фільми), ви можете надсилати повідомлення іншому користувачеві, профіль, авторизація користувача, ігри (хрестики-нулики, монополія) оновлення стану в режимі реального часу.",
        },
        LeafyCartShop: {
          aboutProject:
            "Ви можете додавати до кошика, потім вибирати кількість товару, після чого ви можете заповнити форму та здійснити операцію POST в liqPay. Можна переглянути інформацію для кожного товару. Сторінка адміністратора",
        },
        UzhRent: {
          aboutProject:
            "Лендінг сторінка з анімацією. Оновлення часу закінчення оренди. Люди можуть бачити, коли вони можуть вчасно прийти та забрати інструмент. А також сторінка адміністратора для редагування інструментів.",
        },
      },
    },
    contacts: {
      headH2: "Надішліть листа",
      headH4: "Щоб зв'язатися зі мною",
      description:
        "Готові разом створити щось грандіозне? Якщо у вас є потенційна можливість, проект або посада на повний робочий день, яку ви хотіли б обговорити, будь ласка, зв'яжіться зі мною, використовуючи форму нижче.",
      name: "Ім'я",
      placeHName: "Введіть своє ім'я",
      Email: "Email",
      placeHEmail: "Введіть своє Email",
      placeHTextArea: "Введіть своє повідомлення",
      formBtn: "Надіслати",
    },
  },
  en: {
    h: { home: "Home", about: "About me", contacts: "Contacts", my_works: "My Works", greeting: "Hello!" },
    home: {
      name: "Rostislav Lashyn",
      greeting: "Hi! I'm",
      knowledge: "Frontend developer",
      from: "based in Uzhgorod, Ukraine",
      description:
        "Creating beautiful, functional, and user-friendly websites. I focus on building responsive, interactive web applications using modern technologies.",
      contact_me: "contact me",
      resume: "resume",
    },
    aboutMe: {
      headH2: "About Me",
      headH4: "Information",
      context:
        "Motivated junior developer with hands-on experience in creating SPA applications using React + Vite. I have built several projects on GitHub, including a prototype of a social network. I am open to unpaid internships and have plenty of free time for learning and growth. I have a solid understanding of React fundamentals (state management, hooks, routing), and I use ChatGPT for code refactoring and improving architecture.",
      tools: "Tools I use:",
    },
    my_works: {
      headH2: "My latest work",
      headH4: "My portfolio",
      description: "Welcome to my web development portfolio! Explore a collection of my projects showcasing my expertise in frontend development.",
      aboutP: "About project:",
      toolsIUse: "Tools i use:",
      projects: {
        WeatherApp: { aboutProject: "You can see forecast for today. Modern design with good" },
        Echat: {
          aboutProject:
            "You can posting, Rest-Api(news, top places, films), You can send message to another user, Profile, User auth, Games(TicTacToe,Monopoly)   Real-time state updates.",
        },
        LeafyCartShop: {
          aboutProject:
            "You can add to cart, then chose quantity of product then you can fill the form and POST the liqPay operation. Watch the items closely for each product. Admin Page",
        },
        UzhRent: {
          aboutProject:
            "Landing page with animation. Updating time when rent is end. People can see when they can come and take a tool in time. And Admin Page for editing tools",
        },
      },
    },
    contacts: {
      headH2: "Connect with me",
      headH4: "Get in touch",
      description:
        "Ready to build something great together? If you have a potential opportunity, project, or full-time position you'd like to discuss, please reach out using the form below.",
      name: "Name",
      placeHName: "Please enter your name",
      Email: "Email",
      placeHEmail: "Please enter your Email",
      placeHTextArea: "Please enter your message",
      formBtn: "SEND",
    },
  },
};

export type Language = keyof typeof translations; // "uk" | "en"
