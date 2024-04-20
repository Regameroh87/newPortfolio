'use client'
import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/ui/navbar";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });
// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname()

  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col`}>
       {pathname !== "/about" && <NavBar/>}
        {children}
        </body>
    </html>
  );
}
