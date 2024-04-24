import Image from "next/image";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export default function About() {
  return (
    <section className=" flex flex-col">
      <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0 flex items-center justify-around text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
          {/* pantalla 512*384 */}
          <div className=" flex w-auto h-auto">
            <Image
              className=" rounded-lg"
              src="/Rodrigo.jpg"
              alt="Rodrigo Gamero"
              width={200}
              height={250}
            />
          </div>
          <div className=" max-w-64 overflow-hidden">
            <p className="bg-clip-text text-transparent text-sm drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
              ¡Hola! Soy Rodrigo Gamero, un desarrollador fullstack con sede en
              Necochea, provincia de Buenos
              Aires, Argentina.
            </p>
          </div>
        </div>
      </BackgroundGradientAnimation>
      <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0 flex items-center justify-around text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
          {/* pantalla 512*384 */}
         
          <div className=" max-w-64 overflow-hidden">
            <p className="bg-clip-text text-transparent text-sm drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
              Desde hace dos años, me he dedicado
              apasionadamente al mundo del desarrollo web, con el objetivo de
              crear proyectos que no solo resuelvan problemas, sino que también
              hagan la vida más cómoda y conveniente para mis clientes y
              usuarios finales. {/* Mi enfoque en el desarrollo web va más allá de
              simplemente escribir código: se trata de comprender las
              necesidades únicas de cada cliente y encontrar las mejores
              soluciones para sus desafíos. Desde el diseño de interfaces
              intuitivas hasta la implementación de funcionalidades innovadoras,
              mi objetivo es ofrecer resultados que superen las expectativas y
              agreguen valor real a cada proyecto. */}
            </p>
          </div>
          <div className=" flex w-auto h-auto">
            <Image
              className=" rounded-lg"
              src="/Rodrigo.jpg"
              alt="Rodrigo Gamero"
              width={200}
              height={250}
            />
          </div>
        </div>
      </BackgroundGradientAnimation>
    </section>
  );
}
