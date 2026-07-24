import type { Metadata } from "next";
import { estedad } from "@/theme/font";
import ThemeRegistry from "@/theme/ThemeRegistry";

export const metadata: Metadata = {
  title: "منو کافه گیم ریپابلیک",
  description: "",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={estedad.className}
        style={{
          margin: 0,
          height: "100%",
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
