import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";


const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = ({ i, index, toggleOpen, isOpen } : { i:any; index:number; toggleOpen:any; isOpen:boolean }) => {
  const style = { border: `2px solid ${colors[index]}` };
  return (
    <motion.li
      className=" flex m-0 mb-5 items-center cursor-pointer list-none"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >      
      <div className=" flex w-2 h-10 rounded-full mr-5 " style={style} ></div>
      <Link href={i.route}>
      <div onClick={()=>{toggleOpen(!isOpen)}} className=" flex justify-center items-center w-[200px] h-5 flex-1 rounded-md text-white font-bold" style={style} >{i.name}</div>
      </Link>
    </motion.li>
  );
};