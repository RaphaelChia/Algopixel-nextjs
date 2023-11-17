import Image from "next/image";
import Link from 'next/link';

interface datatype {
    imgSrc: string;
    heading: string;
    paragraph: string;
}

const Aboutdata: datatype[] = [
    {
        imgSrc: "/assets/features/time.svg",
        heading: "Holiday Classes",
        paragraph: 'Acquire new skills during the holidays with our specially crafted coding programs.',
    },
    {
        imgSrc: "/assets/features/signal.svg",
        heading: "Weekly Classes",
        paragraph: 'Immerse in weekly coding sessions for continuous learning, fostering innovation and growth.',

    },
]

export default function Programmes() {
    return (
        <div className="">
            <div className="mx-auto max-w-2xl py-20 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <h3 className="text-3xl sm:text-4xl font-bold text-darkblue text-center my-6">Our Programmes</h3>

                <h5 className="text-black opacity-60 text-lg font-normal text-center">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque <br /> laudantium, totam rem aperiam, eaque ipsa quae ab.</h5>

                <div className='gap-x-16 gap-y-4 lg:gap-x-8 mt-10 flex flex-col md:flex-row justify-around items-center'>
                    {Aboutdata.map((item, i) => (
                        <div key={i} className='bg-white rounded-2xl p-5 featureShadow grow max-w-[500px] '>

                            <Image src={item.imgSrc} alt={item.imgSrc} width={55} height={55} className="mb-2" />
                            <h3 className="text-2xl font-semibold text-black mt-5">{item.heading}</h3>
                            <h4 className='text-lg font-normal text-black opacity-50 my-2'>{item.paragraph}</h4>
                            <Link href={'/'} className="text-electricblue text-xl font-medium flex gap-2 pt-10 pb-2">
                                Learn more <Image src="/assets/people/arrow-right.svg" alt="arrow-right" width={24} height={24} />
                            </Link>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}