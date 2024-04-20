

const SkeletonOne = () => {
    return (
      <div>
        <p className="font-bold text-4xl text-white">Carrousel en CSS</p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          A serene and tranquil retreat, this house in the woods offers a peaceful
          escape from the hustle and bustle of city life.
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
          Perched high above the world, this house offers breathtaking views and a
          unique living experience. It&apos;s a place where the sky meets home,
          and tranquility is a way of life.
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
          A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
          perfect place to relax, unwind, and enjoy life.
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
          A house by the river is a place of peace and tranquility. It&apos;s the
          perfect place to relax, unwind, and enjoy life.
        </p>
      </div>
    );
  };
   
  export const cards = [
    {
      id: 1,
      content: <SkeletonOne />,
      className: "sm:col-span-2",
      thumbnail:"/project_carruselCSS.gif",
    },
    {
      id: 2,
      content: <SkeletonTwo />,
      className: "col-span-1",
      thumbnail:"/project_inmueble360.png",
       
    },
    {
      id: 3,
      content: <SkeletonThree />,
      className: "col-span-1",
      thumbnail:"/project_pokemon.png"
        
    },
    {
      id: 4,
      content: <SkeletonFour />,
      className: "sm:col-span-2",
      thumbnail:"/project_marathon.png"
     
    },
  ];