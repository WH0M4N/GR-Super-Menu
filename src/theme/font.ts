import localFont from "next/font/local";

export const estedad = localFont({
  src: [
    {
      path: "../fonts/estedad/Estedad-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/estedad/Estedad-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});
