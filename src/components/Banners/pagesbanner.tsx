import Link from "next/link";
import React from "react";

export default function PagesBanner({
  link,
  page,
  description,
}: {
  link: string;
  page: string;
  description: string;
}) {
  return (
    <div className="bg-lightblue">
      <div className="mx-auto max-w-2xl px-4 py-28 sm:px-6 lg:max-w-7xl lg:px-8 text-center">
        <span className="text-purple font-bold">{description}</span>
        <h1 className="text-2xl sm:text-6xl font-bold text-gray-700 mt-[5px] mb-[38px]">
          {page}
        </h1>
        <nav>
          <Link href="/" className="text-darkblue opacity-70 hover:text-purple">
            {"Home "}
          </Link>
          <span className="text-darkblue opacity-85">/ </span> 
          <Link href={link} className="text-darkblue opacity-70">{page}
          </Link>
        </nav>
      </div>
    </div>
  );
}
