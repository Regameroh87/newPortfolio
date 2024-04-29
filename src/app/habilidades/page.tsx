"use client";
import React from "react";
import { ContainerScroll } from "../../components/ui/container-scroll-animation";
import { IconTechSvg } from "@/components/ui/icons";

export default function SkillsPage() {
  const technologies = [
    "html",
    "css",
    "javascript",
    "typescript",
    "react",
    "nextjs",
    "astro",
    "python",
    "mongodb",
    "sql",
    "tailwind"
  ];

  return (
    <div className="flex flex-col ">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-slate-100">
              Trabajo con algunas de las siguientes <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Tecnologias
              </span>
            </h1>
          </>
        }
      >
        <div className=" flex flex-wrap w-full h-full justify-center gap-x-6 bg-slate-700">
          {technologies.map((tech) => {
            return (
              <IconTechSvg key={tech} nameIcon={tech} width={64} height={64} />
            );
          })}
        </div>
      </ContainerScroll>
    </div>
  );
}
