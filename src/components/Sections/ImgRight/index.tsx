import Image from "next/image";
import Link from "next/link";

export default function ImgRight({
  subtitle,
  title,
  para,
  imgsrc,
  imgalt,
}: {
  subtitle: string;
  title: string;
  para: string;
  imgsrc: string;
  imgalt: string;
}) {
  return (
    <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1">
        <div className="col-span-6 flex flex-col justify-center">
            <h5 className="text-purple font-bold">{subtitle}</h5>
          <h2 className="text-midnightblue text-4xl sm:text-5xl font-bold text-center lg:text-start lh-143">
            {title}
          </h2>
          <h3 className="text-black text-lg font-normal text-center lg:text-start lh-173 opacity-75 pt-3">
            {para}
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
          <Image
            src={imgsrc}
            alt={imgalt}
            width={1000}
            height={805}
          />
        </div>
      </div>
    </div>
  );
}
