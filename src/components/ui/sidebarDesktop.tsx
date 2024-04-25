import { IconSvg } from "./icons";
import Link from "next/link";

export default function SidebarDesktop() {

const iconSocial = [
    {
        nameIcon:'whatsapp',
        link:'https://wa.me/+542262573568'
    },
    {
        nameIcon:'instagram',
        link:'https://www.instagram.com/gamero_rodrigo/'
    },
    {
        nameIcon:'linkedin',
        link:'https://www.linkedin.com/in/rodrigo-gamero-16b943268/'
    },
    {
        nameIcon:'github',
        link:'https://github.com/Regameroh87'
    }]


  return (
    <div className=" hidden md:flex flex-col p-4 gap-6 fixed top-1/2 right-10 -translate-y-1/2 " style={{zIndex:"999"}}>
        {iconSocial.map((icon)=> { return (
            <div key={icon.nameIcon} className=" flex">
            <Link href={icon.link}>
            <IconSvg  width={40} height={40} nameIcon={icon.nameIcon} className=" flex grayscale hover:grayscale-0 hover:scale-125 hover:-translate-y-4 hover:cursor-pointer transition-all ease-out"/>
            </Link>
            </div>
        )})}
    </div>
  );
}
