"use client";

import { CheckIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import Register from "../Navbar/Registerdialog";

export default function WhyHoliday() {
  return (
    // <div className="bg-gradient-to-b from-[#FFFFFF] to-[#F0F6FB]">
      <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1">
          <div className="col-span-6 flex flex-col justify-center pr-5">
            <h5 className="text-purple font-bold text-center lg:text-start text-lg">Unleash Your Potential with Our Holiday Classes!</h5>
            <h2 className="text-darkblue text-7xl md:text-4xl sm:text-3xl font-bold text-center lg:text-start lh-143 mt-2 leading-relaxed">
            Why Holiday Classes?
            </h2>
            <h3 className="text-black text-lg font-normal text-center lg:text-start lh-173 opacity-75 pt-4 leading-relaxed">
            This holiday season, embark on a journey of creativity, innovation, and skill-building with our exclusive one-day holiday classes. At Algopixel, we believe that holidays are the perfect time not just for relaxation but for exploration and personal growth. Here&apos;s why you should seize the opportunity and sign up for our holiday classes:
            </h3>
            <h3 className="text-black text-lg font-normal text-center lg:text-start lh-173 opacity-75 pt-4 leading-relaxed">
            </h3>
            <ul className="font-light text-base space-y-2 flex-1 mt-6 opacity-75">
                  <li className="leading-6 flex">
                    <CheckIcon className="w-5 h-5 shrink-0" />
                    <span className="ml-3 dark:text-neutral-400">
                    Unlock New Skills in Just One Day
                    </span>
                  </li>
                  <li className="leading-6 flex">
                    <CheckIcon className="w-5 h-5 shrink-0" />
                    <span className="ml-3 dark:text-neutral-400">
                    Comprehensive Learning Experience
                    </span>
                  </li>
                  <li className="leading-6 flex">
                    <CheckIcon className="w-5 h-5 shrink-0" />
                    <span className="ml-3 dark:text-neutral-400">
                    Discover a Range of Topics
                    </span>
                  </li>
                  <li className="leading-6 flex">
                    <CheckIcon className="w-5 h-5 shrink-0" />
                    <span className="ml-3 dark:text-neutral-400">
                    Holiday Fun Meets Skill Development
                    </span>
                  </li>
                  <li className="leading-6 flex py-8">
                <Register/>
                </li>
                </ul>
          </div>

          <div className="col-span-6 flex justify-center mt-10 lg:mt-0">
            <Image src="/icons/holidayschedule.svg" alt="coding image" width={1000} height={805} />
          </div>
        </div>
      </div>
    // </div>
  );
}
