"use client";
import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/ui/navbar";
import { usePathname } from "next/navigation";
import SidebarDesktop from "@/components/ui/sidebarDesktop";
import { MenuMobile } from "@/components/ui/menuMobile/menu";

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
  const pathname = usePathname();

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preload" href="/project_carruselCSS.gif" as="image" />
      </head>
      <body className={`${inter.className} flex flex-col`}>
        {pathname !== "/about" && <NavBar />}
        {pathname !== "/about" && <MenuMobile />}
        {pathname !== "/about" && <SidebarDesktop />}
        {children}
      </body>
    </html>
  );
}
