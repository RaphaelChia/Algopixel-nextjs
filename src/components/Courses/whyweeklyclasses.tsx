"use client";

import { CheckIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import Register from "../Navbar/Registerdialog";

export default function WhyWeekly() {
  return (
    // <div className="bg-gradient-to-b from-[#FFFFFF] to-[#F0F6FB]">
      <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1">
          <div className="col-span-6 flex flex-col justify-center pr-5">
            <h5 className="text-purple font-bold text-center lg:text-start text-lg">Unlock Consistent Growth with Our Weekly Classes!</h5>
            <h2 className="text-darkblue text-7xl md:text-4xl sm:text-3xl font-bold text-center lg:text-start lh-143 mt-2 leading-relaxed">
            Why Weekly Classes?
            </h2>
            <h3 className="text-black text-lg font-normal text-center lg:text-start lh-173 opacity-75 pt-4 leading-relaxed">
            At Algopixel, we understand the importance of steady and continuous learning. That&apos;s why we offer weekly classes designed to provide you with the most effective and transformative learning experience. Here&apos;s why enrolling in our weekly classes is the key to unlocking your full potential:
            </h3>
            <h3 className="text-black text-lg font-normal text-center lg:text-start lh-173 opacity-75 pt-4 leading-relaxed">
            </h3>
            <ul className="font-light text-base space-y-2 flex-1 mt-6 opacity-75">
                  <li className="leading-6 flex">
                    <CheckIcon className="w-5 h-5 shrink-0" />
                    <span className="ml-3 dark:text-neutral-400">
                    Consistent Skill Development
                    </span>
                  </li>
                  <li className="leading-6 flex">
                    <CheckIcon className="w-5 h-5 shrink-0" />
                    <span className="ml-3 dark:text-neutral-400">
                    Integrate Knowledge Into Memory
                    </span>
                  </li>
                  <li className="leading-6 flex">
                    <CheckIcon className="w-5 h-5 shrink-0" />
                    <span className="ml-3 dark:text-neutral-400">
                    Foster a Learning Routine
                    </span>
                  </li>
                  <li className="leading-6 flex">
                    <CheckIcon className="w-5 h-5 shrink-0" />
                    <span className="ml-3 dark:text-neutral-400">
                    Interactive and Collaborative Environment
                    </span>
                  </li>
                  <li className="leading-6 flex">
                    <CheckIcon className="w-5 h-5 shrink-0" />
                    <span className="ml-3 dark:text-neutral-400">
                    Personalized Progress Tracking
                    </span>
                  </li>
                  <li className="leading-6 flex py-8">
                <Register/>
                </li>
                </ul>
          </div>

          <div className="col-span-6 flex justify-center mt-10 lg:mt-0">
            <Image src="/icons/unlockpotential.svg" alt="coding image" width={1000} height={805} />
          </div>
        </div>
      </div>
    // </div>
  );
}
