import Image from "next/image";
import Link from "next/link";

export default function IndexBanner() {
  return (
    <div className="bg-header">
      {/* <div id="scene" className="position-absolute w-100 h-100 z-index1">
                    <Image data-depth="0.20" className="hm3-shape hm3-shape-2 bounce-animate2 d-none d-lg-inline-block" src="/shape/hm3-shape2.png" alt="#" width={15} height={15}/>
                    <Image data-depth="0.20" className="hm3-shape hm3-shape-3 d-none d-lg-inline-block s-shape" src="/shape/hm3-shape3.png" alt="#"  width={15} height={15}/>
                    <Image data-depth="0.20" className="hm3-shape hm3-shape-4 d-none d-lg-none bounce-animate2 d-sm-inline-block" src="/shape/hm3-shape4.png" alt="#" width={15} height={15}/>
                    <Image data-depth="0.20" className="hm3-shape hm3-shape-5 d-none d-lg-none bounce-animate2 d-md-inline-block" src="/shape/hm3-shape5.png" alt="#" width={15} height={15}/>
                    <Image data-depth="0.20" className="hm3-shape hm3-shape-6 d-none d-lg-none bounce-animate2 d-sm-inline-block" src="/shape/hm3-shape6.png" alt="#" width={15} height={15}/>
                    <Image data-depth="0.20" className="hm3-shape hm3-shape-7 d-none d-lg-inline-block s-shape" src="/shape/hm3-shape7.png" alt="#" width={15} height={15}/>
                    <Image data-depth="0.20" className="hm3-shape hm3-shape-8 d-none d-lg-inline-block s-shape" src="/shape/hm3-shape8.png" alt="#" width={15} height={15}/>
                    <Image data-depth="0.20" className="hm3-shape hm3-shape-9 d-none d-lg-block heartbeat2" src="/shape/home3-round-shape1.png" alt="#" width={15} height={15}/>
                    <Image data-depth="0.20" className="hm3-shape hm3-shape-10 d-none d-lg-block heartbeat2" src="/shape/home3-round-shape2.png" alt="#" width={15} height={15}/>
                    <Image data-depth="0.20" className="hm3-shape hm3-shape-11 d-none d-lg-block heartbeat" src="/shape/home3.round-shape3.png" alt="#" width={15} height={15}/>
                    <Image data-depth="0.20" className="hm3-shape hm3-shape-12 d-none d-lg-block heartbeat" src="/shape/home3.round-shape3.png" alt="#" width={15} height={15}/>
                </div> */}
      <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1">
          <div className="col-span-6 flex flex-col justify-center pr-4">
            <h2 className="text-purple text-2xl sm:text-30xl text-center md:text-start font-bold lh-133 pt-5">
              Algopixel Coding
            </h2>
            <h1 className="text-darkblue text-5xl sm:text-35xl text-center md:text-start font-bold lh-133 pt-2 leading-snug">
              Elevate Innovation Through Coding and Pixels
            </h1>
            <h3 className="text-black opacity-75 text-xl font-normal text-center md:text-start pt-8 leading-relaxed">
              Our tailored programs empower young minds to innovate by combining
              the precision of coding with the creativity of pixels.
            </h3>
            <div className="pt-8 mx-auto md:mx-0 mt-4">
              <Link href="/about" className="text-white text-xl font-semibold py-4 px-12 rounded-full transition duration-150 ease-in-out bg-purple hover:text-purple hover:bg-white border-purple border-[2px]">
              Our Story
              </Link>
            </div>
          </div>

          <div className="col-span-6 flex justify-center mt-10 lg:mt-0 pl-4">
          <Image
            src="/images/buildskills.png"
            alt="Build Skills"
            width={600}
            height={600}
          />
          </div>
         
        </div>
      </div>
    </div>
  );
}
