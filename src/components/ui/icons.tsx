import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faChevronRight, faHouse } from "@fortawesome/free-solid-svg-icons";

export function Bars({className, onClick} : { className: string; onClick?:any }) {
  return (
    <div onClick={onClick} className=" flex w-auto h-auto justify-center">
      <FontAwesomeIcon className={` ${className}`}  icon={faBars} />
    </div>
  );
}

export function Xmark({className, onClick} : { className: string; onClick?: any}) {
    return (
      <div onClick={onClick} className=" flex w-auto h-auto justify-center">
        <FontAwesomeIcon className={` ${className}`}  icon={faXmark} />
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