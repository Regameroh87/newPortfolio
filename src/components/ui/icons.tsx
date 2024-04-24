import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faChevronRight, faHouse } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

export function Bars({className, onClick} : { className: string; onClick?:any }) {
  return (
    <div onClick={onClick} className=" flex w-auto h-auto justify-center">
      <FontAwesomeIcon className={` ${className}`}  icon={faBars} />
    </div>
  );
}

export function Xmark({className, onClick} : { className: string; onClick?: any}) {
    return (
      <div onClick={onClick} className={ `flex  ${className} justify-center`}>
        <FontAwesomeIcon className={" flex w-full h-full"}   icon={faXmark} />
      </div>
    );
  }

  export function ChevronRight({className, onClick} : { className: string; onClick?: any}) {
    return (
      <div onClick={onClick} className= { `flex  ${className} justify-center`}>
        <FontAwesomeIcon className={" flex w-full h-full"}  icon={faChevronRight} />
      </div>
    );
  }


  export function Home({className, onClick} : { className: string; onClick?: any}) {
    return (
      <div onClick={onClick} className= { `flex  ${className} justify-center`}>
        <FontAwesomeIcon className={" flex w-full h-full"}  icon={faHouse} />
      </div>
    );
  }

  export function Github({className, onClick} : { className: string; onClick?: any}) {
    return (
      <div onClick={onClick} className= { `flex  ${className} justify-center`}>
        <FontAwesomeIcon className={" flex w-full h-full"}  icon={faGithub} />
      </div>
    );
  }

  export function Linkedin({className, onClick} : { className: string; onClick?: any}) {
    return (
      <div onClick={onClick} className= { `flex  ${className} justify-center`}>
        <FontAwesomeIcon className={" flex w-full h-full"}  icon={faLinkedin} />
      </div>
    );
  }

  export function Instagram({className, onClick} : { className: string; onClick?: any}) {
    return (
      <div onClick={onClick} className= { `flex  ${className} justify-center`}>
        <FontAwesomeIcon className={" flex w-full h-full"}  icon={faInstagram} />
      </div>
    );
  }