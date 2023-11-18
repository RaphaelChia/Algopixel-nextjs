import Link from "next/link";
import Image from "next/image";

interface socialLinks {
    imgSrc: string;
    link: string;
    width: number;
    height:number;
}

const socialLinks: socialLinks[] = [
    {
        imgSrc: '/icons/facebook.svg',
        link: 'https://www.facebook.com/profile.php?id=61552669371144',
        width: 15,
        height:15
    },
    {
        imgSrc: '/icons/instagram-logo.png',
        link: 'https://www.instagram.com/algopixelcoding/',
        width: 28,
        height:28,
    },
    {
        imgSrc: '/icons/whatsapp.svg',
        link: 'https://wa.me/+6588001637',
        width: 25,
        height:25,
    },
]

export default function Socials(){
    return ( 
        <div className='col-span-4 md:col-span-12 lg:col-span-4'>
        <div className='flex gap-4 lg:justify-end'>
            {socialLinks.map((items, i) => (
                <Link href={items.link} key={i} target="_blank">
                    <div className="socialBg h-15 w-15 m-2 flex items-center justify-center">
                        <Image src={items.imgSrc} alt={items.imgSrc} width={items.width} height={items.height} className="sepiaa"/>
                    </div>
                </Link>
            ))}

        </div>
    </div>
    )
}