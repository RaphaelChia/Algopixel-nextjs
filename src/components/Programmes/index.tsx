import Image from "next/image";
import Link from "next/link";
import { CheckIcon } from "@heroicons/react/24/solid";

interface datatype {
  reflink: string;
  imgSrc: string;
  heading: string;
  paragraph: string;
  point1: string;
  point2: string;
  point3: string;
}

const Aboutdata: datatype[] = [
  {
    reflink: "/courses/holidayclasses",
    imgSrc: "/icons/holiday.png",
    heading: "Holiday Classes",
    paragraph:
      "Acquire new skills during the holidays with our specially crafted coding programs.",
    point1: "Accelerated Learning Experience",
    point2: "Flexibility and No Commitment",
    point3: "Unique Skill Enhancement",
  },
  {
    reflink: "/courses/weeklyclasses",
    imgSrc: "/icons/weekly.png",
    heading: "Weekly Classes",
    paragraph:
      "Immerse in weekly coding sessions for continuous learning, fostering innovation and growth.",
    point1: "Consistent and Progressive Learning",
    point2: "Building Mastery Over Time",
    point3: "Establishing Learning Routines",
  },
];

export default function Programmes() {
  return (
    <div className="">
      <div className="mx-auto  py-20 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h3 className="text-3xl sm:text-4xl font-bold text-darkblue text-center my-6">
          Our Programmes
        </h3>

        <h5 className="text-black opacity-75 text-xl font-normal text-center">
          Unlocking Potential: Explore, Create, and Innovate with Our Diverse
          Range of Programs
        </h5>

        <div className="h-fit mt-10 flex flex-col md:flex-row justify-around gap-[30px] items-center md:items-stretch">
          {Aboutdata.map((item, i) => (
            <div
                key={i}
                className=" text-xl font-medium flex text-darkblue flex-col items-center justify-center bg-white rounded-2xl p-10 featureShadow w-full max-w-[500px] border-[2px] border-black hover:scale-105"
              >
            <Link
              href={item.reflink}
              className=""
            >
                <Image
                  src={item.imgSrc}
                  alt={item.imgSrc}
                  width={150}
                  height={150}
                  className="mb-2"
                />
                <h3 className="text-2xl font-semibold text-black mt-5">
                  {item.heading}
                </h3>
                <h4 className="text-lg font-normal text-darkblue opacity-90 my-3">
                  {item.paragraph}
                </h4>

                <ul className="font-light text-base space-y-2 flex-1 mt-6 opacity-75">
                  <li className="leading-6 flex">
                    <CheckIcon className="w-5 h-5 shrink-0" />
                    <span className="ml-3 dark:text-neutral-400">
                      {item.point1}
                    </span>
                  </li>
                  <li className="leading-6 flex">
                    <CheckIcon className="w-5 h-5 shrink-0" />
                    <span className="ml-3 dark:text-neutral-400">
                      {item.point2}
                    </span>
                  </li>
                  <li className="leading-6 flex">
                    <CheckIcon className="w-5 h-5 shrink-0" />
                    <span className="ml-3 dark:text-neutral-400">
                      {item.point3}
                    </span>
                  </li>
                </ul>
                <div className="flex mt-6 text-bold text-xl">
                  Learn more{" "}
                  <Image
                    src="/icons/arrow-right.svg"
                    alt="arrow-right"
                    width={24}
                    height={24}
                    className="ml-2"
                  />
                </div>
            </Link>
              </div>
          ))}
         
        </div>
      </div>
    </div>
  );
}
