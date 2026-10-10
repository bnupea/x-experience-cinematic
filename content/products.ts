import { copy, type Locale } from "./copy";
import { productDetails, type ProductDetail } from "./product-details";

export const productSlugs = [
  "new-emotions-classic",
  "anima-designer",
  "aio-space",
  "aio-welcome",
  "mr-smoke",
  "lipstick",
  "porsche-design",
  "waterfall",
] as const;

export type ProductSlug = (typeof productSlugs)[number];

type ProductAsset = {
  slug: ProductSlug;
  campaignImage: string;
  portraitImage: string;
  signatureImage: string;
  focus: "left" | "center";
};

type ProductFacet = {
  label: string;
  title: string;
  text: string;
};

type ProductEditorial = {
  statement: string;
  storyTitle: string;
  story: string;
  facets: [ProductFacet, ProductFacet, ProductFacet];
  contexts: [string, string, string];
};

export type ProductProfile = ProductAsset & ProductEditorial & ProductDetail & {
  position: number;
  name: string;
  eyebrow: string;
  description: string;
  role: string;
};

const assets: ProductAsset[] = [
  { slug: "new-emotions-classic", campaignImage: "/media/new-emotions-campaign-v2.webp", portraitImage: "/media/new-emotions.webp", signatureImage: "/media/new-emotions-signature-v1.webp", focus: "left" },
  { slug: "anima-designer", campaignImage: "/media/anima-campaign-v2.webp", portraitImage: "/media/anima.webp", signatureImage: "/media/anima-signature-v1.webp", focus: "left" },
  { slug: "aio-space", campaignImage: "/media/aio-space-campaign-v3.webp", portraitImage: "/media/aio-space.webp", signatureImage: "/media/aio-space-signature-v1.webp", focus: "center" },
  { slug: "aio-welcome", campaignImage: "/media/aio-welcome-campaign-v3.webp", portraitImage: "/media/aio-welcome.webp", signatureImage: "/media/aio-welcome-signature-v1.webp", focus: "center" },
  { slug: "mr-smoke", campaignImage: "/media/mr-smoke-campaign-v3.webp", portraitImage: "/media/mr-smoke.webp", signatureImage: "/media/mr-smoke-signature-v1.webp", focus: "center" },
  { slug: "lipstick", campaignImage: "/media/lipstick-campaign-v3.webp", portraitImage: "/media/lipstick.webp", signatureImage: "/media/lipstick-signature-v1.webp", focus: "center" },
  { slug: "porsche-design", campaignImage: "/media/porsche-campaign-v3.webp", portraitImage: "/media/porsche.webp", signatureImage: "/media/porsche-signature-v1.webp", focus: "center" },
  { slug: "waterfall", campaignImage: "/media/waterfall-campaign-v2.webp", portraitImage: "/media/waterfall-portrait-v2.webp", signatureImage: "/media/waterfall-signature-v1.webp", focus: "left" },
];

const editorial: Record<Locale, Record<ProductSlug, ProductEditorial>> = {
  ru: {
    "new-emotions-classic": {
      statement: "Классический силуэт, переведённый в современный сервисный ритм.",
      storyTitle: "Знакомая форма. Новое ощущение.",
      story: "New Emotions Classic сохраняет узнаваемую вертикальную композицию, но воспринимается как точный интерьерный объект. Это спокойный выбор для основной посадки, где важны повторяемость подачи и цельность общей атмосферы.",
      facets: [
        { label: "01 / Form", title: "Вертикальная ясность", text: "Стеклянное основание, тонкая шахта и собранный верх формируют знакомую, но облегчённую пропорцию." },
        { label: "02 / Light", title: "Низкий световой акцент", text: "Подсвеченное основание удерживает объект в поле зрения, не споря с интерьером." },
        { label: "03 / Service", title: "Основной рабочий ритм", text: "Модель подходит для регулярной вечерней посадки и единого сценария подготовки командой." },
      ],
      contexts: ["Restaurant lounge", "Rooftop", "Private event"],
    },
    "anima-designer": {
      statement: "Не форма вокруг функции, а самостоятельный скульптурный жест.",
      storyTitle: "Объект, который меняет композицию стола.",
      story: "Асимметричный корпус Anima считывается как дизайнерская пластика ещё до начала сервиса. Тёплый металл, прозрачный объём и наклонённая линия создают предмет, вокруг которого легко построить камерную гостевую сцену.",
      facets: [
        { label: "01 / Silhouette", title: "Асимметричный жест", text: "Наклон и напряжённая линия корпуса делают объект выразительным даже в полумраке." },
        { label: "02 / Material", title: "Металл, стекло, свет", text: "Контраст отражающей поверхности и прозрачного объёма раскрывается при близком рассмотрении." },
        { label: "03 / Atmosphere", title: "Камерный центр", text: "Anima работает там, где один стол должен восприниматься как отдельная сцена." },
      ],
      contexts: ["VIP table", "Private room", "Evening event"],
    },
    "aio-space": {
      statement: "Компактная электронная система с собственным световым присутствием.",
      storyTitle: "Технология собрана в одном силуэте.",
      story: "AIO Space объединяет прозрачную вертикаль, автономные модули и точную чёрную геометрию. В пространстве модель выглядит не как традиционный кальян, а как компактный технологичный объект для приватного сервиса.",
      facets: [
        { label: "01 / System", title: "Собранная архитектура", text: "Вертикальный резервуар и низкие модули образуют компактную, визуально устойчивую систему." },
        { label: "02 / Light", title: "Свет внутри объёма", text: "Подсветка подчёркивает воду и делает технический процесс частью атмосферы." },
        { label: "03 / Context", title: "Приватный формат", text: "Модель естественно входит в private rooms, клубные зоны и современные lounge-интерьеры." },
      ],
      contexts: ["Private room", "Club lounge", "Technology-led interior"],
    },
    "aio-welcome": {
      statement: "Устройство становится первой репликой бренда в пространстве.",
      storyTitle: "Welcome-сцена, встроенная в объект.",
      story: "Вертикальная LED-поверхность превращает AIO Welcome в носитель приветствия, фирменного знака или короткой визуальной последовательности. Это модель для момента входа, открытия вечера и брендированной активации.",
      facets: [
        { label: "01 / Message", title: "LED-коммуникация", text: "Световая вертикаль может поддержать welcome-ритуал и визуальный код площадки." },
        { label: "02 / Presence", title: "Дальний акцент", text: "Чистый силуэт считывается с расстояния и помогает организовать центральную точку сцены." },
        { label: "03 / Event", title: "Сценарий открытия", text: "Объект подходит для бренд-активаций, специальных вечеров и входных зон." },
      ],
      contexts: ["Welcome zone", "Brand activation", "Central display"],
    },
    "mr-smoke": {
      statement: "Световой вертикальный знак для современной вечерней сцены.",
      storyTitle: "Минимум формы. Максимум узнаваемости.",
      story: "Mr. Smoke строится на строгой цилиндрической геометрии и двух световых линиях. Визуально лёгкий объект хорошо работает в барах и rooftop-пространствах, где силуэт должен оставаться заметным после заката.",
      facets: [
        { label: "01 / Line", title: "Чистая вертикаль", text: "Цельный тёмный корпус создаёт графичный знак без визуальной тяжести классической модели." },
        { label: "02 / Signature", title: "Две световые точки", text: "Контрастные линии фиксируют основание и центр объекта в тёмном пространстве." },
        { label: "03 / Night", title: "После заката", text: "Силуэт рассчитан на вечернюю сцену, камеру и открытую посадку." },
      ],
      contexts: ["Rooftop", "Bar", "Social-media point"],
    },
    lipstick: {
      statement: "Fashion-объект, построенный на фактуре, свете и точной геометрии.",
      storyTitle: "Подача как часть визуального образа.",
      story: "Lipstick превращает компактный силуэт в почти ювелирный объект. Ромбовидная фактура, точечные блики и прозрачный верх делают модель особенно сильной в кадре и в fashion-oriented hospitality.",
      facets: [
        { label: "01 / Texture", title: "Графичная поверхность", text: "Ритм ромбов и точек собирает свет и даёт объекту узнаваемую фактуру." },
        { label: "02 / Proportion", title: "Компактный монолит", text: "Собранный корпус остаётся выразительным, не занимая композицию длинной вертикалью." },
        { label: "03 / Camera", title: "Фотографическое присутствие", text: "Модель работает как акцент для cocktail nights, beauty- и fashion-событий." },
      ],
      contexts: ["Cocktail night", "Beauty event", "Fashion hospitality"],
    },
    "porsche-design": {
      statement: "Инженерная сдержанность для архитектурного интерьера.",
      storyTitle: "Тишина точной пропорции.",
      story: "Porsche Design использует длинную матовую вертикаль, минимум деталей и контролируемый отблеск. Объект не требует декоративного окружения и органично входит в строгие бары, cigar lounges и пространства для деловой аудитории.",
      facets: [
        { label: "01 / Geometry", title: "Вытянутая пропорция", text: "Конусообразная линия делает силуэт лёгким и архитектурным." },
        { label: "02 / Finish", title: "Матовая поверхность", text: "Сдержанное отражение поддерживает тёмные, натуральные и минималистичные интерьеры." },
        { label: "03 / Audience", title: "Деловая сцена", text: "Модель подходит для пространств, где дизайн должен говорить тихо и уверенно." },
      ],
      contexts: ["Cigar lounge", "Premium bar", "Business hospitality"],
    },
    waterfall: {
      statement: "Вода, свет и объём превращают подачу в небольшую сцену.",
      storyTitle: "Не просто объект — визуальный ритуал.",
      story: "Waterfall строит впечатление вокруг светящегося вертикального объёма и массивной геометрии основания. Такая модель предназначена для hero-подачи, когда один стол должен стать кульминацией гостевого опыта.",
      facets: [
        { label: "01 / Volume", title: "Архитектурный монолит", text: "Прямоугольная масса формирует на столе самостоятельную пространственную композицию." },
        { label: "02 / Element", title: "Свет внутри воды", text: "Тёплый прозрачный центр раскрывает глубину объёма и движение материала." },
        { label: "03 / Ritual", title: "Hero-подача", text: "Waterfall уместен там, где сервис должен остановить взгляд и остаться в памяти." },
      ],
      contexts: ["VIP zone", "Hero presentation", "Premium upgrade"],
    },
  },
  en: {
    "new-emotions-classic": {
      statement: "A classical silhouette translated into a contemporary service rhythm.",
      storyTitle: "A familiar form. A new impression.",
      story: "New Emotions Classic preserves a recognisable vertical composition while reading as a precise interior object. It is a calm choice for core seating, where consistent presentation and a coherent atmosphere matter most.",
      facets: [
        { label: "01 / Form", title: "Vertical clarity", text: "A glass base, slender stem and composed top create a familiar yet visually lighter proportion." },
        { label: "02 / Light", title: "A low light accent", text: "The illuminated base keeps the object present without competing with the interior." },
        { label: "03 / Service", title: "Core operating rhythm", text: "The model suits regular evening seating and one repeatable preparation sequence." },
      ],
      contexts: ["Restaurant lounge", "Rooftop", "Private event"],
    },
    "anima-designer": {
      statement: "Not a form around a function, but an independent sculptural gesture.",
      storyTitle: "An object that changes the table composition.",
      story: "Anima’s asymmetric body reads as design sculpture before service even begins. Warm metal, transparent volume and a leaning line create an object around which an intimate guest scene can be composed.",
      facets: [
        { label: "01 / Silhouette", title: "An asymmetric gesture", text: "The tilt and tension of the body keep the object expressive, even in low light." },
        { label: "02 / Material", title: "Metal, glass, light", text: "Reflective surface and transparent volume reward close inspection." },
        { label: "03 / Atmosphere", title: "An intimate centre", text: "Anima belongs where one table should feel like a scene of its own." },
      ],
      contexts: ["VIP table", "Private room", "Evening event"],
    },
    "aio-space": {
      statement: "A compact electronic system with its own luminous presence.",
      storyTitle: "Technology resolved into one silhouette.",
      story: "AIO Space brings together a transparent vertical body, autonomous modules and precise black geometry. In the room, it feels less like a traditional pipe and more like a compact technological object for private service.",
      facets: [
        { label: "01 / System", title: "Composed architecture", text: "The vertical vessel and low modules form a compact, visually stable system." },
        { label: "02 / Light", title: "Light inside volume", text: "Illumination reveals the water and lets technology become part of the atmosphere." },
        { label: "03 / Context", title: "Private format", text: "The model enters private rooms, club zones and contemporary lounge interiors naturally." },
      ],
      contexts: ["Private room", "Club lounge", "Technology-led interior"],
    },
    "aio-welcome": {
      statement: "The device becomes the brand’s first line inside the space.",
      storyTitle: "A welcome scene built into the object.",
      story: "A vertical LED surface turns AIO Welcome into a carrier for a greeting, brand mark or short visual sequence. It is designed for arrival, opening rituals and branded activations.",
      facets: [
        { label: "01 / Message", title: "LED communication", text: "The light surface can support a welcome ritual and the venue’s visual code." },
        { label: "02 / Presence", title: "Long-distance focus", text: "A clean silhouette reads from across the room and anchors a central scene." },
        { label: "03 / Event", title: "An opening ritual", text: "The object fits brand activations, special evenings and entrance zones." },
      ],
      contexts: ["Welcome zone", "Brand activation", "Central display"],
    },
    "mr-smoke": {
      statement: "A vertical light signature for the contemporary evening scene.",
      storyTitle: "Minimum form. Maximum recognition.",
      story: "Mr. Smoke is built from strict cylindrical geometry and two luminous lines. The visually light object works in bars and rooftop venues where the silhouette needs to remain clear after sunset.",
      facets: [
        { label: "01 / Line", title: "A pure vertical", text: "The continuous dark body creates a graphic sign without the weight of a classical pipe." },
        { label: "02 / Signature", title: "Two points of light", text: "Contrasting lines locate the base and centre of the object in a dark room." },
        { label: "03 / Night", title: "After sunset", text: "The silhouette is made for evening scenes, camera presence and open-air seating." },
      ],
      contexts: ["Rooftop", "Bar", "Social-media point"],
    },
    lipstick: {
      statement: "A fashion object composed through texture, light and exact geometry.",
      storyTitle: "Presentation as part of the visual identity.",
      story: "Lipstick turns a compact silhouette into an almost jewel-like object. Diamond texture, pinpoint highlights and a transparent crown make the model especially strong on camera and in fashion-oriented hospitality.",
      facets: [
        { label: "01 / Texture", title: "A graphic surface", text: "The rhythm of diamonds and points collects light into a recognisable skin." },
        { label: "02 / Proportion", title: "A compact monolith", text: "The composed body stays expressive without relying on a long vertical line." },
        { label: "03 / Camera", title: "Photographic presence", text: "The model fits cocktail nights, beauty moments and fashion events." },
      ],
      contexts: ["Cocktail night", "Beauty event", "Fashion hospitality"],
    },
    "porsche-design": {
      statement: "Restrained engineering for architectural interiors.",
      storyTitle: "The quiet of exact proportion.",
      story: "Porsche Design uses a long matte vertical, minimal detailing and controlled reflection. It needs no decorative setting and enters strict bars, cigar lounges and business hospitality naturally.",
      facets: [
        { label: "01 / Geometry", title: "Elongated proportion", text: "A tapered line makes the silhouette light and architectural." },
        { label: "02 / Finish", title: "Matte surface", text: "Restrained reflection supports dark, natural and minimal interiors." },
        { label: "03 / Audience", title: "A business scene", text: "The model belongs where design should speak quietly and confidently." },
      ],
      contexts: ["Cigar lounge", "Premium bar", "Business hospitality"],
    },
    waterfall: {
      statement: "Water, light and volume turn presentation into a small stage.",
      storyTitle: "Not only an object — a visual ritual.",
      story: "Waterfall builds its impression around a luminous vertical volume and the substantial geometry of its base. It is designed for hero presentation, when one table should become the climax of the guest experience.",
      facets: [
        { label: "01 / Volume", title: "An architectural monolith", text: "Rectangular mass creates an independent spatial composition on the table." },
        { label: "02 / Element", title: "Light inside water", text: "A warm transparent centre reveals depth, refraction and material movement." },
        { label: "03 / Ritual", title: "Hero presentation", text: "Waterfall belongs where service should stop the eye and remain in memory." },
      ],
      contexts: ["VIP zone", "Hero presentation", "Premium upgrade"],
    },
  },
  "zh-cn": {
    "new-emotions-classic": {
      statement: "将经典轮廓转化为当代服务节奏。",
      storyTitle: "熟悉的形态，全新的感受。",
      story: "New Emotions Classic 保留可识别的垂直构图，同时呈现为精准的室内器物。它适合日常主区域，在这里，一致的呈现和完整的氛围最为重要。",
      facets: [
        { label: "01 / 形态", title: "清晰的垂直比例", text: "玻璃底座、纤细立柱与收束的顶部构成熟悉却更轻盈的比例。" },
        { label: "02 / 光线", title: "低位光影焦点", text: "发光底座让器物保持可见，同时不与室内设计争夺注意力。" },
        { label: "03 / 服务", title: "日常运营节奏", text: "适合常规夜间座位与团队统一的准备流程。" },
      ],
      contexts: ["餐厅酒廊", "屋顶空间", "私人活动"],
    },
    "anima-designer": {
      statement: "不是围绕功能的外壳，而是独立的雕塑姿态。",
      storyTitle: "改变桌面构图的器物。",
      story: "Anima 的非对称主体在服务开始前就像一件设计雕塑。温暖金属、透明体量与倾斜线条，共同形成可围绕其构建私密宾客场景的中心。",
      facets: [
        { label: "01 / 轮廓", title: "非对称姿态", text: "倾斜与紧张的主体线条，让器物在低照度下仍然鲜明。" },
        { label: "02 / 材质", title: "金属、玻璃、光", text: "反光表面与透明体量，鼓励宾客近距离观看。" },
        { label: "03 / 氛围", title: "私密的中心", text: "适合让一张桌子成为独立场景的空间。" },
      ],
      contexts: ["VIP 桌", "包间", "夜间活动"],
    },
    "aio-space": {
      statement: "拥有独立光影存在感的紧凑电子系统。",
      storyTitle: "技术被收束进一个轮廓。",
      story: "AIO Space 将透明垂直主体、独立模块与精准黑色几何组合在一起。在空间中，它不像传统水烟，更像服务于私密场景的紧凑科技器物。",
      facets: [
        { label: "01 / 系统", title: "完整架构", text: "垂直容器与低位模块形成紧凑且视觉稳定的系统。" },
        { label: "02 / 光线", title: "体量内部的光", text: "照明呈现水体，让技术过程成为氛围的一部分。" },
        { label: "03 / 场景", title: "私密形式", text: "自然融入包间、俱乐部区域与现代酒廊。" },
      ],
      contexts: ["包间", "俱乐部酒廊", "科技感室内"],
    },
    "aio-welcome": {
      statement: "设备成为品牌进入空间后的第一句话。",
      storyTitle: "欢迎场景，被嵌入器物。",
      story: "垂直 LED 表面让 AIO Welcome 可以承载欢迎语、品牌标识或短视觉序列。它适用于到达时刻、开场仪式与品牌活动。",
      facets: [
        { label: "01 / 信息", title: "LED 沟通", text: "发光表面可支持欢迎仪式与场地的视觉识别。" },
        { label: "02 / 存在", title: "远距离焦点", text: "纯净轮廓从空间另一端也能被看见，并建立中央场景。" },
        { label: "03 / 活动", title: "开场仪式", text: "适用于品牌活动、特别之夜与入口区域。" },
      ],
      contexts: ["迎宾区域", "品牌活动", "中央展示"],
    },
    "mr-smoke": {
      statement: "属于当代夜间场景的垂直光影标识。",
      storyTitle: "极简形态，鲜明识别。",
      story: "Mr. Smoke 由严格的圆柱几何和两条发光线构成。轻盈的视觉体量适合酒吧与屋顶空间，让轮廓在日落之后依然清晰。",
      facets: [
        { label: "01 / 线条", title: "纯粹垂直", text: "连续深色主体形成图形化标识，没有传统造型的沉重感。" },
        { label: "02 / 标识", title: "两处光点", text: "对比光线在黑暗中标记器物的底部与中心。" },
        { label: "03 / 夜晚", title: "日落之后", text: "轮廓适合夜间场景、镜头表达与开放式座位。" },
      ],
      contexts: ["屋顶空间", "酒吧", "社交媒体场景"],
    },
    lipstick: {
      statement: "由纹理、光线与精准几何构成的时尚器物。",
      storyTitle: "呈现本身就是视觉身份。",
      story: "Lipstick 将紧凑轮廓转化为近似珠宝的器物。菱形纹理、点状高光与透明顶部，让它在镜头中和时尚导向的酒店场景里格外鲜明。",
      facets: [
        { label: "01 / 纹理", title: "图形化表面", text: "菱形与节点的节奏收集光线，形成可识别的外观。" },
        { label: "02 / 比例", title: "紧凑整体", text: "无需很长的垂直线条，也能保持强烈表达。" },
        { label: "03 / 镜头", title: "摄影存在感", text: "适合鸡尾酒之夜、美妆活动与时尚酒店场景。" },
      ],
      contexts: ["鸡尾酒之夜", "美妆活动", "时尚酒店"],
    },
    "porsche-design": {
      statement: "为建筑感室内空间而设的克制工程美学。",
      storyTitle: "精准比例带来的安静力量。",
      story: "Porsche Design 使用修长的哑光垂直形态、极少细节与受控反光。它不需要装饰性背景，自然进入严格的酒吧、雪茄酒廊与商务酒店场景。",
      facets: [
        { label: "01 / 几何", title: "修长比例", text: "渐收线条让轮廓轻盈且具有建筑感。" },
        { label: "02 / 表面", title: "哑光质感", text: "克制反光适合深色、自然与极简室内。" },
        { label: "03 / 客群", title: "商务场景", text: "适用于设计需要安静而自信地表达的空间。" },
      ],
      contexts: ["雪茄酒廊", "高端酒吧", "商务酒店"],
    },
    waterfall: {
      statement: "水、光与体量，让呈现成为一座小型舞台。",
      storyTitle: "不只是器物，更是视觉仪式。",
      story: "Waterfall 围绕发光的垂直体量与厚重底座几何建立印象。它服务于主秀呈现，让一张桌子成为宾客体验的高潮。",
      facets: [
        { label: "01 / 体量", title: "建筑感整体", text: "矩形体量在桌面形成独立的空间构图。" },
        { label: "02 / 元素", title: "水中的光", text: "温暖透明中心呈现深度、折射与材质运动。" },
        { label: "03 / 仪式", title: "主秀呈现", text: "适合让服务停住视线并留在记忆中的场景。" },
      ],
      contexts: ["VIP 区", "主秀呈现", "高端升级"],
    },
  },
};

export function getProductProfiles(locale: Locale): ProductProfile[] {
  return assets.map((asset, index) => ({
    ...asset,
    ...editorial[locale][asset.slug],
    ...productDetails[locale][asset.slug],
    ...copy[locale].collection.products[index],
    position: index + 1,
  }));
}

export function getProductProfile(locale: Locale, slug: string): ProductProfile | undefined {
  return getProductProfiles(locale).find((product) => product.slug === slug);
}
