export interface FoodSeed {
  title: string;
  desc?: string;
  image?: string;
  category: string;
  isWeeklyOffer: boolean;
  baseTaste?: string | null;
  price: number;
}

export const foods: FoodSeed[] = [
  {
    title: "استیک مرغ",
    desc: "300گرم سینه مرغ سبزیجات طعم دار شده نان تست",
    image: "/images/food/chickenSteak.jpeg",
    category: "غذای اصلی",
    isWeeklyOffer: false,
    baseTaste: "",
    price: 880,
  },
  {
    title: "چیکن استراگانوف",
    desc: "150 گرم سینه مرغ سس آلفردو سیب زمینی سرخ شده رنده ای پارمسان بروکلی",
    image: "/images/food/chickenStroganoph.jpg",
    category: "غذای اصلی",
    isWeeklyOffer: false,
    baseTaste: "",
    price: 890,
  },
  {
    title: "لازانیا گوشت",
    desc: "",
    image: "/images/food/lazania.jpg",
    category: "پاستا",
    isWeeklyOffer: false,
    baseTaste: "",
    price: 815,
  },
  {
    title: "پنه آلفردو",
    desc: "پنه سینه مرغ سس آلفردو زیتون ریحون گوجه گیلاسی کاهو فرانسوی, سورل",
    image: "/images/food/pastaAlfredo.png",
    category: "پاستا",
    isWeeklyOffer: false,
    baseTaste: "",
    price: 765,
  },
  {
    title: "ژامبوژیت",
    desc: "ژامبون گوشت ، بیکن گوشت ،سس مخصوص ، گوجه ، کاهو فرانسوی ، سیب زمینی ، سالاد",
    image: "/images/food/zhambozhit.jpg",
    category: "اکومنو",
    isWeeklyOffer: false,
    baseTaste: "",
    price: 465,
  },
];
