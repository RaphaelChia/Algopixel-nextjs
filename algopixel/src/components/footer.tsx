// import Image from "next/image";

// export default function Footer() {
//   return (
//     <footer>
//       <div className="footer-area home3 primary-bg pt-90">
//         <div className="footer-top">
//           <div className="container">
//             <div className="row">
//               <div className="col-xl-6 col-lg-4  col-md-12  col-sm-12 col-12">
//                 <div className="footer-widget f-subscriber-area pb-30 mt-15 pr-100">
//                   <div className="f-logo">
//                     <Image
//                       src={algopixelLogo}
//                       alt="Algopixel Logo"
//                       style={{
//                         width: "auto",
//                         height: "auto",
//                       }}
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className="col-xl-3  col-lg-3  col-md-4  col-sm-6 col-12">
//                 <div className="footer-widget f-info pb-30 ml-40 pr-20 mt-25">
//                   <h6 className="text-capitalize f-700 mb-22">about</h6>
//                   <ul className="footer-info">
//                     <li>
//                       <a
//                         href="about.html"
//                         className="position-relative d-inline-block mb-2"
//                       >
//                         Our Story
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="courses.html"
//                         className="position-relative d-inline-block mb-2"
//                       >
//                         Courses
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="structure.html"
//                         className="position-relative d-inline-block mb-2"
//                       >
//                         Structure
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="contact.html"
//                         className="position-relative d-inline-block mb-2"
//                       >
//                         Contact Us
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="col-xl-3  col-lg-4  col-md-6  col-sm-12 col-12 pr-xl-0">
//                 <div className="footer-widget f-adress pb-40 mt-25">
//                   <h6 className="text-capitalize f-700 mb-22">Get in Touch</h6>
//                   <ul className="footer-address">
//                     <li className="d-flex align-items-start mb-10">
//                       <span className="f-icon mr-20">
//                         <i className="fas fa-map-marker-alt"></i>
//                       </span>
//                       <div className="">
//                         <a
//                           href="https://goo.gl/maps/maBhbZKMjmjsgrRy9"
//                           target="_blank"
//                           className="text-link"
//                         >
//                           <b>Junction 10</b>
//                         </a>
//                         <br />1 Woodlands Rd #01-09
//                         <br />
//                         Singapore 677899
//                         <br />
//                       </div>
//                     </li>
//                     <li className="mb-12">
//                       <span className="f-icon mr-20">
//                         <i className="far fa-envelope"></i>
//                       </span>
//                       hello@algopixel.sg
//                     </li>
//                     <li>
//                       <span className="f-icon mr-20">
//                         <i className="far fa-phone"></i>
//                       </span>
//                       +65 8800 1637
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//             <div className="footer-border-bottom pt-70"></div>
//           </div>
//         </div>

//         <div className="footer-bottom">
//           <div className="container">
//             <div className="copyright-area pb-60 pt-20">
//               <div className="row align-items-center justify-content-between">
//                 <div className="col-xl-6 col-lg-6 col-md-6  col-sm-12 col-12 mt-10">
//                   <div className="copyright-text">
//                     <p className="mb-0 secondary-color2">
//                       All rights reserved
//                       <a href="" className="c-theme f-700 black-color">
//                         Algopixel Coding
//                       </a>{" "}
//                       © 2023
//                     </p>
//                   </div>
//                 </div>
//                 <div className="col-xl-6 col-lg-6  col-md-6 col-sm-12 col-12 mt-10 d-flex align-items-center justify-content-md-end">
//                   <ul className="social-link">
//                     <li className="d-inline-block">
//                       <a
//                         className="facebook-color text-center pr-15 d-inline-block transition-3"
//                         href="https://www.facebook.com/profile.php?id=61552669371144"
//                         target="_blank"
//                       >
//                         <i className="fab fa-facebook-f"></i>
//                       </a>
//                     </li>
//                     <li className="d-inline-block">
//                       <a
//                         className="instagram-color text-center d-inline-block transition-3"
//                         href="https://www.instagram.com/algopixelcoding/"
//                         target="_blank"
//                       >
//                         <i className="fab fa-instagram"></i>
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }


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
                            <h5 className="text-base font-normal text-offwhite"><Link href="https://g.co/kgs/N1cXZ6" target="_blank"><b>Junction 10</b></Link><br/>1 Woodlands Rd  #01-09<br/>Singapore 677899</h5>
                        </div>
                        <div className="flex gap-2 mt-5">
                            <Image src={'/icons/telephone.svg'} alt="telephone-icon" width={24} height={24} className="mt-1 me-3"/>
                            <h5 className="text-base font-normal text-offwhite"><Link href="https://g.co/kgs/N1cXZ6" target="_blank"><b>Whatsapp</b></Link><br/>+65 8800 1637</h5>
                        </div>
                        <div className="flex gap-2 mt-5">
                            <Image src={'/icons/email.svg'} alt="email-icon" width={24} height={24} className="me-3"/>
                            <h5 className="text-base font-normal text-offwhite"><Link href="https://g.co/kgs/N1cXZ6" target="_blank"><b>Email</b></Link><br/>hello@algopixel.sg</h5>
                        </div>
                    </div>

                </div>

                {/* All Rights Reserved */}

                <div className='py-8 lg:flex items-center justify-between border-t border-t-bordertop'>
                    <h4 className='text-offwhite text-sm text-center lg:text-start font-normal'>All Rights Reserved. <Link href="https://algopixel.sg/" className="font-bold">Algopixel Coding</Link> ©2023</h4>
                    <div className="flex gap-5 mt-5 lg:mt-0 justify-center lg:justify-start">
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
