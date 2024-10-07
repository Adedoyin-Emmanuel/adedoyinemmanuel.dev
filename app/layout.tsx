import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import { cn } from "@/lib/utils";
import {GoogleAnalytics } from "@next/third-parties/google";

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
      <body
        className={cn(
          gtAmericaRegular.className,
          "md:container md:mx-auto overflow-x-hidden"
        )}
      >
        <GoogleAnalytics gaId="G-WTPMMSFEEP" />
        <Navbar />
        <div className="w-full p-3">
          {children}

          <br />
          <br />
          <br />
          <Footer />
        </div>
      </body>
    </html>
  );
}
