import { IconSvg } from "../icons"
import Link from "next/link"

export default function SocialIcons (){

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

    return(
        <div className=" flex w-auto absolute bottom-20 mr-2 right-0 z-50">
          {
            iconSocial.map((icon,index) => { return (
                <div key={index}>
                    <Link href={icon.link}>
                    <IconSvg nameIcon={icon.nameIcon} width={50} height={50} className={" p-2"}/>
                    </Link>
                </div>
            )})
          }  
        </div>
    )
}