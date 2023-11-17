import Image from "next/image";
import Link from "next/link";

export default function ImgRight({
  subtitle,
  title,
  para,
  para2,
  imgsrc,
  imgalt,
}: {
  subtitle: string;
  title: string;
  para: string;
  para2: string;
  imgsrc: string;
  imgalt: string;
}) {
  return (
    // <div className="bg-gradient-to-b from-[#FFFFFF] to-[#F0F6FB]">
      <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1">
          <div className="col-span-6 flex flex-col justify-center">
            <h5 className="text-purple font-bold text-center lg:text-start text-lg">{subtitle}</h5>
            <h2 className="text-darkblue text-7xl md:text-4xl sm:text-3xl font-bold text-center lg:text-start lh-143 mt-2 leading-relaxed">
              {title}
            </h2>
            <h3 className="text-black text-lg font-normal text-center lg:text-start lh-173 opacity-75 pt-4 leading-relaxed">
              {para}
            </h3>
            <h3 className="text-black text-lg font-normal text-center lg:text-start lh-173 opacity-75 pt-4 leading-relaxed">
              {para2}
            </h3>
            {/* <Link
            href={"/"}
            className="text-electricblue text-lg font-medium flex gap-2 pt-4 mx-auto lg:mx-0"
          >
            Learn more{" "}
            <Image
              src="/assets/people/arrow-right.svg"
              alt="arrow-right"
              width={24}
              height={24}
            />
          </Link> */}
          </div>

          <div className="col-span-6 flex justify-center mt-10 lg:mt-0">
            <Image src={imgsrc} alt={imgalt} width={1000} height={805} />
          </div>
        </div>
      </div>
    // </div>
  );
}
