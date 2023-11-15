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
      <div className="mx-auto max-w-2xl py-20 px-4 sm:px-6 lg:max-w-7xl lg:px-8 text-center">
        <span className="text-purple font-bold">{description}</span>
        <h1 className="text-2xl sm:text-4xl font-semibold text-black">
          {page}
        </h1>
        <nav>
          <Link href="/" className="text-lightgrey">
            Home
          </Link>
          <Link href={link} className="text-lightgrey">
            /{page}
          </Link>
        </nav>
      </div>
    </div>
  );
}
