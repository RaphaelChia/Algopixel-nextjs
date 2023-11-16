"use client";

import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Image from "next/image";
import algopixelLogo from "../../../public/algopixel/algopixel_logo.png";
import Socials from "../Social/social";
import NavBarDropdown from "./navbaritem";

import Register from "./Registerdialog";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
  children?: string[];
}

const navigation: NavigationItem[] = [
  { name: "Home", href: "/", current: false },
  { name: "About", href: "/about", current: false },
  { name: "Courses", href: "/courses", current: false, children: ["Holiday programme 1", "Holiday programme 2"] },
  { name: "Structure", href: "/structure", current: false },
  { name: "Contact", href: "/contact", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled down
      setIsScrolled(window.scrollY > 0);
    };

    // Attach the event listener to the window scroll event
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Disclosure
      as="nav"
      className={`text-white p-4 w-full sticky top-0 transition-all bg-lightblue z-50 ${isScrolled ? "shadow-md h-[80px]" : "h-[112px] shadow-none"
        }`}
    >
      <>
        <div className="mx-auto max-w-7xl p-2 md:p-4 lg:px-6 h-full">
          <div className="relative flex h-full items-center">
            <div className="flex flex-1 items-center sm:justify-between">
              {/* LOGO */}

              <div className="flex sm:hidden flex-shrink-0 items-center border-right">
                <Link
                  href="/"
                  className="text-2xl font-semibold text-black ml-4"
                >
                  <Image src={algopixelLogo} alt="logo" height={36} />
                </Link>
              </div>
              <div className="hidden sm:flex flex-shrink-0 items-center border-right">
                <Link
                  href="/"
                  className="text-2xl font-semibold text-darkgrey ml-4"
                >
                  <Image src={algopixelLogo} alt="logo" height={36} />
                </Link>
              </div>

              {/* LINKS */}

              <div className="hidden lg:flex items-center border-right ">
                <div className="flex justify-end space-x-4">
                  {navigation.map((item) => (
                    <div>

                      {item.children && item.children.length > 0 ? (
                        <NavBarDropdown trigger={
                          <Link
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-black"
                                : "navlinks hover:opacity-100",
                              "px-3 py-4 rounded-md text-lg font-bold hover:text-purple space-links text-darkblue"
                            )}
                            aria-current={item.href ? "page" : undefined}
                          >
                            {item.name}
                          </Link>
                        } />
                      ) : (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-black"
                              : "navlinks hover:opacity-100",
                            "px-3 py-4 rounded-md text-lg font-bold hover:text-purple space-links text-darkblue flex items-center justify-center"
                          )}
                          aria-current={item.href ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="gap-6 hidden lg:flex">
                {/* <Link href="/signup">
                  <button className="bg-purple flex justify-center text-white w-full font-semibold rounded-full border border-purple py-3 px-4 lg:px-8 navbutton hover:bg-white hover:text-purple">
                    Sign Up
                  </button>
                </Link> */}
                <Register/>
              </div>
            </div>

            {/* DRAWER FOR MOBILE VIEW */}

            {/* DRAWER ICON */}

            {/* Hamburger icon */}
            <div className="block lg:hidden">
              <Bars3Icon
                className="block h-6 w-6 stroke-purple"
                aria-hidden="true"
                strokeWidth={2}
                onClick={() => setIsOpen(true)}
              />
            </div>

            {/* DRAWER LINKS DATA */}

            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <div className="px-5 font-semibold">
                <Drawerdata />
              </div>
              <div className="space-y-1 px-5 pt-2 pb-3">
              <Register/>
                {/* <Link href="/signup">
                  <button className="bg-purple flex justify-center text-white w-full font-semibold rounded-full border border-purple py-3 px-4 lg:px-8 navbutton hover:bg-white hover:text-purple">
                    Register
                  </button>
                </Link> */}
                <div className="mt-2 p-2"></div>
                <div className="flex align-center">
                  <Socials />
                </div>
              </div>
            </Drawer>
          </div>
        </div>
      </>
    </Disclosure>
  );
};

export default Navbar;
