import type { Locale } from "./copy";

export type PresentationProduct = {
  name: string;
  label: string;
  desktopImage: string;
  mobileImage: string;
  focus?: "left" | "center" | "right";
};

export type PresentationPartnerGroup = {
  region: string;
  venues: string[];
};

export type PresentationContent = {
  brand: { name: string; descriptor: string };
  nav: { label: string; href: string }[];
  concept: { label: string; title: string; body: string };
  system: { label: string; title: string; items: { number: string; title: string; body: string }[] };
  station: { label: string; title: string; body: string; points: string[] };
  collection: { label: string; products: PresentationProduct[] };
  bear: { label: string; title: string[] };
  technology: { label: string; title: string; body: string; notes: { title: string; body: string }[] };
  menu: { label: string; title: string; body: string; levels: { title: string; body: string }[] };
  pilot: { label: string; title: string; steps: { number: string; title: string; body: string }[]; body: string };
  partners: { label: string; title: string; groups: PresentationPartnerGroup[] };
  contact: {
    label: string;
    title: string;
    directTitle: string;
    chinaPhone: string;
    chinaPhoneHref: string;
    wechat: string;
    wechatId: string;
    wechatQr: string;
    openWechat: string;
    closeWechat: string;
    website: string;
    websiteHref: string;
    email: string;
  };
  footer: {
    eyebrow: string;
    title: string;
    collection: string;
    contact: string;
    legal: string;
  };
};

const products: PresentationProduct[] = [
  { name: "NEW EMOTIONS SIGNATURE", label: "SIGNATURE PRESENTATION", desktopImage: "/media/new-emotions-campaign-v2.webp", mobileImage: "/media/new-emotions-signature-v1.webp", focus: "left" },
  { name: "ANIMA DESIGNER", label: "DESIGN OBJECT", desktopImage: "/media/anima-campaign-v2.webp", mobileImage: "/media/anima-signature-v1.webp", focus: "center" },
  { name: "AIO SPACE", label: "MODERN SYSTEM", desktopImage: "/media/aio-space-campaign-v3.webp", mobileImage: "/media/aio-space-signature-v1.webp", focus: "center" },
  { name: "AIO WELCOME", label: "LED EXPERIENCE", desktopImage: "/media/aio-welcome-campaign-v3.webp", mobileImage: "/media/aio-welcome-signature-v1.webp", focus: "center" },
  { name: "MR. SMOKE", label: "LIGHT SIGNATURE", desktopImage: "/media/mr-smoke-campaign-v3.webp", mobileImage: "/media/mr-smoke-signature-v1.webp", focus: "center" },
  { name: "LIPSTICK", label: "FASHION OBJECT", desktopImage: "/media/lipstick-campaign-v3.webp", mobileImage: "/media/lipstick-signature-v1.webp", focus: "center" },
  { name: "PORSCHE DESIGN", label: "ARCHITECTURAL MINIMALISM", desktopImage: "/media/porsche-campaign-v3.webp", mobileImage: "/media/porsche-signature-v1.webp", focus: "center" },
  { name: "WATERFALL", label: "WATERFALL", desktopImage: "/media/waterfall-campaign-v2.webp", mobileImage: "/media/waterfall-signature-v1.webp", focus: "center" },
  { name: "RETRO TV", label: "SCREEN EXPERIENCE", desktopImage: "/media/retro-tv-campaign-v1.webp", mobileImage: "/media/retro-tv-portrait-v1.webp", focus: "center" },
  { name: "BLOOM", label: "BOTANICAL OBJECT", desktopImage: "/media/bloom-campaign-v1.webp", mobileImage: "/media/bloom-portrait-v1.webp", focus: "center" },
];

const withProductLabels = (labels: string[]) => products.map((product, index) => ({ ...product, label: labels[index] ?? product.label }));

const contact = {
  label: "CONTACT",
  directTitle: "DIRECT CONTACT",
  chinaPhone: "+86 132 5022 4151",
  chinaPhoneHref: "+8613250224151",
  wechat: "WeChat",
  wechatId: "xhookah",
  wechatQr: "/media/wechat-qr-xhookah.png",
  openWechat: "OPEN WECHAT",
  closeWechat: "CLOSE",
  website: "xhookahstore.com",
  websiteHref: "https://xhookahstore.com",
  email: "info@xhookahworld.com",
};

const partnerGroups: PresentationPartnerGroup[] = [
  {
    region: "UAE",
    venues: [
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
  },
  { region: "Maldives", venues: ["Cheval Blanc", "Waldorf Astoria Ithaafushi", "OZEN Reserve Bolifushi", "OBLU Sangeli", "OZEN Reserve Maadhoo", "Amilla Fushi", "Hilton"] },
  { region: "Spain", venues: ["Alabriga Hotel"] },
  { region: "Russia", venues: ["SO/ Sofitel Hotel", "Lotte Hotel", "Paopoporta Restaurant", "Block Restaurant", "Department 57"] },
  { region: "Qatar", venues: ["Fairmont", "Raffles", "Al Messila Hotel", "Stage Club", "Sheraton", "Pullman West Bay", "Crowne Plaza West Bay"] },
  { region: "India", venues: ["JW Marriott Bengaluru", "Renaissance Bengaluru", "JW Marriott Bengaluru Prestige Golfshire", "Sheraton Grand", "Nu Air Premium Café", "The Westin Goa", "Hyatt Centric"] },
  { region: "Saudi Arabia", venues: ["TA3 Holding"] },
  { region: "Türkiye", venues: ["Six Senses Kocataş Mansions", "Mandarin Oriental Istanbul — soon"] },
];

const localizePartnerGroups = (regions: string[]) => partnerGroups.map((group, index) => ({
  ...group,
  region: regions[index] ?? group.region,
}));

const footer = {
  eyebrow: "SHISHA MANAGEMENT FOR HOSPITALITY",
  title: "WE CREATE PRESENCE.",
  collection: "COLLECTION",
  contact: "CONTACT",
  legal: "For adults · 18+",
};

const ru: PresentationContent = {
  brand: { name: "X EXPERIENCE", descriptor: "SHISHA MANAGEMENT" },
  nav: [
    { label: "КОНЦЕПЦИЯ", href: "#concept" },
    { label: "ОПЕРАЦИОННАЯ МОДЕЛЬ", href: "#system" },
    { label: "КОЛЛЕКЦИЯ", href: "#collection" },
    { label: "НАГРЕВА ТАБАКА", href: "#technology" },
    { label: "ПАРТНЁРЫ", href: "#partners" },
    { label: "PILOT LAUNCH", href: "#pilot" },
  ],
  concept: {
    label: "КОНЦЕПЦИЯ",
    title: "ПРЕМИАЛЬНЫЙ КАЛЬЯННЫЙ СЕРВИС ДЛЯ ОТЕЛЕЙ, ROOFTOP, БАРОВ И LOUNGE-ЗОН",
    body: "X Experience превращает кальян в управляемый luxury hospitality product: красивый сервис, обученная команда, стойка, коллекция и полная операционная ответственность.",
  },
  system: {
    label: "ОПЕРАЦИОННАЯ МОДЕЛЬ",
    title: "Полный аутсорсинг под ключ",
    items: [
      { number: "01", title: "Оборудование", body: "Премиальные объекты, электронные системы нагрева, расходники и сервисные инструменты." },
      { number: "02", title: "Команда", body: "Подбор, обучение, форма, стандарты поведения и контроль персонала." },
      { number: "03", title: "Меню", body: "Авторское меню, подача, визуальный язык и формат под аудиторию площадки." },
      { number: "04", title: "Управление", body: "Запуск, склад, учёт, отчётность, качество и развитие направления." },
    ],
  },
  station: {
    label: "Signature station",
    title: "Рабочая станция становится частью интерьера.",
    body: "Тёмный камень, тёплая подсветка и встроенные LED-панели превращают функциональную зону в сценографический объект — без визуального шума в зале.",
    points: ["Рабочая зона", "Камень и onyx", "LED-контент"],
  },
  collection: { label: "КОЛЛЕКЦИЯ", products: withProductLabels(["SIGNATURE PRESENTATION", "DESIGN OBJECT", "MODERN SYSTEM", "LED EXPERIENCE", "LIGHT SIGNATURE", "FASHION OBJECT", "ARCHITECTURAL MINIMALISM", "WATERFALL", "ТЕЛЕВИЗОР КАК ОБЪЕКТ", "БОТАНИЧЕСКИЙ ОБЪЕКТ"]) },
  bear: { label: "ФИРМЕННЫЙ МОМЕНТ", title: ["МОМЕНТ", "С ХАРАКТЕРОМ."] },
  technology: {
    label: "ИННОВАЦИОННАЯ ТЕХНОЛОГИЯ",
    title: "НАГРЕВА ТАБАКА",
    body: "Забудьте об углях, розжиге и пепле - это автономная электрическая система, которая заменяет традиционную чашу и калауд.",
    notes: [
      { title: "ЭКОНОМИЯ", body: "Больше никаких трат на угли. Девайс окупается за несколько месяцев." },
      { title: "ИДЕАЛЬНЫЙ ВКУС", body: "Регулируйте температуру от 220°C до 315°C с шагом 1°C, чтобы раскрыть табак без горечи." },
      { title: "МГНОВЕННЫЙ СТАРТ", body: "Нажал кнопку - через пару минут можно курить." },
      { title: "ЧИСТОТА", body: "Никакого пепла и запаха гари." },
    ],
  },
  menu: {
    label: "МЕНЮ БЕЗ ЦЕН",
    title: "Линейка понятна гостю и выгодна отелю.",
    body: "В коммерческой презентации для отеля цены не показываем. На встрече согласуем финальную карту под площадку, аудиторию и уровень заведения.",
    levels: [
      { title: "CLASSIC", body: "объёмная позиция для широкой аудитории" },
      { title: "SIGNATURE", body: "главный продающий уровень с красивой подачей" },
      { title: "DESIGNER", body: "предметный кальян как luxury object" },
      { title: "WATERFALL", body: "визуальный hero-product и апсейл" },
      { title: "VIP / PRIVATE", body: "подача для столов, кабинетов и мероприятий" },
    ],
  },
  pilot: {
    label: "PILOT LAUNCH",
    title: "90 дней, чтобы показать цифры.",
    steps: [
      { number: "1", title: "DESIGN", body: "зона, меню, визуал, правила площадки" },
      { number: "2", title: "SETUP", body: "стойка, кальяны, электронные системы, форма" },
      { number: "3", title: "TRAINING", body: "команда, сценарии сервиса, upsell" },
      { number: "4", title: "SOFT OPENING", body: "тест продаж, сбор обратной связи" },
      { number: "5", title: "SCALE", body: "решение по расширению внутри отеля / сети" },
    ],
    body: "Цель пилота: показать GM и F&B Director реальные продажи, конверсию, средний чек, отзывы гостей и операционную чистоту.",
  },
  partners: {
    label: "SELECTED HOSPITALITY",
    title: "Отели, рестораны и клубы, с которыми мы сотрудничаем.",
    groups: localizePartnerGroups(["ОАЭ", "Мальдивы", "Испания", "Россия", "Катар", "Индия", "Саудовская Аравия", "Турция"]),
  },
  contact: { title: "Создадим атмосферу, в которую хочется возвращаться.", ...contact },
  footer,
};

const en: PresentationContent = {
  brand: ru.brand,
  nav: [
    { label: "CONCEPT", href: "#concept" },
    { label: "OPERATING MODEL", href: "#system" },
    { label: "COLLECTION", href: "#collection" },
    { label: "TOBACCO HEATING", href: "#technology" },
    { label: "PARTNERS", href: "#partners" },
    { label: "PILOT LAUNCH", href: "#pilot" },
  ],
  concept: { label: "CONCEPT", title: "PREMIUM SHISHA SERVICE FOR HOTELS, ROOFTOPS, BARS AND LOUNGE AREAS", body: "X Experience turns shisha into a managed luxury hospitality product: beautiful service, a trained team, a station, a collection and full operational responsibility." },
  system: {
    label: "OPERATING MODEL",
    title: "FULL TURNKEY OUTSOURCING",
    items: [
      { number: "01", title: "Equipment", body: "Premium objects, electronic heating systems, consumables and service tools." },
      { number: "02", title: "Team", body: "Selection, training, uniform, standards of conduct and staff control." },
      { number: "03", title: "Menu", body: "Signature menu, presentation, visual language and a format tailored to the venue audience." },
      { number: "04", title: "Management", body: "Launch, inventory, accounting, reporting, quality and development of the direction." },
    ],
  },
  station: { label: "Signature station", title: "The work station becomes part of the interior.", body: "Dark stone, warm lighting and integrated LED panels turn a functional zone into a scenographic object — without visual noise in the room.", points: ["Work zone", "Stone and onyx", "LED content"] },
  collection: { label: "COLLECTION", products: withProductLabels(["SIGNATURE PRESENTATION", "DESIGN OBJECT", "MODERN SYSTEM", "LED EXPERIENCE", "LIGHT SIGNATURE", "FASHION OBJECT", "ARCHITECTURAL MINIMALISM", "WATERFALL", "RETRO TV EXPERIENCE", "BOTANICAL OBJECT"]) },
  bear: { label: "SIGNATURE MOMENT", title: ["A MOMENT", "WITH", "CHARACTER."] },
  technology: {
    label: "INNOVATIVE TECHNOLOGY",
    title: "TOBACCO HEATING",
    body: "Forget charcoal, ignition and ash — this is an autonomous electric system that replaces the traditional bowl and heat-management device.",
    notes: [
      { title: "ECONOMY", body: "No more spending on charcoal. The device pays for itself within a few months." },
      { title: "PERFECT TASTE", body: "Adjust the temperature from 220°C to 315°C in 1°C steps to reveal the tobacco without bitterness." },
      { title: "INSTANT START", body: "Press the button — the session is ready in a few minutes." },
      { title: "CLEANLINESS", body: "No ash or smell of burning." },
    ],
  },
  menu: {
    label: "MENU WITHOUT PRICES",
    title: "Clear for the guest and profitable for the hotel.",
    body: "Prices are not shown in the hotel commercial presentation. At the meeting, we agree the final menu for the venue, audience and establishment level.",
    levels: [
      { title: "CLASSIC", body: "a high-volume position for a broad audience" },
      { title: "SIGNATURE", body: "the principal sales level with a beautiful presentation" },
      { title: "DESIGNER", body: "a sculptural shisha as a luxury object" },
      { title: "WATERFALL", body: "the visual hero product and upsell" },
      { title: "VIP / PRIVATE", body: "presentation for tables, private rooms and events" },
    ],
  },
  pilot: {
    label: "PILOT LAUNCH",
    title: "90 days to show the numbers.",
    steps: [
      { number: "1", title: "DESIGN", body: "zone, menu, visual language, venue rules" },
      { number: "2", title: "SETUP", body: "station, shishas, electronic systems, uniform" },
      { number: "3", title: "TRAINING", body: "team, service scenarios, upsell" },
      { number: "4", title: "SOFT OPENING", body: "sales test, feedback collection" },
      { number: "5", title: "SCALE", body: "decision on expansion within the hotel or network" },
    ],
    body: "The pilot goal is to show the GM and F&B Director real sales, conversion, average check, guest feedback and operational cleanliness.",
  },
  partners: {
    label: "SELECTED HOSPITALITY",
    title: "Hotels, restaurants and clubs we work with.",
    groups: partnerGroups,
  },
  contact: { title: "Let us create an atmosphere worth returning to.", ...contact },
  footer,
};

const zh: PresentationContent = {
  brand: ru.brand,
  nav: [
    { label: "理念", href: "#concept" },
    { label: "运营模式", href: "#system" },
    { label: "系列", href: "#collection" },
    { label: "烟草加热", href: "#technology" },
    { label: "合作伙伴", href: "#partners" },
    { label: "试点启动", href: "#pilot" },
  ],
  concept: { label: "理念", title: "面向酒店、屋顶空间、酒吧与休闲区的高端水烟服务", body: "X Experience 将水烟转化为可管理的高端酒店与餐饮产品：精致服务、专业团队、工作站、产品系列以及完整的运营责任。" },
  system: {
    label: "运营模式",
    title: "一站式全流程外包",
    items: [
      { number: "01", title: "设备", body: "高端产品、电子加热系统、耗材与服务工具。" },
      { number: "02", title: "团队", body: "人员筛选、培训、制服、行为标准与员工管理。" },
      { number: "03", title: "菜单", body: "定制菜单、呈现方式、视觉语言与适合场地客群的服务形式。" },
      { number: "04", title: "管理", body: "启动、库存、核算、报告、品质与业务发展。" },
    ],
  },
  station: { label: "Signature station", title: "工作站成为室内空间的一部分。", body: "深色石材、温暖灯光与嵌入式 LED 屏幕，将功能区域转化为具有场景感的设计对象，同时不为大厅带来视觉噪音。", points: ["工作区", "石材与缟玛瑙", "LED 内容"] },
  collection: { label: "系列", products: withProductLabels(["标志性呈现", "设计对象", "现代系统", "LED 体验", "灯光标志", "时尚对象", "建筑极简主义", "WATERFALL", "复古电视体验", "花艺装置"]) },
  bear: { label: "标志性时刻", title: ["有性格的", "标志性时刻。"] },
  technology: {
    label: "创新技术",
    title: "烟草加热",
    body: "告别木炭、点火与灰烬——这是一套自主电加热系统，可替代传统烟碗与热管理装置。",
    notes: [
      { title: "节省", body: "无需再购买木炭，设备可在数月内回收成本。" },
      { title: "理想风味", body: "温度可在 220°C 至 315°C 之间以 1°C 为单位调节，使烟草风味充分释放而不发苦。" },
      { title: "快速启动", body: "按下按钮，几分钟后即可开始。" },
      { title: "洁净", body: "没有灰烬，也没有焦糊气味。" },
    ],
  },
  menu: {
    label: "无价格菜单",
    title: "宾客易懂，也为酒店创造价值。",
    body: "面向酒店的商业演示中不展示价格。会议期间，我们会根据场地、客群与酒店等级确定最终菜单。",
    levels: [
      { title: "CLASSIC", body: "适合广泛客群的主力产品" },
      { title: "SIGNATURE", body: "以精致呈现为核心的主要销售层级" },
      { title: "DESIGNER", body: "作为高端设计对象的水烟产品" },
      { title: "WATERFALL", body: "视觉主角产品与升级销售" },
      { title: "VIP / PRIVATE", body: "适用于餐桌、包间与活动的呈现方式" },
    ],
  },
  pilot: {
    label: "试点启动",
    title: "用 90 天展示数据。",
    steps: [
      { number: "1", title: "DESIGN", body: "区域、菜单、视觉与场地规则" },
      { number: "2", title: "SETUP", body: "工作站、水烟设备、电子系统与制服" },
      { number: "3", title: "TRAINING", body: "团队、服务流程与升级销售" },
      { number: "4", title: "SOFT OPENING", body: "销售测试与反馈收集" },
      { number: "5", title: "SCALE", body: "决定是否在酒店或集团内部扩展" },
    ],
    body: "试点目标：向总经理与餐饮总监展示真实销售、转化率、平均客单价、宾客反馈与运营洁净度。",
  },
  partners: {
    label: "SELECTED HOSPITALITY",
    title: "与我们合作的酒店、餐厅与俱乐部。",
    groups: localizePartnerGroups(["阿联酋", "马尔代夫", "西班牙", "俄罗斯", "卡塔尔", "印度", "沙特阿拉伯", "土耳其"]),
  },
  contact: { title: "共同创造让人愿意再次回来的氛围。", ...contact },
  footer,
};

export const presentations: Record<Locale, PresentationContent> = { ru, en, "zh-cn": zh };
export const presentation = ru;

export const localeLabels: Record<Locale, string> = { ru: "RU", en: "EN", "zh-cn": "中文" };

export const interfaceLabels: Record<Locale, { navigation: string; menu: string; openMenu: string; closeMenu: string }> = {
  ru: { navigation: "Навигация", menu: "Меню", openMenu: "Открыть навигацию", closeMenu: "Закрыть навигацию" },
  en: { navigation: "Navigation", menu: "Menu", openMenu: "Open navigation", closeMenu: "Close navigation" },
  "zh-cn": { navigation: "导航", menu: "菜单", openMenu: "打开导航", closeMenu: "关闭导航" },
};
