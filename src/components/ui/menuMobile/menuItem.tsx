import * as React from "react";
import { motion } from "framer-motion";

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

export const MenuItem = ({ i } : { i:any }) => {
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li
      className=" flex m-0 mb-5 items-center cursor-pointer list-none"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >      
      <div className=" w-10 h-10 rounded-full mr-5 grow-[40px] " style={style} />
      <div className=" w-[200px] h-5 flex-1 rounded-md" style={style} />
    </motion.li>
  );
};