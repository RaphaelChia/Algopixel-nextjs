import Image from "next/image";
import Link from "next/link";

interface datatype {
  imgSrc: string;
  country: string;
  paragraph: string;
}

const Aboutdata: datatype[] = [
  {
    imgSrc: "/icons-code/idea.png",
    country: "Problem-Solving",
    paragraph:
      "Use logical thinking to break down complex problems into manageable steps",
  },
  {
    imgSrc: "/icons-code/collaborate.png",
    country: "Collaboration",
    paragraph:
      "Collaborate, share ideas, and learn how to work with others and communicate effectively",
  },
  {
    imgSrc: "/icons-code/creativity.png",
    country: "Creativity and Innovation",
    paragraph:
      "Approach challenges with creativity and develop solutions using technology",
  },
  {
    imgSrc: "/icons-code/rocket.png",
    country: "Future-Ready",
    paragraph:
      "Learn essential skills to understand, navigate, and excel in a technology-driven world",
  },
];

const Provide = () => {
  return (
    <div id="services" className="bg-lightblue">
      <div className="mx-auto max-w-7xl px-4 my-10 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* COLUMN-1 */}
          <div className="col-span-6 flex justify-center">
            <div className="flex flex-col align-middle justify-center p-10">
              <h5 className="text-purple font-bold text-center lg:text-start text-lg">
                The code to success
              </h5>

              <p className="text-4xl lg:text-5xl pt-2 font-bold lh-81 mt-5 text-center lg:text-start leading-loose">
                How Coding Education Shapes Young Futures
              </p>
              <h4 className="text-lg pt-4 font-normal lh-33 text-center lg:text-start text-bluegray leading-loose">
                Coding for kids is more than programming; it&apos;s about building
                skills and unleashing creativity while navigating the digital
                landscape with ease.
              </h4>
              <Image src="/icons-about/coding.png" alt="coding-image" width={400} height={400} className="animate-wiggle" />

              {/* <Link href={'/'} className="mt-4 text-xl font-medium text-blue flex gap-2 mx-auto lg:mx-0 space-links">Learn more <Image src={'/assets/provide/arrow.svg'} alt={'arrow'} width={20} height={20} /></Link> */}
            </div>
          </div>

          <div className="lg:col-span-1"></div>

          {/* COLUMN-2 */}
          <div className="col-span-6 lg:col-span-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10 lg:gap-x-40 px-10 py-12 bg-bluebg rounded-3xl">
              {Aboutdata.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-3xl lg:-ml-32 p-6 shadow-xl"
                >
                  <Image
                    src={item.imgSrc}
                    alt={item.imgSrc}
                    width={64}
                    height={64}
                    className="mb-5"
                  />
                  <h4 className="text-2xl font-semibold">{item.country}</h4>
                  <h4 className="text-lg font-normal text-bluegray my-2">
                    {item.paragraph}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Provide;
