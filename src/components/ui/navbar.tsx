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

  const [current, setCurrent] = useState("");
  

  return (
    <section
      style={{ zIndex: "1000" }}
      className=" flex self-center fixed min-w-80 w-1/3 mt-10 justify-center z-20 md:w-1/2 md:h-14"
    >
      <div className=" hidden bg-slate-500 bg-opacity-80 border-2 border-gray-400 md:flex w-full shadow-black shadow-sm h-auto p-6 justify-around items-center rounded-full">
        <Link href={"/"}>
          <motion.div
          onClick={()=> {setCurrent("")}}
             whileTap={{ scale: 0.8 }}>
            <Home className="  w-4 h-4 text-white" />
          </motion.div>
        </Link>

        {items.map((item) => (
          <motion.span
            whileTap={{ scale: 0.8 }}
            key={item.route}
            className=" relative flex flex-col font-semibold"
            onClick={() => {
              setCurrent(item.name);
            }}
          >
              <p>
                <Link href={item.route}>{item.name}</Link>
              </p>
              {current && current === item.name && (
                <motion.div
                  className= ' bg-white absolute left-0 right-0 bottom-0 h-[2px]'
                  layoutId="underline"
                ></motion.div>
              )}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
