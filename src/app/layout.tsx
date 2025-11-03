import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "../theme/ThemeRegistry";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ehtisham Rehmat | React Native Developer Portfolio",
  description:
    "Ehtisham Rehmat is a React Native Developer creating fast, visually polished mobile apps for iOS and Android. View projects, UI/UX designs, and contact details.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${robotoMono.variable} antialiased`}>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
