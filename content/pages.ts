import type { Locale } from "./copy";

type ProcessStep = {
  label: string;
  title: string;
  text: string;
};

type SpaceContext = {
  label: string;
  title: string;
  text: string;
};

export type PageCopy = {
  common: {
    skip: string;
    home: string;
    view: string;
    back: string;
    previous: string;
    next: string;
    discuss: string;
    collection: string;
    footerStatement: string;
    footerNote: string;
  };
  collection: {
    eyebrow: string;
    title: string;
    lead: string;
    count: string;
    role: string;
    closing: string;
    closingBody: string;
  };
  product: {
    objectLabel: string;
    character: string;
    anatomy: string;
    role: string;
    contexts: string;
    essence: string;
    essenceRows: [string, string, string, string];
    personalisation: string;
    specification: string;
    specificationBody: string;
    request: string;
    nextObject: string;
    crossQuestion: string;
    crossIndex: string;
  };
  system: {
    eyebrow: string;
    title: string;
    lead: string;
    statement: string;
    processLabel: string;
    steps: ProcessStep[];
    scopeTitle: string;
    scope: string[];
    closing: string;
  };
  technology: {
    eyebrow: string;
    title: string;
    lead: string;
    principleLabel: string;
    principleTitle: string;
    principleBody: string;
    notes: ProcessStep[];
    documentLabel: string;
    documentBody: string;
    closing: string;
  };
  spaces: {
    eyebrow: string;
    title: string;
    lead: string;
    contexts: SpaceContext[];
    stationLabel: string;
    stationTitle: string;
    stationBody: string;
    peopleLabel: string;
    peopleTitle: string;
    peopleBody: string;
    closing: string;
  };
};

export const pageCopy: Record<Locale, PageCopy> = {
  ru: {
    common: {
      skip: "Перейти к содержанию",
      home: "На главную",
      view: "Смотреть объект",
      back: "Назад к коллекции",
      previous: "Предыдущий",
      next: "Следующий",
      discuss: "Обсудить партнёрство",
      collection: "Открыть коллекцию",
      footerStatement: "Создаём присутствие.",
      footerNote: "Shisha management for hospitality",
    },
    collection: {
      eyebrow: "X Experience / Collection",
      title: "Восемь объектов. Одна система.",
      lead: "Каждая модель решает свою пространственную задачу: от основного сервиса до световой инсталляции и сценографического акцента.",
      count: "08 объектов / 08 характеров",
      role: "Роль в пространстве",
      closing: "Коллекция начинается не с каталога.",
      closingBody: "Мы подбираем объект под интерьер, ритм сервиса, формат посадки и задачу площадки.",
    },
    product: {
      objectLabel: "Объект коллекции",
      character: "Характер объекта",
      anatomy: "Анатомия присутствия",
      role: "Роль в пространстве",
      contexts: "Подходит для",
      essence: "Суть объекта",
      essenceRows: ["Форма", "Материал и поверхность", "Свет", "Формат подачи"],
      personalisation: "Персонализация сцены",
      specification: "Конфигурация подтверждается отдельно",
      specificationBody: "Точные материалы, комплектация, документы устройства и доступность согласуются для выбранного рынка и конкретной площадки.",
      request: "Запросить конфигурацию",
      nextObject: "Следующий объект",
      crossQuestion: "Хотите {name} в вашем пространстве?",
      crossIndex: "Другие объекты коллекции",
    },
    system: {
      eyebrow: "Operating system / 01",
      title: "Одна команда. Весь цикл.",
      lead: "X Experience проектирует, запускает и ежедневно ведёт кальянное направление как часть сервиса площадки — без раскрытия внутренней коммерческой модели на сайте.",
      statement: "Площадка получает не набор поставщиков, а управляемое направление.",
      processLabel: "От первого аудита до ежедневной работы",
      steps: [
        { label: "01 / Аудит", title: "Сначала читаем пространство.", text: "Формат площадки, посадка, аудитория, операционные ограничения и визуальный язык задают рамку проекта." },
        { label: "02 / Концепция", title: "Собираем собственный сценарий.", text: "Подбираем коллекцию, сервисную механику, меню, подачу и характер присутствия команды." },
        { label: "03 / Инфраструктура", title: "Интегрируем объект и рабочую станцию.", text: "Оборудование, электронный нагрев, расходники, хранение и рабочая зона становятся одной системой." },
        { label: "04 / Команда", title: "Обучаем людей одному стандарту.", text: "Подбор, форма, голос, подготовка, подача и гостевой контакт собираются в единый протокол." },
        { label: "05 / Запуск", title: "Выводим сервис в зал.", text: "Тестируем ритм, настраиваем взаимодействие с командой площадки и готовим запуск для гостей." },
        { label: "06 / Управление", title: "Качество остаётся ежедневной практикой.", text: "Склад, учёт, отчётность, контроль и развитие направления остаются в одном контуре управления." },
      ],
      scopeTitle: "В одном контуре",
      scope: ["Оборудование", "Электронный нагрев", "Рабочая станция", "Команда и форма", "Меню и подача", "Учёт и качество"],
      closing: "Обсудить операционную модель для вашей площадки",
    },
    technology: {
      eyebrow: "Technology / 02",
      title: "Жар — без угля.",
      lead: "Автономная электронная система переносит розжиг, пепел и угольную зону за пределы гостевого сценария и делает подготовку более повторяемой.",
      principleLabel: "Принцип",
      principleTitle: "Технология должна быть заметна в результате, а не в процессе.",
      principleBody: "Гость видит объект, свет и подачу. Команда получает единый сценарий нагрева, подготовки и замены, встроенный в работу площадки.",
      notes: [
        { label: "01 / Среда", title: "Чище гостевая сцена", text: "Без розжига, угольной станции и пепла в зоне, где находится гость." },
        { label: "02 / Контроль", title: "Повторяемый сценарий", text: "Режим подбирается под продукт и стандарт площадки, а команда работает по одной последовательности." },
        { label: "03 / Сервис", title: "Спокойнее операционный ритм", text: "Подготовка и замена интегрируются в сервис без лишнего визуального шума в зале." },
      ],
      documentLabel: "Техническая точность",
      documentBody: "Температуры, автономность, сертификаты и другие числовые характеристики публикуются только после проверки официальной документации конкретного устройства.",
      closing: "Подобрать технологию под сценарий площадки",
    },
    spaces: {
      eyebrow: "Hospitality contexts / 03",
      title: "Создано для гостевого пространства.",
      lead: "Не переносим один и тот же формат из объекта в объект. Коллекция, станция, команда и ритуал меняются вместе с площадкой.",
      contexts: [
        { label: "01 / Hotel & resort", title: "Отель", text: "Спокойный визуальный язык, интеграция в F&B-операцию и сервис, соответствующий уровню общей гостевой среды." },
        { label: "02 / Restaurant & lounge", title: "Ресторан", text: "Объект становится частью вечерней посадки, а сценарий подачи продолжает интерьер и ритм зала." },
        { label: "03 / Rooftop & bar", title: "Rooftop", text: "Световой силуэт, мобильность и выразительная подача работают в открытом пространстве и после заката." },
        { label: "04 / Private & brand event", title: "Событие", text: "Мобильный сервис, команда, коллекция и брендированный сценарий собираются под конкретную активацию." },
      ],
      stationLabel: "Signature station",
      stationTitle: "Рабочая зона становится частью интерьера.",
      stationBody: "Тёмный stone или onyx, боковая подсветка, центральные LED-панели и скрытое хранение превращают инфраструктуру в спокойный сценографический объект.",
      peopleLabel: "People & standards",
      peopleTitle: "Команда продолжает язык пространства.",
      peopleBody: "Строгий чёрный силуэт, деликатный золотой знак, точная речь и единый ритуал подачи — от подготовки до гостевого контакта.",
      closing: "Спроектировать сценарий для вашего пространства",
    },
  },
  en: {
    common: {
      skip: "Skip to content",
      home: "Home",
      view: "View object",
      back: "Back to collection",
      previous: "Previous",
      next: "Next",
      discuss: "Discuss a partnership",
      collection: "Enter the collection",
      footerStatement: "We create presence.",
      footerNote: "Shisha management for hospitality",
    },
    collection: {
      eyebrow: "X Experience / Collection",
      title: "Eight objects. One system.",
      lead: "Every model answers a different spatial brief — from core service to a light installation and a scenographic focal point.",
      count: "08 objects / 08 characters",
      role: "Role in the space",
      closing: "A collection does not begin with a catalogue.",
      closingBody: "We choose each object around the interior, service rhythm, seating format and ambition of the venue.",
    },
    product: {
      objectLabel: "Collection object",
      character: "Character of the object",
      anatomy: "Anatomy of presence",
      role: "Role in the space",
      contexts: "Designed for",
      essence: "Essence of the object",
      essenceRows: ["Form", "Material and surface", "Light", "Service format"],
      personalisation: "Scene personalisation",
      specification: "Configuration confirmed separately",
      specificationBody: "Exact materials, configuration, device documentation and availability are agreed for the selected market and venue.",
      request: "Request configuration",
      nextObject: "Next object",
      crossQuestion: "Would you like {name} in your space?",
      crossIndex: "Other objects in the collection",
    },
    system: {
      eyebrow: "Operating system / 01",
      title: "One team. The whole cycle.",
      lead: "X Experience designs, launches and operates shisha as part of a venue’s service — while commercial mechanics remain off the public website.",
      statement: "The venue receives a managed direction, not a collection of vendors.",
      processLabel: "From the first audit to daily operation",
      steps: [
        { label: "01 / Audit", title: "We read the space first.", text: "Venue format, seating, audience, operating constraints and visual language set the project frame." },
        { label: "02 / Concept", title: "We compose a native scenario.", text: "Collection, service mechanics, menu, presentation and team presence are curated as one experience." },
        { label: "03 / Infrastructure", title: "Object and station become one system.", text: "Equipment, electronic heat, consumables, storage and the work zone are integrated together." },
        { label: "04 / People", title: "One standard, taught to every person.", text: "Selection, uniform, voice, preparation, presentation and guest care become one protocol." },
        { label: "05 / Launch", title: "The service enters the room.", text: "We test the rhythm, align with the venue team and prepare the guest-facing launch." },
        { label: "06 / Management", title: "Quality remains a daily practice.", text: "Inventory, reporting, control and development stay inside one operating loop." },
      ],
      scopeTitle: "Inside one operating loop",
      scope: ["Equipment", "Electronic heat", "Service station", "Team & uniform", "Menu & presentation", "Reporting & quality"],
      closing: "Discuss an operating model for your venue",
    },
    technology: {
      eyebrow: "Technology / 02",
      title: "Heat, without charcoal.",
      lead: "An autonomous electronic system moves ignition, ash and the charcoal station out of the guest scenario and makes preparation more repeatable.",
      principleLabel: "Principle",
      principleTitle: "Technology should be visible in the result, not the process.",
      principleBody: "The guest sees object, light and presentation. The team receives one heating, preparation and replacement sequence integrated into venue operations.",
      notes: [
        { label: "01 / Environment", title: "A cleaner guest scene", text: "No ignition, charcoal station or ash in the area occupied by the guest." },
        { label: "02 / Control", title: "A repeatable scenario", text: "The mode is tuned to product and venue standard; the team follows one sequence." },
        { label: "03 / Service", title: "A calmer operating rhythm", text: "Preparation and replacement enter the service flow without unnecessary visual noise in the room." },
      ],
      documentLabel: "Technical accuracy",
      documentBody: "Temperatures, autonomy, certification and other numerical characteristics are published only after the official documentation for the specific device is verified.",
      closing: "Choose the technology for your venue scenario",
    },
    spaces: {
      eyebrow: "Hospitality contexts / 03",
      title: "Made for the guest environment.",
      lead: "We do not carry one format from venue to venue. Collection, station, team and ritual change with the space.",
      contexts: [
        { label: "01 / Hotel & resort", title: "Hotel", text: "A calm visual language, integration with F&B operations and service aligned with the wider guest experience." },
        { label: "02 / Restaurant & lounge", title: "Restaurant", text: "The object enters the evening setting while its presentation continues the interior and the room’s rhythm." },
        { label: "03 / Rooftop & bar", title: "Rooftop", text: "A light-led silhouette, mobility and expressive presentation work outdoors and after sunset." },
        { label: "04 / Private & brand event", title: "Event", text: "Mobile service, team, collection and a branded scenario are composed for a specific activation." },
      ],
      stationLabel: "Signature station",
      stationTitle: "The work zone becomes part of the interior.",
      stationBody: "Dark stone or onyx, side lighting, central LED panels and concealed storage turn infrastructure into a quiet scenographic object.",
      peopleLabel: "People & standards",
      peopleTitle: "The team continues the language of the space.",
      peopleBody: "A strict black silhouette, restrained gold signature, precise voice and one presentation ritual — from preparation to guest care.",
      closing: "Design a scenario for your space",
    },
  },
  "zh-cn": {
    common: {
      skip: "跳到主要内容",
      home: "首页",
      view: "查看产品",
      back: "返回系列",
      previous: "上一个",
      next: "下一个",
      discuss: "洽谈合作",
      collection: "进入系列",
      footerStatement: "创造真正的现场感。",
      footerNote: "高端酒店业水烟运营管理",
    },
    collection: {
      eyebrow: "X Experience / 系列",
      title: "八件器物，一个系统。",
      lead: "每款产品对应不同的空间任务：从日常主服务，到光影装置与具有舞台感的视觉焦点。",
      count: "08 件器物 / 08 种性格",
      role: "空间角色",
      closing: "系列并不始于目录。",
      closingBody: "我们根据室内设计、服务节奏、座位形式与场地目标选择每一件器物。",
    },
    product: {
      objectLabel: "系列器物",
      character: "器物性格",
      anatomy: "现场感解析",
      role: "空间角色",
      contexts: "适用场景",
      essence: "器物本质",
      essenceRows: ["形态", "材质与表面", "光线", "服务形式"],
      personalisation: "场景个性化",
      specification: "配置需单独确认",
      specificationBody: "准确材质、配置、设备文件与供应情况，将针对目标市场和具体场地另行确认。",
      request: "咨询配置",
      nextObject: "下一件器物",
      crossQuestion: "想在您的空间中引入 {name} 吗？",
      crossIndex: "系列中的其他器物",
    },
    system: {
      eyebrow: "运营系统 / 01",
      title: "一个团队，完整周期。",
      lead: "X Experience 将水烟方向作为场地服务的一部分进行设计、启动与日常运营；具体商务机制不在公开网站披露。",
      statement: "场地获得的不是多个供应方，而是一套可管理的完整业务。",
      processLabel: "从首次评估到每日运营",
      steps: [
        { label: "01 / 评估", title: "先读懂空间。", text: "场地形式、座位、客群、运营限制与视觉语言共同建立项目边界。" },
        { label: "02 / 概念", title: "构建专属场景。", text: "将系列、服务机制、菜单、呈现方式与团队形象组合为一个体验。" },
        { label: "03 / 基础设施", title: "器物与工作站成为一个系统。", text: "设备、电子加热、耗材、储存与工作区域被统一整合。" },
        { label: "04 / 团队", title: "让每个人遵循同一标准。", text: "人员筛选、制服、表达、准备、呈现与宾客关怀形成统一流程。" },
        { label: "05 / 启动", title: "让服务进入宾客空间。", text: "测试节奏、协调场地方团队，并完成面向宾客的正式启动。" },
        { label: "06 / 管理", title: "品质成为每日实践。", text: "库存、报告、控制与持续优化始终处于同一运营闭环。" },
      ],
      scopeTitle: "一个运营闭环",
      scope: ["设备", "电子加热", "服务工作站", "团队与制服", "菜单与呈现", "报告与品质"],
      closing: "为您的场地讨论运营模式",
    },
    technology: {
      eyebrow: "技术 / 02",
      title: "无炭加热。",
      lead: "独立电子系统将点炭、灰烬和炭火工作站移出宾客场景，并让准备流程更加稳定可重复。",
      principleLabel: "原则",
      principleTitle: "技术应体现在结果中，而不是过程里。",
      principleBody: "宾客看到的是器物、光线与呈现；团队获得统一的加热、准备和更换流程，并将其融入场地运营。",
      notes: [
        { label: "01 / 环境", title: "更洁净的宾客场景", text: "宾客所在区域无需点炭、炭火工作站或灰烬处理。" },
        { label: "02 / 控制", title: "可重复的服务场景", text: "模式根据产品与场地标准调整，团队遵循统一顺序。" },
        { label: "03 / 服务", title: "更从容的运营节奏", text: "准备与更换融入服务流程，减少场地内不必要的视觉干扰。" },
      ],
      documentLabel: "技术准确性",
      documentBody: "温度、续航、认证与其他数字参数，仅在核验具体设备的官方文件后对外发布。",
      closing: "为场地场景选择技术方案",
    },
    spaces: {
      eyebrow: "酒店业场景 / 03",
      title: "为宾客空间而生。",
      lead: "我们不会把同一种形式复制到所有场地。系列、工作站、团队与仪式都会随空间而改变。",
      contexts: [
        { label: "01 / 酒店与度假村", title: "酒店", text: "克制的视觉语言、与餐饮运营的整合，以及与整体宾客体验一致的服务标准。" },
        { label: "02 / 餐厅与酒廊", title: "餐厅", text: "器物进入夜间场景，呈现方式继续室内设计与大厅的节奏。" },
        { label: "03 / 屋顶与酒吧", title: "屋顶空间", text: "光影轮廓、移动性与具有表现力的呈现，在户外和日落之后同样成立。" },
        { label: "04 / 私人及品牌活动", title: "活动", text: "移动服务、团队、系列与品牌化场景，围绕具体活动重新组合。" },
      ],
      stationLabel: "标志性工作站",
      stationTitle: "工作区域成为室内的一部分。",
      stationBody: "深色石材或缟玛瑙、侧面灯光、中央 LED 屏幕和隐藏储物，将基础设施转化为安静的舞台化器物。",
      peopleLabel: "团队与标准",
      peopleTitle: "团队延续空间的语言。",
      peopleBody: "严格的黑色轮廓、克制的金色标识、精准表达和统一呈现仪式——从准备一直延续到宾客关怀。",
      closing: "为您的空间设计服务场景",
    },
  },
};
