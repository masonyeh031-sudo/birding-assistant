import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "賞鳥助手",
  description: "幫助新手快速認識常見鳥類、上傳照片初步辨識，並找到附近適合觀鳥的地點。",
  icons: {
    icon: "/guaniaoren-logo.png",
    apple: "/guaniaoren-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
