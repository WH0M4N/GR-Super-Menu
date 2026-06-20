import { StaticImageData } from "next/image";
import randomImage from "../app/images/donar-1-300x300.jpg";

export interface Food {
  id: number;
  title: string;
  desc: string;
  image: string | StaticImageData;
  category: string;
  isWeeklyOffer?: boolean;
  baseTaste?: string | null;
  price: number;
}

export interface Game extends Omit<Food, "baseTaste, price "> {
  player: string;
}

export const games = [];
export const foods = [
  {
    id: 1,
    title: "زرشک پلو با مرغ",
    desc: "برنج زعفرانی با زرشک و مرغ آبپز شده",
    baseTaste: "ترش و ملایم",
    price: 250,
    image: randomImage,
    category: "هات داگ",
    isWeeklyOffer: false,
  },
  {
    id: 2,
    title: "قورمه سبزی",
    desc: "خورش سبزیجات معطر با گوشت گوسفند و لوبیا",
    baseTaste: "خوش‌طعم و معطر",
    price: 320,
    image: randomImage,
    category: "هات داگ",
    isWeeklyOffer: false,
  },
  {
    id: 3,
    title: "جوجه کباب",
    desc: "سینه مرغ کبابی با زعفران و کره",
    baseTaste: "شور و زعفرانی",
    price: 280,
    image: randomImage,
    category: "نوشیدنی",
    isWeeklyOffer: false,
  },
  {
    id: 4,
    title: "ماست و خیار",
    desc: "ماست سرد با خیار رنده شده و نعنا",
    baseTaste: "ترش و خنک",
    price: 90,
    image: randomImage,
    category: "دمنوش",
    isWeeklyOffer: true,
  },
  {
    id: 5,
    title: "زولبیا و بامیه",
    desc: "شیرینی سرخ کرده با شربت زعفرانی",
    baseTaste: "شیرین و ترد",
    price: 150,
    image: randomImage,
    category: "پیتزا",
    isWeeklyOffer: false,
  },
  {
    id: 6,
    title: "آش رشته",
    desc: "آش غلیظ با رشته، حبوبات و کشک",
    baseTaste: "ملایم و کشکی",
    price: 180,
    image: randomImage,
    category: "پنینی",
    isWeeklyOffer: false,
  },
  {
    id: 7,
    title: "کباب برگ",
    desc: "گوشت گوسفند کبابی با ادویه مخصوص",
    baseTaste: "شور و گوشتی",
    price: 350,
    image: randomImage,
    category: "استیک",
    isWeeklyOffer: false,
  },
  {
    id: 8,
    title: "ته چین مرغ",
    desc: "برنج زعفرانی با لایه ترد و مرغ",
    baseTaste: "زعفرانی و ملایم",
    price: 290,
    image: randomImage,
    category: "پیش غذا",
    isWeeklyOffer: false,
  },
  {
    id: 9,
    title: "فالوده شیرازی",
    desc: "نودل نشاسته‌ای با شربت گلاب و لیمو",
    baseTaste: "شیرین و خنک",
    price: 120,
    image: randomImage,
    category: "اسموتی",
    isWeeklyOffer: false,
  },
  {
    id: 10,
    title: "دیزی",
    desc: "خورش سنتی با گوشت، نخود و سیب‌زمینی در دیگ سنگی",
    baseTaste: "شور و مقوی",
    price: 200,
    image: randomImage,
    category: "ماکتیل",
    isWeeklyOffer: false,
  },
];
