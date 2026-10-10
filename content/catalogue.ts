import type { Locale } from "./copy";
import { getProductProfiles } from "./products";

export type CatalogueItem = {
  slug: string;
  name: string;
  eyebrow: string;
  description: string;
  role: string;
  image: string;
  focus: "left" | "center" | "right";
};

type ExtraCopy = Pick<CatalogueItem, "name" | "eyebrow" | "description" | "role">;

const extraAssets: Array<Pick<CatalogueItem, "slug" | "image" | "focus">> = [
  { slug: "gold-line", image: "/media/gold-line-signature.webp", focus: "right" },
  { slug: "emerald-classic", image: "/media/emerald-classic-signature.webp", focus: "left" },
  { slug: "ruby-helix", image: "/media/ruby-helix-signature.webp", focus: "right" },
  { slug: "atelier-wood", image: "/media/atelier-wood-signature.webp", focus: "left" },
  { slug: "noir-drop", image: "/media/noir-drop-signature.webp", focus: "left" },
  { slug: "frost-glass", image: "/media/frost-glass-signature.webp", focus: "right" },
];

const extraCopy: Record<Locale, ExtraCopy[]> = {
  ru: [
    {
      name: "Gold Line",
      eyebrow: "Тёплая точность",
      description: "Прозрачное стекло и тонкий золотой акцент поддерживают интерьер, не перетягивая внимание на себя.",
      role: "Dining room, lounge, private table",
    },
    {
      name: "Emerald Classic",
      eyebrow: "Глубокий цвет",
      description: "Изумрудная вертикаль и тёплый металл превращают знакомую форму в выразительный интерьерный знак.",
      role: "Heritage interiors, club lounge, VIP seating",
    },
    {
      name: "Ruby Helix",
      eyebrow: "Красный жест",
      description: "Насыщенный рубиновый силуэт работает как точка энергии в вечерней сцене и на камерных событиях.",
      role: "Cocktail night, private event, statement table",
    },
    {
      name: "Atelier Wood",
      eyebrow: "Ручная фактура",
      description: "Резное дерево и естественный рисунок материала добавляют коллекции тактильность и ремесленный характер.",
      role: "Resort, cigar lounge, natural interior",
    },
    {
      name: "Noir Drop",
      eyebrow: "Чёрный монолит",
      description: "Глянцевая каплевидная база и почти исчезающая вертикаль создают самый тихий объект коллекции.",
      role: "Minimal bar, suite, architectural lounge",
    },
    {
      name: "Frost Glass",
      eyebrow: "Холодный свет",
      description: "Матовые светлые секции и гранёное стекло собирают прохладный свет в чистую вертикальную композицию.",
      role: "Rooftop, contemporary hotel, private room",
    },
  ],
  en: [
    {
      name: "Gold Line",
      eyebrow: "Warm precision",
      description: "Clear glass and a fine gold accent support the interior without competing with it.",
      role: "Dining room, lounge, private table",
    },
    {
      name: "Emerald Classic",
      eyebrow: "Depth of colour",
      description: "An emerald vertical and warm metal turn a familiar form into a distinct interior signature.",
      role: "Heritage interiors, club lounge, VIP seating",
    },
    {
      name: "Ruby Helix",
      eyebrow: "A red gesture",
      description: "A saturated ruby silhouette brings a controlled point of energy to evening scenes and intimate events.",
      role: "Cocktail night, private event, statement table",
    },
    {
      name: "Atelier Wood",
      eyebrow: "Hand-finished texture",
      description: "Carved timber and natural grain bring tactility and a crafted character to the collection.",
      role: "Resort, cigar lounge, natural interior",
    },
    {
      name: "Noir Drop",
      eyebrow: "Black monolith",
      description: "A glossy teardrop base and an almost disappearing vertical create the quietest object in the collection.",
      role: "Minimal bar, suite, architectural lounge",
    },
    {
      name: "Frost Glass",
      eyebrow: "Cool light",
      description: "Frosted sections and cut glass gather cool light into a precise vertical composition.",
      role: "Rooftop, contemporary hotel, private room",
    },
  ],
  "zh-cn": [
    {
      name: "Gold Line",
      eyebrow: "温暖而精准",
      description: "通透玻璃与纤细金色线条融入室内，不与空间争夺注意力。",
      role: "餐厅、酒廊、私密餐桌",
    },
    {
      name: "Emerald Classic",
      eyebrow: "深邃色彩",
      description: "祖母绿的垂直比例与温暖金属，让熟悉形态成为鲜明的室内标识。",
      role: "经典室内、俱乐部酒廊、VIP 区",
    },
    {
      name: "Ruby Helix",
      eyebrow: "红色姿态",
      description: "浓郁的宝石红轮廓，为夜间场景与私密活动注入克制的能量。",
      role: "鸡尾酒之夜、私人活动、焦点餐桌",
    },
    {
      name: "Atelier Wood",
      eyebrow: "手工质感",
      description: "雕刻木材与天然纹理，为系列带来触感与清晰的手工属性。",
      role: "度假酒店、雪茄酒廊、自然材质空间",
    },
    {
      name: "Noir Drop",
      eyebrow: "黑色体量",
      description: "光亮的水滴形底座与近乎隐去的竖线，构成系列中最安静的器物。",
      role: "极简酒吧、套房、建筑感酒廊",
    },
    {
      name: "Frost Glass",
      eyebrow: "冷色光线",
      description: "磨砂浅色部件与切割玻璃，将冷光收束成精准的垂直构图。",
      role: "屋顶空间、当代酒店、包间",
    },
  ],
};

export function getCatalogue(locale: Locale): CatalogueItem[] {
  const additions = extraAssets.map((asset, index) => ({ ...asset, ...extraCopy[locale][index] }));
  const established = getProductProfiles(locale).map((product) => ({
    slug: product.slug,
    name: product.name,
    eyebrow: product.eyebrow,
    description: product.description,
    role: product.role,
    image: product.signatureImage,
    focus: product.focus,
  }));

  return [...additions, ...established];
}
