import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./menuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = ({toggleOpen, isOpen}: {toggleOpen:any; isOpen:boolean}) => (
  <motion.ul
    className=" absolute top-[100px] w-[230px] p-[25px]"
   variants={variants}>
    {itemIds.map((i, index )=> (
      <MenuItem i={i} index={index} key={index} toggleOpen={toggleOpen} isOpen={isOpen} />
    ))}
  </motion.ul>
);

const itemIds = [
  {
    name:"Home",
    route:"/"
  },
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