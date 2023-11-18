import Image from "next/image";
import Link from 'next/link';

interface datatype {
    imgSrc: string;
    heading: string;
    paragraph: string;
}

const Aboutdata: datatype[] = [
    {
        imgSrc: "/icons-track/gamedev.png",
        heading: "Game Development",
        paragraph: "Game development immerses children in the world of interactive entertainment. They'll design characters, levels, and gameplay, and even code their games using platforms like Scratch and Python.",
    },
    {
        imgSrc: "/icons-track/webdev.png",
        heading: "Web Development",
        paragraph: "Web development is where kids learn to create websites and web applications. They'll master coding languages like HTML, CSS, and JavaScript, designing and building digital spaces on the internet.",

    },
    {
        imgSrc: "/icons-track/appdev.png",
        heading: "App Development",
        paragraph: "App development teaches kids to design and build mobile applications using Thunkable. They'll explore user interfaces, coding languages, and app creation from start to finish.",

    }
    ,
    {
        imgSrc: "/icons-track/dataanalytics.png",
        heading: "Data Analytics",
        paragraph: "Data analytics empowers kids to become data detectives. They'll collect, analyze, and interpret data to uncover patterns and insights, equipping them with valuable problem-solving skills.",

    }
    ,
    {
        imgSrc: "/icons-track/comsci.png",
        heading: "Computer Science",
        paragraph: "Computer science unlocks the potential for young minds to become digital explorers. They'll dive into algorithms, programming, and problem-solving, gaining the tools to navigate the digital world with creativity and innovation.",

    }
    ,
    {
        imgSrc: "/icons-track/vr.png",
        heading: "Virtual Reality (Coming Soon)",
        paragraph: "Virtual Reality (VR) development is a thrilling journey where kids learn to create immersive digital worlds. They design and code VR experiences, stepping into the future of technology.",

    }
    ,
    {
        imgSrc: "/icons-track/robotics.png",
        heading: "Robotics (Coming Soon)",
        paragraph: "Robotics is where kids embark on an exciting journey to code and control hardware like the mBot. They'll build robots, program their movements, and explore the world of physical computing.",

    }
    ,
    {
        imgSrc: "/icons-track/aiml.png",
        heading: "AI and Machine Learning (Coming Soon)",
        paragraph: "AI and Machine Learning offer a glimpse into the future of technology. Kids will delve into algorithms, teach machines to make decisions, and solve real-world problems using artificial intelligence.",

    }
]

const Features = () => {
    return (
        <div className="bg-babyblue" id="features">
            <div className="mx-auto max-w-2xl py-20 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <h3 className="text-4xl sm:text-5xl font-semibold text-black text-center my-10">Our Tracks</h3>
                <h5 className="text-black opacity-60 text-lg font-normal text-center">From crafting websites to dreaming up interactive games, we have the perfect track to ignite a passion for coding</h5>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-10 lg:gap-x-8 mt-10'>
                    {Aboutdata.map((item, i) => (
                        <div key={i} className='bg-white rounded-2xl p-5 featureShadow'>

                            <Image src={item.imgSrc} alt={item.imgSrc} width={100} height={100} className="mb-2" />
                            <h3 className="text-2xl font-semibold text-black mt-5">{item.heading}</h3>
                            <h4 className='text-lg font-normal text-black opacity-50 my-2'>{item.paragraph}</h4>
                            {/* <Link href={'/'} className="text-electricblue text-xl font-medium flex gap-2 pt-10 pb-2">
                                Learn more <Image src="/assets/people/arrow-right.svg" alt="arrow-right" width={24} height={24} />
                            </Link> */}

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Features;
