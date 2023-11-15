import Image from "next/image";

export default function IndexBanner(){
    
    return (
        <div className='bg-header'>
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
                <div className='grid grid-cols-1 lg:grid-cols-12'>
                    <div className='col-span-7 flex flex-col justify-evenly relative'>
                        {/* <Image src="/assets/banner/star.svg" alt="star-image" width={95} height={97} className='absolute top-[-74px] right-[51px]' />
                        <Image src="/assets/banner/lineone.svg" alt="line-image" width={190} height={148} className='absolute top-[-74px] right-[51px]' /> */}
                        <h1 className='text-midnightblue text-4xl md:text-85xl text-center lg:text-start font-semibold lh-133 pt-5'>Elevate Innovation Through Coding and Pixels</h1>
                        <h3 className='text-black opacity-75 text-lg font-normal text-center lg:text-start pt-8'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</h3>
                        <div className='pt-8 mx-auto lg:mx-0'>
                            <button className="text-white text-xl font-medium py-6 px-12 rounded-full transition duration-150 ease-in-out bg-electricblue hover:text-white hover:bg-blue">
                                Get started
                            </button>
                        </div>
                    </div>

                    <div className='col-span-5 flex justify-center xl:-mb-32 xl:-mr-32 pt-10 lg:pt-0'>
                        <Image src="/images/buildskills.png" alt="Build Skills" width={700} height={405} />
                    </div>
                </div>
            </div>

        </div>

    )
}