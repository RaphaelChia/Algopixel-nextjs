import Image from "next/image";
import Link from 'next/link';

interface datatype {
    imgSrc: string;
    heading: string;
    suitable: string;
    paragraph: string;
}

const Aboutdata: datatype[] = [
    {
        imgSrc: "/courses/scratchjr.png",
        heading: "Scratch Junior",
        suitable: "Game Development | 4-6 years old",
        paragraph: "Game development immerses children in the world of interactive entertainment. They'll design characters, levels, and gameplay, and even code their games using platforms like Scratch and Python.",
    },
    {
        imgSrc: "/courses/scratch.png",
        heading: "Scratch",
        suitable: "Game Development  | 7-9 years old",
        paragraph: 'Scratch offers a comprehensive introduction to the art of coding and computational thinking. Students dive into the world of animation, game design, and interactive project creation. This dynamic platform empowers participants to develop expertise in core coding concepts while honing their creativity and problem-solving abilities.',

    },
    {
        imgSrc: "/courses/thunkable.png",
        heading: "Thunkable",
        suitable: "App Development  | 10-12 years old",
        paragraph: 'Thunkable provides a gentle yet empowering introduction to the realm of app development. Designed for aspiring creators, this program simplifies the process of building mobile apps. Participants, regardless of age, discover the joys of app creation, fostering problem-solving skills in a hands-on and accessible manner.',

    },
    {
        imgSrc: "/courses/python.png",
        heading: "Python Fundamentals",
        suitable: "Computer Science  | 10-18 years old",
        paragraph: 'Python Fundamentals aims to build a strong coding foundation. It delves into the versatile world of Python, where students master the fundamentals of coding, including variables, loops, and conditional statements. Problem-solving is at the forefront of this program, fostering essential skills for logical thinking.',

    },
    {
        imgSrc: "/courses/pythongame.png",
        heading: "Python Game Development",
        suitable: "Game Development | 10-18 years old",
        paragraph: 'The Python Game Development course takes the art of coding to new heights. Students explore the fascinating world of game design, utilizing Python to bring their imaginative ideas to life. Throughout this journey, learners sharpen their coding and creative problem-solving abilities.',

    },
    {
        imgSrc: "/courses/pythondata.png",
        heading: "Python Data Analytics",
        suitable: "Data Analytics | 10-18 years old",
        paragraph: 'This course offers a deep dive into data analysis using Python. Students tackle real-world data, learning to visualize and analyze it to extract valuable insights. Problem-solving takes center stage as learners apply their analytical skills to practical, data-related challenges.',

    },
    {
        imgSrc: "/courses/webdev.png",
        heading: "Web Development Fundamentals",
        suitable: "Web Development | 10-18 years old",
        paragraph: "Participants will explore the foundational principles of web development, gaining proficiency in HTML and CSS. They'll learn how to construct and style webpages effectively, emphasizing problem-solving as they design and structure web content. This track fosters problem-solving, design flair, and digital literacy.",

    },
    {
        imgSrc: "/courses/webdevbootstrap.png",
        heading: "Web Development with Bootstrap",
        suitable: "Web Development | 10-18 years old",
        paragraph: "This program immerses participants in the world of web development using Bootstrap. Learners gain the skills to create visually appealing and functionally dynamic websites. Problem-solving is woven into the curriculum, equipping students to tackle real-world design challenges and craft modern, aesthetically pleasing web experiences.",

    },
    {
        imgSrc: "/courses/advancedwebdev.png",
        heading: "Web Development Advanced",
        suitable: "Web Development | 10-18 years old",
        paragraph: "This program equips participants with a deep understanding of web development, with a central focus on the dynamic and interactive aspects of web design. By learning JavaScript, students become adept at adding interactivity and functionality to websites, empowering them to create engaging, user-friendly web projects.",

    }
    
]

export default function Courses () {
    return (
        <div className="bg-gradient-to-b from-[#F0F6FB] to-white-300 mb-10 pb-10">
            <div className="mx-auto max-w-2xl py-10 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <h3 className="text-3xl sm:text-4xl font-bold text-darkblue text-center my-6">All Our Courses</h3>
                <h5 className="text-darkblue opacity-75 text-xl font-normal text-center">From crafting websites to dreaming up interactive games, we have the perfect course to develop a passion for coding.</h5>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-4 lg:gap-x-8 mt-12'>
                    {Aboutdata.map((item, i) => (
                        <div key={i}>
                            <Image src={item.imgSrc} alt={item.imgSrc} width={800} height={400}  className="mb-1 rounded-t-2xl" />
                            <div className='bg-white rounded-2xl p-10 mb-4 mt-0 featureShadow'>

                            <h3 className="text-2xl font-bold text-darkblue mt-5">{item.heading}</h3>

                            <h5 className="text-xs font-normal text-darkblue opacity-70 mt-2">{item.suitable}</h5>

                            <h4 className='text-sm font-normal leading-loose text-darkblue opacity-75 my-4'>{item.paragraph}</h4>
                            {/* <Link href={'/'} className="text-electricblue text-xl font-medium flex gap-2 pt-10 pb-2">
                                Learn more <Image src="/assets/people/arrow-right.svg" alt="arrow-right" width={24} height={24} />
                            </Link> */}

                        </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
