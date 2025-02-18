import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex">
          <div className="bg-black text-gray-200 max-w-[250px] h-screen overflow-y-auto md:min-w-[220px]">
            <Sidebar />
          </div>
          <div className="bg-[#212121] flex-1 h-screen overflow-hidden relative text-gray-200">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
