import type { Locale } from "./copy";
import type { ProductSlug } from "./products";

export type ProductDetail = {
  /** One-word character of the object, used as the label of the opening chapter. */
  archetype: string;
  /** Four qualitative attributes, aligned with pageCopy.product.essenceRows. */
  essence: [string, string, string, string];
  /** How the service scene is tuned around this object for a given venue. */
  personalisation: string;
};

export const productDetails: Record<Locale, Record<ProductSlug, ProductDetail>> = {
  ru: {
    "new-emotions-classic": {
      archetype: "Основа",
      essence: [
        "Вертикальная классика в облегчённой пропорции",
        "Стеклянное основание, тёмная шахта, собранный верх",
        "Низкий световой акцент у основания",
        "Основная посадка и повторяемый вечерний ритм",
      ],
      personalisation:
        "Под площадку собирается сценарий основной посадки: плотность объектов в зале, порядок подготовки и единая подача командой.",
    },
    "anima-designer": {
      archetype: "Скульптор",
      essence: [
        "Асимметричный наклонный силуэт",
        "Тёплый металл и прозрачный объём",
        "Отражение по кромке, читается в полумраке",
        "Камерный стол: один объект — одна сцена",
      ],
      personalisation:
        "Объект ставится в центр камерной сцены: свет над столом, расстановка посадки и темп сервиса подбираются под интерьер площадки.",
    },
    "aio-space": {
      archetype: "Система",
      essence: [
        "Компактная вертикаль с автономными модулями",
        "Прозрачный резервуар и матовая чёрная геометрия",
        "Подсветка внутри водяного объёма",
        "Приватная зона и технологичный интерьер",
      ],
      personalisation:
        "Для private rooms собирается тихий сценарий: минимум перемещений персонала, подготовка вне зоны гостя и выверенный ритм смен.",
    },
    "aio-welcome": {
      archetype: "Голос",
      essence: [
        "Чистая вертикаль с LED-поверхностью",
        "Тёмный корпус и светящаяся плоскость",
        "Световая коммуникация как часть сцены",
        "Входная зона, открытие вечера, активация",
      ],
      personalisation:
        "Световая поверхность и момент выноса согласуются с визуальным кодом площадки: приветствие, знак вечера или сценарий бренд-активации.",
    },
    "mr-smoke": {
      archetype: "Знак",
      essence: [
        "Строгий цилиндр без декоративных узлов",
        "Цельный тёмный корпус",
        "Две контрастные световые линии",
        "Открытая вечерняя посадка, rooftop и бар",
      ],
      personalisation:
        "Для открытых площадок настраивается вечерний сценарий: расстановка после заката, устойчивость подачи на ветру и работа силуэта в кадре.",
    },
    lipstick: {
      archetype: "Огранка",
      essence: [
        "Компактный монолит с прозрачным верхом",
        "Ромбовидная фактура, собирающая блики",
        "Точечные отражения по граням",
        "Fashion-подача, кадр, коктейльный вечер",
      ],
      personalisation:
        "Подача выстраивается вокруг кадра: свет на столе, сочетание с барной картой и момент выноса в сценарии вечера.",
    },
    "porsche-design": {
      archetype: "Инженер",
      essence: [
        "Вытянутая конусная вертикаль",
        "Матовая поверхность с контролируемым отблеском",
        "Минимальный свет, только по кромке силуэта",
        "Сдержанный интерьер и деловая аудитория",
      ],
      personalisation:
        "Сервис настраивается на тихий режим: короткая коммуникация, редкие подходы и подача, не прерывающая разговор за столом.",
    },
    waterfall: {
      archetype: "Ритуал",
      essence: [
        "Прямоугольный объём с массивным основанием",
        "Стекло, вода и тёплая внутренняя среда",
        "Свет внутри водяного объёма",
        "Hero-подача и кульминация гостевого сценария",
      ],
      personalisation:
        "Объект встраивается в сценарий вечера как кульминация: момент выноса, свет вокруг стола и роль команды в этой сцене.",
    },
  },
  en: {
    "new-emotions-classic": {
      archetype: "The Constant",
      essence: [
        "Classical vertical in a lighter proportion",
        "Glass base, dark stem, composed top",
        "A low light accent at the base",
        "Core seating and a repeatable evening rhythm",
      ],
      personalisation:
        "The core seating scenario is composed for the venue: object density across the room, preparation order and one presentation standard for the team.",
    },
    "anima-designer": {
      archetype: "The Sculptor",
      essence: [
        "An asymmetric, leaning silhouette",
        "Warm metal and transparent volume",
        "Edge reflection that reads in low light",
        "An intimate table: one object, one scene",
      ],
      personalisation:
        "The object is placed at the centre of an intimate scene: light above the table, seating layout and service tempo are tuned to the interior.",
    },
    "aio-space": {
      archetype: "The System",
      essence: [
        "A compact vertical with autonomous modules",
        "Transparent vessel and matte black geometry",
        "Illumination inside the water volume",
        "Private zones and technology-led interiors",
      ],
      personalisation:
        "For private rooms we compose a quiet scenario: minimal staff movement, preparation outside the guest zone and a measured change rhythm.",
    },
    "aio-welcome": {
      archetype: "The Voice",
      essence: [
        "A clean vertical with an LED surface",
        "Dark body and a luminous plane",
        "Light communication as part of the scene",
        "Arrival zones, opening rituals, activations",
      ],
      personalisation:
        "The light surface and the moment of presentation follow the venue's visual code: a greeting, the mark of the evening or a brand activation sequence.",
    },
    "mr-smoke": {
      archetype: "The Signature",
      essence: [
        "A strict cylinder with no decorative joints",
        "One continuous dark body",
        "Two contrasting lines of light",
        "Open-air evening seating, rooftops and bars",
      ],
      personalisation:
        "For open venues we tune the evening scenario: placement after sunset, stability of service in wind and how the silhouette behaves on camera.",
    },
    lipstick: {
      archetype: "The Facet",
      essence: [
        "A compact monolith with a transparent crown",
        "Diamond texture that collects highlights",
        "Pinpoint reflections along the facets",
        "Fashion presentation, camera, cocktail evenings",
      ],
      personalisation:
        "Presentation is built around the frame: light on the table, pairing with the bar list and the moment the object enters the evening.",
    },
    "porsche-design": {
      archetype: "The Engineer",
      essence: [
        "An elongated, tapered vertical",
        "Matte surface with controlled reflection",
        "Minimal light, only along the silhouette",
        "Restrained interiors and business audiences",
      ],
      personalisation:
        "Service is set to a quiet mode: short communication, infrequent approaches and a presentation that never interrupts the conversation.",
    },
    waterfall: {
      archetype: "The Ritual",
      essence: [
        "A rectangular volume on a substantial base",
        "Glass, water and a warm internal environment",
        "Light inside the water volume",
        "Hero presentation and the climax of the evening",
      ],
      personalisation:
        "The object is written into the evening as its climax: the moment of presentation, the light around the table and the team's role in that scene.",
    },
  },
  "zh-cn": {
    "new-emotions-classic": {
      archetype: "恒常",
      essence: ["更轻盈比例中的经典垂直形态", "玻璃底座、深色立柱与收束顶部", "底座处的低位光影焦点", "日常主区域与可重复的夜间节奏"],
      personalisation: "主区域的服务流程按场地编排：厅内器物密度、准备顺序，以及团队统一的呈现标准。",
    },
    "anima-designer": {
      archetype: "雕塑者",
      essence: ["非对称的倾斜轮廓", "温暖金属与透明体量", "低照度下依然清晰的边缘反光", "私密桌位：一件器物，一个场景"],
      personalisation: "器物被置于私密场景的中心：桌面上方的光线、座位布局与服务节奏，均依室内环境调整。",
    },
    "aio-space": {
      archetype: "系统",
      essence: ["带独立模块的紧凑垂直体", "透明容器与哑光黑色几何", "水体内部的照明", "私密区域与科技感室内"],
      personalisation: "为包间编排安静的流程：减少人员走动、在宾客视线之外完成准备，并保持从容的更换节奏。",
    },
    "aio-welcome": {
      archetype: "声音",
      essence: ["带 LED 表面的纯净垂直体", "深色主体与发光平面", "作为场景一部分的光影沟通", "迎宾区域、开场仪式与品牌活动"],
      personalisation: "发光表面与呈现时刻遵循场地的视觉识别：问候语、当晚标识，或一段品牌活动序列。",
    },
    "mr-smoke": {
      archetype: "标记",
      essence: ["没有装饰接点的严格圆柱", "连续的深色主体", "两条对比发光线", "户外夜间座位、屋顶与酒吧"],
      personalisation: "为开放场地调整夜间流程：日落后的摆放位置、风中服务的稳定性，以及轮廓在镜头中的表现。",
    },
    lipstick: {
      archetype: "切面",
      essence: ["带透明顶部的紧凑整体", "收集高光的菱形纹理", "沿切面的点状反射", "时尚呈现、镜头与鸡尾酒之夜"],
      personalisation: "呈现围绕画面构建：桌面光线、与酒单的搭配，以及器物进入当晚场景的时刻。",
    },
    "porsche-design": {
      archetype: "工程师",
      essence: ["修长的渐收垂直形态", "反光受控的哑光表面", "极少的光，只沿轮廓边缘", "克制的室内与商务客群"],
      personalisation: "服务设定为安静模式：简短沟通、较少靠近，呈现过程不会打断桌边的对话。",
    },
    waterfall: {
      archetype: "仪式",
      essence: ["置于厚重底座上的矩形体量", "玻璃、水与温暖的内部环境", "水体内部的光", "主秀呈现与当晚体验的高潮"],
      personalisation: "器物被写入当晚流程的高潮：呈现的时刻、桌周的光线，以及团队在这一场景中的角色。",
    },
  },
};
