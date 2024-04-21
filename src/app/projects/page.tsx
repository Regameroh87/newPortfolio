import { LayoutGrid } from "../../components/ui/layout-grid";
import { cards } from "./projects";
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";

export default function About() {
  return (
    <section className=" flex flex-col min-w-96 mt-40 items-center w-screen h-screen">
      <TextGenerateEffect className=" w-full" words={"Hola mundo!! soy Rodrigo Gamero"} />
      <article id="projects"className=" flex w-full h-full">
      <LayoutGrid cards={cards} />
      </article>
    </section>
  );
}
