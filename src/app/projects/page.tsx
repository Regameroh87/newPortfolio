import React from "react";
import { LayoutGrid } from "../../components/ui/layout-grid";
import { cards } from "./projects";
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";

export default function About() {
  const words = ` ¿Quieres llevar tu empresa al siguiente nivel? Descubre las ventajas de tener una presencia online sólida y cómo puede beneficiar a tu negocio:
  
  Alcance global: Con una web, puedes llegar a clientes potenciales en todo el mundo, expandiendo tu alcance más allá de las fronteras locales.
  Mayor visibilidad: Una presencia online aumenta tu visibilidad en línea, haciéndote más accesible para clientes que buscan tus productos o servicios.
  Ventas 24/7: Con un ecommerce, puedes vender tus productos las 24 horas del día, los 7 días de la semana, sin restricciones de horario.
  Facilidad de compra: Ofrece a tus clientes una experiencia de compra fácil y conveniente desde cualquier dispositivo, mejorando la satisfacción del cliente.
  Análisis y seguimiento: Obtén información valiosa sobre el comportamiento de tus clientes, analiza tendencias y toma decisiones informadas para mejorar tu negocio.
  ¡Potencia tu empresa con una web y aprovecha todas estas ventajas para alcanzar el éxito!

  A continuacion te muestro algunos de mis proyectos:
`;

  return (
    <section className=" flex flex-col min-w-96 mt-40 items-center mx-auto w-3/4 h-auto">
      
      <TextGenerateEffect className=" w-full text-sm" words={words} />
      <article id="projects" className=" flex w-full h-screen">
        <LayoutGrid cards={cards} />
      </article>
    </section>
  );
}
