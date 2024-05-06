import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faChevronRight,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import { motion } from "framer-motion";

export function Bars({
  className,
  onClick,
}: {
  className: string;
  onClick?: any;
}) {
  return (
    <div onClick={onClick} className=" flex w-auto h-auto justify-center">
      <FontAwesomeIcon className={` ${className}`} icon={faBars} />
    </div>
  );
}

export function Xmark({
  className,
  onClick,
}: {
  className: string;
  onClick?: any;
}) {
  return (
    <div onClick={onClick} className={`flex  ${className} justify-center`}>
      <FontAwesomeIcon className={" flex w-full h-full"} icon={faXmark} />
    </div>
  );
}

export function ChevronRight({
  className,
  onClick,
}: {
  className: string;
  onClick?: any;
}) {
  return (
    <div onClick={onClick} className={`flex  ${className} justify-center`}>
      <FontAwesomeIcon
        className={" flex w-full h-full"}
        icon={faChevronRight}
      />
    </div>
  );
}

export function Home({
  className,
  onClick,
}: {
  className: string;
  onClick?: any;
}) {
  return (
    <div onClick={onClick} className={`flex  ${className} justify-center`}>
      <FontAwesomeIcon className={" flex w-full h-full"} icon={faHouse} />
    </div>
  );
}

export function Github({
  className,
  onClick,
}: {
  className: string;
  onClick?: any;
}) {
  return (
    <div onClick={onClick} className={`flex  ${className} justify-center`}>
      <FontAwesomeIcon className={" flex w-full h-full"} icon={faGithub} />
    </div>
  );
}

export function Linkedin({
  className,
  onClick,
}: {
  className: string;
  onClick?: any;
}) {
  return (
    <div onClick={onClick} className={`flex  ${className} justify-center`}>
      <FontAwesomeIcon className={" flex w-full h-full"} icon={faLinkedin} />
    </div>
  );
}

export function Instagram({
  className,
  onClick,
}: {
  className: string;
  onClick?: any;
}) {
  return (
    <div onClick={onClick} className={`flex  ${className} justify-center`}>
      <FontAwesomeIcon className={" flex w-full h-full"} icon={faInstagram} />
    </div>
  );
}

export function IconSvg({
  nameIcon,
  width,
  height,
  className,
}: {
  nameIcon: string;
  width: number;
  height: number;
  className?: string;
}) {
  return (
    <div className=" flex">
      <Image
        className={`${className}`}
        src={`./socialIcons/${nameIcon}.svg`}
        alt={nameIcon}
        width={width}
        height={height}
      />
    </div>
  );
}

export function IconTechSvg({
  nameIcon,
  width,
  height,
  className,
}: {
  nameIcon: string;
  width: number;
  height: number;
  className?: string;
}) {
  return (
    <motion.div
      className=" flex"
      animate={{
        scale: [1.5, 1],
        y: [-100, 0],
        transition: { duration: 3, type:"spring", stiffness:250, damping:5 },
      }}
    >
      <Image
        className={`${className}`}
        src={`./techIcons/${nameIcon}.svg`}
        alt={nameIcon}
        width={width}
        height={height}
      />
    </motion.div>
  );
}
