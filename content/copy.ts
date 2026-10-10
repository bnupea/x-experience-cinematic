export const locales = ["ru", "en", "zh-cn"] as const;
export type Locale = (typeof locales)[number];
export const publicLocales = ["en", "zh-cn"] as const satisfies readonly Locale[];

export type Product = {
  name: string;
  eyebrow: string;
  description: string;
  role: string;
  image: string;
};

export type PartnerGroup = {
  region: string;
  venues: string[];
};

export type SiteCopy = {
  localeName: string;
  nav: string[];
  hero: {
    eyebrow: string;
    title: string;
    sub: string;
    cta: string;
    scroll: string;
    pause: string;
    play: string;
    finale: string;
    chapters: { label: string; title: string; text: string }[];
  };
  manifesto: { lead: string; body: string };
  history: { eyebrow: string; instruction: string; steps: { label: string; title: string; text: string }[] };
  system: { eyebrow: string; title: string; intro: string; items: { title: string; text: string }[] };
  technology: {
    eyebrow: string;
    title: string;
    intro: string;
    deviceAlt: string;
    deviceLabel: string;
    rangeLabel: string;
    stepLabel: string;
    notes: { title: string; text: string }[];
  };
  collection: { eyebrow: string; title: string; intro: string; roleLabel: string; request: string; products: Product[] };
  station: { eyebrow: string; title: string; body: string; points: string[] };
  people: { eyebrow: string; title: string; body: string; standards: string[] };
  events: { eyebrow: string; title: string; body: string; formats: string[] };
  proof: {
    eyebrow: string;
    title: string;
    body: string;
    regions: string[];
    partnersEyebrow: string;
    partnersTitle: string;
    partners: PartnerGroup[];
  };
  finale: { eyebrow: string; title: string; body: string; primary: string; secondary: string; formTitle: string; fields: string[]; submit: string; note: string; directTitle: string; directBody: string; phone: string; phoneDisplay: string; coverageTitle: string; optional: string; consent: string };
  footer: { line: string; legal: string };
};

const images = [
  "/media/new-emotions.webp",
  "/media/anima.webp",
  "/media/aio-space.webp",
  "/media/aio-welcome.webp",
  "/media/mr-smoke.webp",
  "/media/lipstick.webp",
  "/media/porsche.webp",
  "/media/waterfall-portrait-v2.webp",
];

const partnerVenues = {
  uae: [
    "Marriott Hotel Al Forsan",
    "Topgolf",
    "FIVE Palm Jumeirah",
    "FIVE Jumeirah Village",
    "W Hotel",
    "Nikki Beach Hotel",
    "Nikki Beach Club",
    "Park Hyatt",
    "Cielo Sky Lounge",
    "The Edition Hotel",
    "ME Hotel",
  ],
  maldives: ["Cheval Blanc", "Waldorf Astoria Ithaafushi", "OZEN Reserve Bolifushi", "OBLU Sangeli", "OZEN Reserve Maadhoo", "Amilla Fushi", "Hilton"],
  spain: ["Alabriga Hotel"],
  russia: ["SO/ Sofitel Hotel", "Lotte Hotel", "Paopoporta Restaurant", "Block Restaurant", "Department 57"],
  qatar: ["Fairmont", "Raffles", "Al Messila Hotel", "Stage Club", "Sheraton", "Pullman West Bay", "Crowne Plaza West Bay"],
  india: ["JW Marriott Bengaluru", "Renaissance Bengaluru", "JW Marriott Bengaluru Prestige Golfshire", "Sheraton Grand", "Nu Air Premium Café", "The Westin Goa", "Hyatt Centric"],
  saudiArabia: ["TA3 Holding"],
  turkey: ["Six Senses Kocataş Mansions", "Mandarin Oriental Istanbul — soon"],
};

export const copy: Record<Locale, SiteCopy> = {
  ru: {
    localeName: "RU",
    nav: ["Система", "Технология", "Коллекция", "Партнёры", "Контакт"],
    hero: {
      eyebrow: "X Experience · Shisha Management",
      title: "Создаём атмосферу, в которую хочется возвращаться.",
      sub: "Проектируем, запускаем и ежедневно управляем премиальным кальянным сервисом для отелей, ресторанов, rooftop-пространств и частных событий.",
      cta: "Обсудить партнёрство",
      scroll: "Прокрутите, чтобы войти",
      pause: "Пауза",
      play: "Воспроизвести",
      finale: "Shisha management for hospitality",
      chapters: [
        { label: "01 · Объект", title: "Атмосфера начинается с объекта.", text: "AIO Space становится точкой притяжения и задаёт характер гостевой сцены." },
        { label: "02 · Технология", title: "Жар остаётся точным.", text: "Электронная система переносит сложность подготовки за пределы внимания гостя." },
        { label: "03 · Сервис", title: "Команда держит ритм.", text: "Подготовка, форма, голос и подача складываются в единый стандарт площадки." },
        { label: "04 · Управление", title: "Один партнёр. Весь цикл.", text: "Подбираем коллекцию, запускаем сервис и ежедневно контролируем его качество." },
      ],
    },
    manifesto: {
      lead: "Мы не продаём кальяны.",
      body: "Мы создаём присутствие — через объект, свет, команду и безупречный ритм сервиса.",
    },
    history: {
      eyebrow: "Anima / анатомия объекта",
      instruction: "Прокрутка управляет фильмом",
      steps: [
        { label: "01 · Силуэт", title: "Сначала — жест.", text: "Асимметричная форма возникает в темноте и становится визуальным центром пространства." },
        { label: "02 · Материал", title: "Металл. Стекло. Свет.", text: "Тёплый отблеск выявляет фактуру, прозрачность и точность каждого сопряжения." },
        { label: "03 · Технология", title: "Сложность остаётся за сценой.", text: "Электронный нагрев поддерживает чистый, повторяемый сценарий подготовки и подачи." },
        { label: "04 · Присутствие", title: "В памяти остаётся впечатление.", text: "Объект, свет и ритуал сервиса собираются в одну цельную гостевую сцену." },
      ],
    },
    system: {
      eyebrow: "Операционная модель",
      title: "",
      intro: "",
      items: [
        { title: "Оборудование", text: "Премиальные объекты, электронные системы нагрева, расходники и сервисные инструменты." },
        { title: "Команда", text: "Подбор, обучение, форма, стандарты поведения и контроль персонала." },
        { title: "Сценарий", text: "Авторское меню, подача, визуальный язык и формат под аудиторию площадки." },
        { title: "Управление", text: "Запуск, склад, учёт, отчётность, качество и развитие направления." },
      ],
    },
    technology: {
      eyebrow: "Технология",
      title: "Электрический нагрев. Без угля.",
      intro: "В основе сервиса — автономный электрический нагреватель Nu Air. Он заменяет угли, розжиг, традиционную чашу и калауд: чище подготовка, точнее температура и стабильнее вкус.",
      deviceAlt: "Автономный электрический нагреватель Nu Air",
      deviceLabel: "Автономный электрический нагреватель",
      rangeLabel: "Диапазон температуры",
      stepLabel: "Настройка с шагом 1°C",
      notes: [
        { title: "Никакого угля", text: "Без углей, розжига, пепла и запаха гари в гостевом пространстве." },
        { title: "Точная температура", text: "Регулировка от 220°C до 315°C с шагом 1°C помогает раскрыть смесь без горечи." },
        { title: "Мгновенный старт", text: "Одно нажатие — и через несколько минут система готова к подаче." },
        { title: "Экономика", text: "Нет регулярных расходов на уголь; окупаемость рассчитывается под загрузку конкретной площадки." },
      ],
    },
    collection: {
      eyebrow: "Коллекция",
      title: "Объекты с разным характером.",
      intro: "От сдержанной классики до световой инсталляции. Финальный состав и доступность уточняются для конкретного рынка и пространства.",
      roleLabel: "Роль в пространстве",
      request: "Запросить доступность",
      products: [
        { name: "New Emotions Classic", eyebrow: "Core service", description: "Минималистичный премиальный объект для основной посадки. Электронная подача делает ежедневный сервис чище и стабильнее.", role: "Lounge, rooftop, private events, вечерние посадки", image: images[0] },
        { name: "Anima Designer", eyebrow: "Design object", description: "Скульптурная модель, которая работает как предмет интерьера и создаёт выразительный wow-эффект.", role: "VIP-столы, камерные зоны, вечерние мероприятия", image: images[1] },
        { name: "AIO Space", eyebrow: "Modern system", description: "Компактная система с футуристичным силуэтом для технологичных и приватных пространств.", role: "Private rooms, клубы, современный lounge", image: images[2] },
        { name: "AIO Welcome", eyebrow: "LED experience", description: "Модель с LED-коммуникацией — welcome-объект, брендированный акцент или часть event-сценария.", role: "Открытие вечера, бренд-активации, центральная зона", image: images[3] },
        { name: "Mr. Smoke", eyebrow: "Light signature", description: "Чистая вертикальная форма с подсветкой: современная заметная подача без ощущения тяжёлой классики.", role: "Rooftop, bar, lounge, social-media point", image: images[4] },
        { name: "Lipstick", eyebrow: "Fashion object", description: "Самая fashion-модель коллекции: графичная фактура, точный силуэт и сильная фотогеничность.", role: "Cocktail nights, beauty events, fashion hospitality", image: images[5] },
        { name: "Porsche Design", eyebrow: "Architectural minimalism", description: "Строгая инженерная эстетика для сдержанных премиальных интерьеров.", role: "Business guests, cigar lounge, premium bar", image: images[6] },
        { name: "Waterfall", eyebrow: "Visual ritual", description: "Вода, свет и объём создают на столе небольшую сцену — повод остановиться, снять видео и запомнить подачу.", role: "Hero-подача, VIP-зона, центральный визуальный акцент", image: images[7] },
      ],
    },
    station: {
      eyebrow: "Signature station",
      title: "Рабочая станция становится частью интерьера.",
      body: "Тёмный камень, тёплая подсветка и встроенные LED-панели превращают функциональную зону в сценографический объект — без визуального шума в зале.",
      points: ["Рабочая зона", "Камень и onyx", "LED-контент", "Скрытое хранение"],
    },
    people: {
      eyebrow: "People & standards",
      title: "Команда продолжает язык пространства.",
      body: "Чёрный силуэт, деликатный золотой знак и свобода движения. Внешний вид, речь и ритуал подачи собираются в единый стандарт.",
      standards: ["Подготовка", "Подача", "Guest care", "Контроль качества"],
    },
    events: {
      eyebrow: "Catering & events",
      title: "Тот же уровень — за пределами постоянной площадки.",
      body: "Выездной сервис переносит коллекцию, команду и визуальный ритуал туда, где происходит событие.",
      formats: ["Rooftop", "VIP-zone", "Private event", "Hotel activation", "Brand event"],
    },
    proof: {
      eyebrow: "Международный опыт",
      title: "Нам доверяют пространства мирового уровня.",
      body: "От городских rooftop-площадок до курортных отелей — технология Nu Air и сервисная модель работают в разных hospitality-сценариях.",
      regions: ["ОАЭ", "Мальдивы", "Испания", "Россия", "Катар", "Индия", "Саудовская Аравия", "Турция"],
      partnersEyebrow: "Selected hospitality",
      partnersTitle: "Отели, рестораны и клубы, с которыми мы сотрудничаем.",
      partners: [
        { region: "ОАЭ", venues: partnerVenues.uae },
        { region: "Мальдивы", venues: partnerVenues.maldives },
        { region: "Испания", venues: partnerVenues.spain },
        { region: "Россия", venues: partnerVenues.russia },
        { region: "Катар", venues: partnerVenues.qatar },
        { region: "Индия", venues: partnerVenues.india },
        { region: "Саудовская Аравия", venues: partnerVenues.saudiArabia },
        { region: "Турция", venues: partnerVenues.turkey },
      ],
    },
    finale: {
      eyebrow: "Partnership",
      title: "Давайте создадим новую категорию гостевого опыта.",
      body: "Расскажите о площадке, городе и формате. Команда уточнит задачу и подготовит следующий шаг.",
      primary: "Обсудить партнёрство",
      secondary: "Запросить презентацию",
      formTitle: "Коротко о проекте",
      fields: ["Имя", "Компания / площадка", "Город и страна", "Рабочий e-mail", "Телефон / мессенджер", "Сообщение"],
      submit: "Подготовить запрос",
      directTitle: "Прямой контакт",
      directBody: "Быстрее всего — написать в WhatsApp. Опишите площадку одним сообщением — команда ответит в этом же чате.",
      phone: "+8613250224151",
      phoneDisplay: "+86 132 5022 4151",
      coverageTitle: "География проектов",
      optional: "необязательно",
      consent: "По кнопке откроется WhatsApp с готовым текстом запроса. Сообщение уйдёт только после вашего подтверждения в мессенджере.",
      note: "Откроется WhatsApp с подготовленным запросом. Проверьте текст и отправьте сообщение команде.",
    },
    footer: { line: "X Experience · Elevating hospitality", legal: "Для совершеннолетней аудитории · 18+" },
  },
  en: {
    localeName: "EN", nav: ["System", "Technology", "Collection", "Partners", "Contact"],
    hero: { eyebrow: "X Experience · Shisha Management", title: "Atmospheres worth returning to.", sub: "We design, launch and operate premium shisha service for hotels, restaurants, rooftops and private events.", cta: "Discuss a partnership", scroll: "Scroll to enter", pause: "Pause", play: "Play", finale: "Shisha management for hospitality", chapters: [
      { label: "01 · Object", title: "Atmosphere begins with an object.", text: "AIO Space becomes a point of attraction and sets the character of the guest scene." },
      { label: "02 · Technology", title: "Heat stays precise.", text: "The electronic system moves preparation complexity beyond the guest's attention." },
      { label: "03 · Service", title: "The team keeps the rhythm.", text: "Preparation, uniform, voice and presentation become one venue standard." },
      { label: "04 · Management", title: "One partner. The whole cycle.", text: "We curate the collection, launch the service and manage quality every day." },
    ] },
    manifesto: { lead: "We do not sell shishas.", body: "We create presence — through object, light, people and an impeccable service rhythm." },
    history: { eyebrow: "Anima / anatomy of an object", instruction: "Scroll controls the film", steps: [
      { label: "01 · Silhouette", title: "First, a gesture.", text: "An asymmetric form emerges from darkness and becomes the visual centre of the room." },
      { label: "02 · Material", title: "Metal. Glass. Light.", text: "Warm highlights reveal texture, transparency and the precision of every junction." },
      { label: "03 · Technology", title: "Complexity stays backstage.", text: "Electronic heat supports a cleaner, repeatable preparation and presentation flow." },
      { label: "04 · Presence", title: "The impression remains.", text: "Object, light and service ritual resolve into one coherent hospitality scene." },
    ] },
    system: { eyebrow: "Operating model", title: "", intro: "", items: [
      { title: "Equipment", text: "Premium objects, electronic heating systems, consumables and service tools." }, { title: "People", text: "Recruitment, training, uniform, conduct and team control." }, { title: "Scenario", text: "Menu architecture, presentation, visual language and a venue-specific guest journey." }, { title: "Management", text: "Launch, inventory, reporting, quality and continuous development." },
    ] },
    technology: { eyebrow: "Technology", title: "Electric heat. No charcoal.", intro: "The service is built around an autonomous Nu Air electric heater. It replaces charcoal, ignition, the traditional bowl and heat manager for cleaner preparation, precise temperature and consistent flavour.", deviceAlt: "Nu Air autonomous electric tobacco heater", deviceLabel: "Autonomous electric heater", rangeLabel: "Temperature range", stepLabel: "Adjustable in 1°C steps", notes: [
      { title: "No charcoal", text: "No charcoal, ignition, ash or burnt smell in the guest environment." }, { title: "Precise temperature", text: "Adjustable from 220°C to 315°C in 1°C steps to reveal flavour without bitterness." }, { title: "Instant start", text: "One press and the system is ready for service within a few minutes." }, { title: "Economics", text: "No recurring charcoal spend; payback is calculated for each venue's actual service volume." },
    ] },
    collection: { eyebrow: "Collection", title: "Objects with distinct character.", intro: "From restrained classicism to a light installation. Final selection and availability are confirmed for each market and venue.", roleLabel: "Role in the space", request: "Request availability", products: [
      { name: "New Emotions Classic", eyebrow: "Core service", description: "A minimal premium object for everyday seating, designed for a cleaner and more consistent service flow.", role: "Lounge, rooftop, private events, evening service", image: images[0] }, { name: "Anima Designer", eyebrow: "Design object", description: "A sculptural model that works as an interior object and creates a precise visual impact.", role: "VIP tables, intimate zones, evening events", image: images[1] }, { name: "AIO Space", eyebrow: "Modern system", description: "A compact system with a futuristic silhouette for technology-led private spaces.", role: "Private rooms, clubs, contemporary lounges", image: images[2] }, { name: "AIO Welcome", eyebrow: "LED experience", description: "LED communication turns the object into a welcome piece, branded focus or event moment.", role: "Opening ritual, activations, central display", image: images[3] }, { name: "Mr. Smoke", eyebrow: "Light signature", description: "A clean vertical form with light — visible and contemporary without the weight of traditional styling.", role: "Rooftop, bar, lounge, social content", image: images[4] }, { name: "Lipstick", eyebrow: "Fashion object", description: "The collection’s fashion statement: graphic texture, exact silhouette and strong photographic presence.", role: "Cocktail nights, beauty events, fashion hospitality", image: images[5] }, { name: "Porsche Design", eyebrow: "Architectural minimalism", description: "Restrained engineering aesthetics for quiet premium interiors.", role: "Business guests, cigar lounge, premium bar", image: images[6] }, { name: "Waterfall", eyebrow: "Visual ritual", description: "Water, light and volume become a small stage on the table — an invitation to pause, film and remember.", role: "Hero presentation, VIP zone, central visual focus", image: images[7] },
    ] },
    station: { eyebrow: "Signature station", title: "The service station becomes part of the interior.", body: "Dark stone, warm light and integrated LED panels turn a functional zone into a scenographic object — without visual noise.", points: ["Work zone", "Stone & onyx", "LED content", "Hidden storage"] },
    people: { eyebrow: "People & standards", title: "The team continues the language of the space.", body: "A black silhouette, a restrained gold signature and freedom of movement. Appearance, voice and presentation become one standard.", standards: ["Preparation", "Presentation", "Guest care", "Quality control"] },
    events: { eyebrow: "Catering & events", title: "The same standard, beyond the permanent venue.", body: "Mobile service brings the collection, people and visual ritual wherever the event happens.", formats: ["Rooftop", "VIP zone", "Private event", "Hotel activation", "Brand event"] },
    proof: { eyebrow: "International experience", title: "Trusted by world-class destinations.", body: "From urban rooftops to resort hotels, Nu Air technology and the service model operate across distinct hospitality settings.", regions: ["UAE", "Maldives", "Spain", "Russia", "Qatar", "India", "Saudi Arabia", "Türkiye"], partnersEyebrow: "Selected hospitality", partnersTitle: "Hotels, restaurants and clubs we work with.", partners: [
      { region: "UAE", venues: partnerVenues.uae }, { region: "Maldives", venues: partnerVenues.maldives }, { region: "Spain", venues: partnerVenues.spain }, { region: "Russia", venues: partnerVenues.russia }, { region: "Qatar", venues: partnerVenues.qatar }, { region: "India", venues: partnerVenues.india }, { region: "Saudi Arabia", venues: partnerVenues.saudiArabia }, { region: "Türkiye", venues: partnerVenues.turkey },
    ] },
    finale: { eyebrow: "Partnership", title: "Let us create a new category of guest experience.", body: "Tell us about the venue, city and format. The team will qualify the brief and propose the next step.", primary: "Discuss a partnership", secondary: "Request the presentation", formTitle: "About your project", fields: ["Name", "Company / venue", "City & country", "Work e-mail", "Phone / messenger", "Message"], submit: "Prepare request", note: "WhatsApp will open with a prepared request. Review the message and send it to the team.", directTitle: "Direct contact", directBody: "The fastest route is WhatsApp. Describe the venue in one message and the team will answer in the same chat.", phone: "+8613250224151", phoneDisplay: "+86 132 5022 4151", coverageTitle: "Where we work", optional: "optional", consent: "The button opens WhatsApp with the request already written. Nothing is sent until you confirm it in the messenger." },
    footer: { line: "X Experience · Elevating hospitality", legal: "For adults · 18+" },
  },
  "zh-cn": {
    localeName: "中文", nav: ["系统", "技术", "系列", "合作伙伴", "联系"],
    hero: { eyebrow: "X Experience · 水烟运营管理", title: "创造让人愿意再次回到的氛围。", sub: "为酒店、餐厅、屋顶空间与私人活动设计、启动并日常运营高端水烟服务。", cta: "洽谈合作", scroll: "向下探索", pause: "暂停", play: "播放", finale: "高端酒店业水烟运营管理", chapters: [
      { label: "01 · 器物", title: "氛围，从一件器物开始。", text: "AIO Space 成为视觉焦点，并定义宾客场景的气质。" },
      { label: "02 · 技术", title: "热量始终精准。", text: "电子系统让复杂的准备过程退到宾客视线之外。" },
      { label: "03 · 服务", title: "团队掌控节奏。", text: "准备、制服、表达与呈现，共同形成统一的场地标准。" },
      { label: "04 · 管理", title: "一个伙伴，完整周期。", text: "我们选择系列、启动服务，并每日管理品质。" },
    ] },
    manifesto: { lead: "我们不只是提供水烟设备。", body: "我们通过器物、光线、团队与精准的服务节奏，创造真正的现场感。" },
    history: { eyebrow: "Anima / 器物解析", instruction: "滚动控制影片", steps: [
      { label: "01 · 轮廓", title: "先是一个姿态。", text: "不对称形态从黑暗中出现，成为空间的视觉中心。" },
      { label: "02 · 材质", title: "金属。玻璃。光。", text: "暖色高光呈现纹理、通透感与每一处连接的精度。" },
      { label: "03 · 技术", title: "复杂，留在幕后。", text: "电子加热支持更洁净、可重复的准备与呈现流程。" },
      { label: "04 · 现场感", title: "留下的是印象。", text: "器物、光线与服务仪式，构成完整一致的酒店场景。" },
    ] },
    system: { eyebrow: "运营模式", title: "", intro: "", items: [
      { title: "设备", text: "高端产品、电子加热系统、耗材与服务工具。" }, { title: "团队", text: "人员筛选、培训、制服、行为标准与团队管理。" }, { title: "场景", text: "菜单结构、呈现方式、视觉语言与场地专属宾客旅程。" }, { title: "管理", text: "启动、库存、报告、品质与持续优化。" },
    ] },
    technology: { eyebrow: "技术", title: "电加热，无炭火。", intro: "服务采用 Nu Air 独立电加热器，取代木炭、点炭流程、传统烟碗与热量管理器，让准备更洁净、温度更精准、风味更稳定。", deviceAlt: "Nu Air 独立电加热器", deviceLabel: "独立电加热器", rangeLabel: "温度范围", stepLabel: "每次可调 1°C", notes: [
      { title: "无需木炭", text: "宾客空间内没有木炭、点炭、灰烬或焦糊气味。" }, { title: "精准温控", text: "220°C 至 315°C，每次可调 1°C，帮助释放风味并避免苦味。" }, { title: "快速启动", text: "按下按钮，数分钟内即可进入服务状态。" }, { title: "运营经济性", text: "无需持续采购木炭；回收周期根据场地实际服务量测算。" },
    ] },
    collection: { eyebrow: "系列", title: "每件器物，都有自己的性格。", intro: "从克制的经典到光影装置。最终组合与供应情况将根据市场和场地单独确认。", roleLabel: "空间角色", request: "查询供应", products: [
      { name: "New Emotions Classic", eyebrow: "核心服务", description: "适合日常主区域的极简高端器物，让服务更洁净、更稳定。", role: "酒廊、屋顶、私人活动、夜间服务", image: images[0] }, { name: "Anima Designer", eyebrow: "设计器物", description: "如雕塑般融入室内，并形成精确而强烈的视觉焦点。", role: "VIP 桌、私密区域、夜间活动", image: images[1] }, { name: "AIO Space", eyebrow: "现代系统", description: "紧凑而未来感的轮廓，适合科技导向的私密空间。", role: "包间、俱乐部、现代酒廊", image: images[2] }, { name: "AIO Welcome", eyebrow: "LED 体验", description: "LED 信息让器物成为迎宾装置、品牌焦点或活动仪式。", role: "开场、品牌活动、中央展示", image: images[3] }, { name: "Mr. Smoke", eyebrow: "光之标识", description: "带光的纯粹竖直形态，现代醒目，却没有传统造型的沉重感。", role: "屋顶、酒吧、酒廊、社交内容", image: images[4] }, { name: "Lipstick", eyebrow: "时尚器物", description: "系列中最具时尚感的表达：图形纹理、精准轮廓与强烈镜头感。", role: "鸡尾酒之夜、美妆活动、时尚酒店", image: images[5] }, { name: "Porsche Design", eyebrow: "建筑极简", description: "为克制的高端室内空间而设的工程美学。", role: "商务宾客、雪茄酒廊、高端酒吧", image: images[6] }, { name: "Waterfall", eyebrow: "视觉仪式", description: "水、光与体量在桌面构成一座小型舞台，让宾客停留、拍摄并记住。", role: "主秀呈现、VIP 区、高端升级", image: images[7] },
    ] },
    station: { eyebrow: "标志性工作站", title: "服务工作站，也是室内的一部分。", body: "深色石材、暖光与内置 LED 屏幕，将功能区转化为舞台化器物，同时保持空间安静。", points: ["工作区域", "石材与缟玛瑙", "LED 内容", "隐藏储物"] },
    people: { eyebrow: "团队与标准", title: "团队延续空间的语言。", body: "黑色轮廓、克制的金色标识与自由动作。外观、表达和呈现被统一为一个标准。", standards: ["准备", "呈现", "宾客关怀", "品质管理"] },
    events: { eyebrow: "外烩与活动", title: "离开固定场地，标准依然一致。", body: "移动服务将系列、团队与视觉仪式带到活动发生的地方。", formats: ["屋顶", "VIP 区", "私人活动", "酒店主题活动", "品牌活动"] },
    proof: { eyebrow: "国际经验", title: "获得世界级场所的信任。", body: "从城市屋顶到度假酒店，Nu Air 技术与服务模式适用于不同的高端酒店及餐饮场景。", regions: ["阿联酋", "马尔代夫", "西班牙", "俄罗斯", "卡塔尔", "印度", "沙特阿拉伯", "土耳其"], partnersEyebrow: "精选酒店与餐饮", partnersTitle: "与我们合作的酒店、餐厅与俱乐部。", partners: [
      { region: "阿联酋", venues: partnerVenues.uae }, { region: "马尔代夫", venues: partnerVenues.maldives }, { region: "西班牙", venues: partnerVenues.spain }, { region: "俄罗斯", venues: partnerVenues.russia }, { region: "卡塔尔", venues: partnerVenues.qatar }, { region: "印度", venues: partnerVenues.india }, { region: "沙特阿拉伯", venues: partnerVenues.saudiArabia }, { region: "土耳其", venues: partnerVenues.turkey },
    ] },
    finale: { eyebrow: "合作", title: "共同创造全新的宾客体验类别。", body: "告诉我们场地、城市与形式。团队将了解需求，并提出下一步方案。", primary: "洽谈合作", secondary: "索取方案介绍", formTitle: "简述您的项目", fields: ["姓名", "公司 / 场地", "城市与国家", "工作邮箱", "电话 / 通讯工具", "留言"], submit: "准备合作申请", note: "WhatsApp 将打开已准备好的申请。请确认内容后发送给团队。", directTitle: "直接联系", directBody: "最快的方式是 WhatsApp。用一条消息描述您的场地，团队会在同一对话中回复。", phone: "+8613250224151", phoneDisplay: "+86 132 5022 4151", coverageTitle: "项目覆盖地区", optional: "选填", consent: "点击后将打开 WhatsApp，并已填入申请内容。只有您在通讯工具中确认后，消息才会发送。" },
    footer: { line: "X Experience · 提升酒店体验", legal: "仅限成年人 · 18+" },
  },
};
