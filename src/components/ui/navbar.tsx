"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Home } from "./icons";
import { motion } from "framer-motion";

export default function NavBar() {
  
  interface item {
    name: string;
    route: string;
  }
  const items: item[] = [
    {
      name: "Projectos",
      route: "projects",
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
    <section style={{zIndex:"1000"}} className=" flex self-center fixed min-w-80 w-1/3 mt-10 justify-center z-20 md:w-1/2 md:h-14">
      
      <div className="hidden  bg-slate-500 bg-opacity-80 border-2 border-gray-400 md:flex w-full shadow-black shadow-sm h-auto p-6 justify-around items-center rounded-full">
        <Link href={"/"}>
          <motion.div 
          whileHover={{color:""}}
          whileTap={{scale:.8}}
          >  
          <Home className="  w-4 h-4 text-white hover:text-[#FF008C]" />
          </motion.div>
        </Link>
        

        {items.map((item) => (
          <motion.span
            whileTap={{scale:.8}}
            whileHover={{color:"#FF008C"}}
            key={item.route}
            className=" font-semibold"
          >
            <Link href={item.route}>{item.name}</Link>
          </motion.span>
        ))}
      </div>
    </section>
  );
}
