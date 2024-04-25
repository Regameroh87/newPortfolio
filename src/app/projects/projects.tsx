const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Carrousel en CSS</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        "Explorando la Creatividad con Simplicidad: Un Carrusel Sencillo,
        Elaborado con Amor en CSS" En mi camino para fortalecer mis habilidades
        y fomentar la imaginación, me embarqué en el diseño de un modesto
        carrusel de imágenes utilizando solo CSS. Aunque se presenta como un
        esfuerzo sencillo, este proyecto encapsula mi dedicación para
        perfeccionar mis habilidades técnicas en el vasto mundo de las
        tecnologías web. Tecnologias: HTML and CSS
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Inmuebles 360</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        El proyecto implica el desarrollo de una plataforma web que simplifica
        el proceso de alquiler de propiedades, permitiendo a los usuarios tanto
        alquilar propiedades como listar las suyas para alquilar. La plataforma
        incorpora varias características para mejorar la experiencia del
        usuario. Tecnologias: React, JavaScript, HTML, Redux, Tailwind,
        Bootstrap, AntDesign, Node, Cloudinary, Express, Mongodb, Nodemailer,
        Passport, Stripe, Formik...
      </p>
    </div>
  );
};

const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Pokébola</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Mi primer proyecto como desarrollador es una versión de la icónica
        Pokébola, creada con React y CSS puro. Esta Pokébola tradicional es más
        que solo un proyecto técnico; representa un desafío significativo para
        mí, marcando mis primeros pasos en el mundo del desarrollo web.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Projecto Maratón</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Este innovador proyecto fue construido utilizando Next.js como framework
        principal, lo cual permitió una experiencia web dinámica y rápida. Para
        las principales funcionalidades: utilice MongoDB atlas para la base de
        datos, Firebase para auth de terceros con google, Cloudinary para el
        alojamiento de imagenes y documentos, y Mercado Pago para los pagos de
        inscripciones y otra actividades.
      </p>
    </div>
  );
};

export const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "sm:col-span-2",
    thumbnail: "/project_carruselCSS.gif",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "/project_inmueble360.png",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "/project_pokemon.png",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "sm:col-span-2",
    thumbnail: "/project_marathon.png",
  },
];
