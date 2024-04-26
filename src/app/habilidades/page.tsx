"use client";
import React from "react";
import { ContainerScroll } from "../../components/ui/container-scroll-animation";
import Image from "next/image";

export default function SkillsPage() {
  return (
    
    <div className="flex flex-col overflow-hidden3">
      <div className=" flex w-full h-1/ bg-white"></div>
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Tecnologias
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
    
  );
}

