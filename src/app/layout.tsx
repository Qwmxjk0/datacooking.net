import type { Metadata } from "next";
import { Bebas_Neue, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-body",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "datacooking.net | รับพัฒนาระบบเว็บ แอป และงานข้อมูล",
  description:
    "ทีมพัฒนาระบบที่เน้นใช้งานจริง: เว็บ แอปมือถือ ซอฟต์แวร์องค์กร Data Pipeline และ AI Solution",
  metadataBase: new URL("https://datacooking.net"),
  openGraph: {
    title: "datacooking.net",
    description: "พัฒนาระบบที่เสถียร ส่งมอบไว และดูแลง่ายในระยะยาว",
    url: "https://datacooking.net",
    siteName: "datacooking.net",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={`${bebasNeue.variable} ${notoSansThai.variable}`}>{children}</body>
    </html>
  );
}
