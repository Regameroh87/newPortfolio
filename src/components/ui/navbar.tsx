"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Bars, Xmark, ChevronRight, Home } from "./icons";

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  interface item {
    name: string;
    route: string;
  }
  const items: item[] = [
    {
      name: "Sobre mi",
      route: "/about",
    },
    {
      name: "Projectos",
      route: "about#projects",
    },
    {
      name: "Habilidades",
      route: "/habilidades",
    },
    {
      name: "Contacto",
      route: "/contacto",
    },
  ];

  return (
    <section className=" flex self-center fixed min-w-80 w-1/3 mt-10 bg-slate-500 bg-opacity-80 border-2 border-gray-400 shadow-black shadow-sm rounded-full justify-center z-20 md:w-1/2 md:h-14" >
      <div className=" flex flex-col p-4 w-auto h-auto md:hidden">
        {!showMenu ? (
          <Bars
            onClick={() => setShowMenu(true)}
            className=" w-6 h-6 text-white"
          />
        ) : (
          <div className=" flex justify-center relative">
            <Xmark
              onClick={() => setShowMenu(false)}
              className=" w-6 h-6 text-white"
            />
            <div className=" flex flex-col justify-around w-60 h-72 p-8 absolute top-8 rounded-xl bg-slate-500 bg opacity-80 ">
              <Link href={"/about"}>
                <div className=" flex w-full items-center justify-between text-black hover:text-white text">
                  Sobre mi
                  <ChevronRight className=" w-4 h-4 text-black hover:text-white" />
                </div>
              </Link>
              <div className=" flex w-full items-center justify-between text-black hover:text-white text">
                Projectos
                <ChevronRight className=" w-4 h-4 text-black hover:text-white" />
              </div>
              <div className=" flex w-full items-center justify-between text-black hover:text-white text">
                Habilidades
                <ChevronRight className=" w-4 h-4 text-black hover:text-white" />
              </div>
              <div className=" flex w-full items-center justify-between text-black hover:text-white text">
                Mis redes
                <ChevronRight className=" w-4 h-4 text-black hover:text-white" />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="hidden md:flex w-full h-auto p-6 justify-around items-center">
        <Link href={"/"}>
        <Home className="  w-4 h-4 text-black hover:text-white" />
        </Link>
        {items.map((item) => (
          <span key={item.route} className=" font-semibold hover:text-white hover:underline">
            <Link href={item.route}>{item.name}</Link>
          </span>
        ))}
      </div>
    </section>
  );
}
