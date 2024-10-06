import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/app/components/navbar";

const gtAmericaRegular = localFont({
  src: "./fonts/GT-America-Regular.otf",
});

export const metadata: Metadata = {
  title: "Adedoyin Emmanuel - Software Engineer",
  description: "Software Engineer, CS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={gtAmericaRegular.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
