import { StaticImageData } from "next/image";
import randomImage from "../app/images/donar-1-300x300.jpg";
import randomGameImage from "../app/images/boardgame-playing.jpeg";

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

export enum GameGenre {
  Strategy = "Strategy",
  Family = "Family",
  Party = "Party",
  Economic = "Economic",
  Cooperative = "Cooperative",
}

// const playerCountRegex = /^\d+(?:-\d+)?$/;
export interface Game {
  id: number;
  title: string;
  desc: string;
  image: string | StaticImageData;
  genre: GameGenre[];
  playerCount: string;
  isWeeklyOffer?: boolean;
}

export const games: Game[] = [
  {
    id: 1,
    title: "کاتان",
    desc: "بازی مدیریت منابع و ساخت شهر.",
    image: randomGameImage,
    genre: [GameGenre.Strategy, GameGenre.Economic],
    playerCount: "3",
    isWeeklyOffer: true,
  },
  {
    id: 2,
    title: "کدنیمز",
    desc: "بازی گروهی حدس کلمات.",
    image: randomGameImage,
    genre: [GameGenre.Party, GameGenre.Family],
    playerCount: "2-8",
    isWeeklyOffer: false,
  },
  {
    id: 3,
    title: "پندمیک",
    desc: "همکاری برای نجات جهان.",
    image: randomGameImage,
    genre: [GameGenre.Cooperative, GameGenre.Strategy],
    playerCount: "2",
    isWeeklyOffer: false,
  },
  {
    id: 4,
    title: "تیکت تو راید",
    desc: "ساخت مسیرهای ریلی و کسب امتیاز.",
    image: randomGameImage,
    genre: [GameGenre.Family, GameGenre.Strategy],
    playerCount: "2-5",
    isWeeklyOffer: false,
  },
  {
    id: 5,
    title: "اسپلندور",
    desc: "رقابت برای جمع‌آوری ثروت.",
    image: randomGameImage,
    genre: [GameGenre.Economic, GameGenre.Strategy],
    playerCount: "2-4",
    isWeeklyOffer: false,
  },
  {
    id: 6,
    title: "شطرنج",
    desc: "نبرد فکری دو نفره.",
    image: randomGameImage,
    genre: [GameGenre.Strategy],
    playerCount: "2",
    isWeeklyOffer: false,
  },
  {
    id: 7,
    title: "مونوپولی",
    desc: "خرید و فروش املاک.",
    image: randomGameImage,
    genre: [GameGenre.Family, GameGenre.Economic],
    playerCount: "2-6",
    isWeeklyOffer: false,
  },
  {
    id: 8,
    title: "اونو",
    desc: "بازی کارتی سریع و سرگرم‌کننده.",
    image: randomGameImage,
    genre: [GameGenre.Party, GameGenre.Family],
    playerCount: "2-10",
    isWeeklyOffer: false,
  },
];

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
