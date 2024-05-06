import * as React from "react";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./buttonToogle";
import { Navigation } from "./navigation";
import SocialIcons from "./socialIcons";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    opacity:.8,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

export const MenuMobile = () => {
  const [isOpen, toggleOpen] = useState(false);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      style={{zIndex:"9999"}}
      className=" fixed top-0 left-0 bottom-0 right-0 w-auto md:hidden"
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div className=" absolute top-0 left-0 bottom-0 bg-slate-500 w-screen min-w-[375]" variants={sidebar} />
      {isOpen && <SocialIcons/>}
      <Navigation toggleOpen={toggleOpen} isOpen={isOpen} />
      <MenuToggle toggle={() => toggleOpen(!isOpen)} />
    </motion.nav>
  );
};
