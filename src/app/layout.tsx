import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./../components/layout/Header";
import Footer from "./../components/layout/Footer";
import { cookies } from "next/headers";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://tamra-line.vercel.app"),
  title: "TamraLine | تمرا لاين",
  description: "تمرا لاين منصة لتوصيل طلاب الجامعات في العراق. حجز سريع، سائقون موثوقون، وأسعار مناسبة. الحل الأمثل لمواصلاتك اليومية للجامعة.",
  icons: {
    icon: "/headerLogo.png",
  },
 openGraph: {
  title: "TamraLine | تمرا لاين",
  description: "منصة توصيل الطلاب الأولى في العراق - حجز سريع وسائقون موثوقون",
  url: "https://tamra-line.vercel.app",
  siteName: "TamraLine",
  locale: "ar_IQ",
  type: "website",
  images: [
    {
      url: "/logoHeader.jpg",
      width: 1200,
      height: 630,
      alt: "TamraLine",
    },
  ],
},
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    
  
  return (
    <html
      lang="ar"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
       <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#EFE1D1]">
        <Header  />
        {children}
        <Footer />
      </body>
    </html>
  );
}
