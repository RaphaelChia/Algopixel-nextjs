import Image from "next/image";

interface whydata {
    imgsrc:string
    heading: string;
    subheading: string;
}

const whydata: whydata[] = [
    {
        imgsrc:"/icons-about/handson.png",
        heading: "Hands-On Learning",
        subheading: "We believe that the best way to learn coding is by doing. That's why our classes emphasize hands-on projects, real-world applications, and interactive learning.",
    },
    {
        imgsrc:"/icons-about/comprehensivecurriculum.png",
        heading: "Comprehensive Curriculum",
        subheading: "Our curriculum is thoughtfully designed to cater to both beginners and advanced learners. Whether a child is passionate about game development, web design, robotics, or data science, we provide the tools and guidance for them to delve deeper into their specific interests.",
    },
    {
        imgsrc:"/icons-about/growthmindset.png",
        heading: "Fostering a Growth Mindset",
        subheading: "Our instructors encourage children to embrace challenges, learn from failures, and continuously improve. This mindset not only applies to coding but also extends to all aspects of life, helping them become resilient, adaptable, and confident individuals.",
    }
]


const Why = () => {
    return (
        <div id="about" className="bg-lightblue">
            <div className='mx-auto max-w-7xl px-4 my-20 sm:py-20 lg:px-8'>
                <div className='grid grid-cols-1 lg:grid-cols-2'>

                    {/* COLUMN-1 */}
                    <div className="lg:-ml-64">
                    <h3 className="text-4xl lg:text-5xl pt-4 font-semibold sm:leading-tight mt-5 text-center lg:text-start">Why Choose Algopixel?</h3>
                        <h4 className="text-lg pt-4 font-normal sm:leading-tight text-center text-beach lg:text-start">Algopixel is the place where your coding journey begins. We invite you to explore our courses, meet our passionate team, and discover the endless possibilities that coding can offer.</h4>

                        <Image src="/icons-about/coding.png" alt="coding-image" width={3000} height={500} />
                    </div>

                    {/* COLUMN-2 */}
                    <div>
                        <div className="mt-10">
                            {whydata.map((items, i) => (
                                <div className="flex mt-4" key={i}>
                                    <div className="rounded-full h-40 w-40 flex items-center justify-center bg-circlebg">
                                        <Image src={items.imgsrc} alt="check-image" width={50} height={50} />
                                    </div>
                                    <div className="ml-5">
                                        <h4 className="text-2xl font-semibold">{items.heading}</h4>
                                        <h5 className="text-lg text-beach font-normal mt-2">{items.subheading}</h5>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Why;
