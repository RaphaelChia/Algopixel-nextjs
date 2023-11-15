import Link from "next/link";
import Image from "next/image";
import algopixelLogo from "../../public/algopixel/algopixel_logo.png";
import Socials from "./Social/social";
import Data from "./Navbar/Drawerdata";


export default function Footer() {


    return (
        <div className="bg-lightblue -mt-10">
            <div className="mx-auto max-w-2xl pt-1 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="my-12 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">

                    {/* COLUMN-1 */}

                    <div className='col-span-6 md:col-span-12 lg:col-span-6'>
                        <Image src={algopixelLogo} alt="logo" className='pb-8 pl-4' style={{height:'auto'}}/>
                    </div>

                    {/* CLOUMN-2 */}
                    
                    <div className='col-span-3 md:col-span-6 lg:col-span-3 justify-items-start mt-5 ml-4'>
                    <h5 className="font-bold text-xl">Know More</h5>
                        <Data/>
                    </div>

                    {/* CLOUMN-3 */}

                    <div className='col-span-3 md:col-span-4 lg:col-span-3 mt-5 mr-4'>
                        <h5 className="font-bold text-xl">Get In Touch</h5>
                        <div className="flex gap-2 items-start mt-5">
                            <Image src={'/icons/mask.svg'} alt="mask-icon" width={24} height={24} className="mt-1 me-3"/>
                            <h5 className="text-base font-normal text-offwhite"><Link href="https://g.co/kgs/N1cXZ6" target="_blank" className="hover:text-purple"><b>Junction 10</b></Link><br/>1 Woodlands Rd  #01-09<br/>Singapore 677899</h5>
                        </div>
                        <div className="flex gap-2 mt-5">
                            <Image src={'/icons/telephone.svg'} alt="telephone-icon" width={24} height={24} className="mt-1 me-3"/>
                            <h5 className="text-base font-normal text-offwhite"><Link href="https://wa.me/+6588001637" target="_blank" className="hover:text-purple"><b>Whatsapp</b></Link><br/>+65 8800 1637</h5>
                        </div>
                        <div className="flex gap-2 mt-5">
                            <Image src={'/icons/email.svg'} alt="email-icon" width={24} height={24} className="me-3"/>
                            <h5 className="text-base font-normal text-offwhite"><Link href="mailto:hello@algopixel.sg" target="_blank" className="hover:text-purple"><b>Email</b></Link><br/>hello@algopixel.sg</h5>
                        </div>
                    </div>

                </div>

                {/* All Rights Reserved */}

                <div className='py-8 lg:flex items-center justify-between border-t border-t-bordertop'>
                    <h4 className='text-offwhite text-sm text-center lg:text-start font-normal'>All Rights Reserved. <Link href="https://algopixel.sg/" className="font-bold">Algopixel Coding</Link> ©2023</h4>
                    <div className="flex gap-5 mt-5 lg:mt-0 justify-center lg:justify-start pr-20">
                    <Socials/>
                        {/* <h4 className='text-offwhite text-sm font-normal'><Link href="/" target="_blank">Privacy policy</Link></h4>
                        <div className="h-5 bg-bordertop w-0.5"></div>
                        <h4 className='text-offwhite text-sm font-normal'><Link href="/" target="_blank">Terms & conditions</Link></h4> */}
                    </div>
                </div>

            </div>
        </div>
    )
}
