import { MacbookScroll } from "../components/ui/macbook-scroll";
import { BackgroundBeams } from "../components/ui/background-beams";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <BackgroundBeams className=" bg-slate-950" />
      <div className=" flex flex-col pt-36">
        <h1 className="relative z-10 text-xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          RODRIGO GAMERO
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Desarrollador Full Stack especializado en crear aplicaciones y
          sitios web responsivos y creativos. Transformando ideas en
          experiencias digitales memorables.
        </p>
      </div>
      <MacbookScroll title="¿ Quién soy ?" src="/about" />
    </main>
  );
}
