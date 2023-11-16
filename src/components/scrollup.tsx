"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a scroll event listener to track when the user scrolls
    const handleScroll = () => {
      // Show the button when the user scrolls down
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    // Smooth scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-full p-6 opacity-95 ${
        isVisible ? "visible" : "invisible"
      }`}
      onClick={scrollToTop}
    >
      <Fade direction={"up"} cascade damping={1e-1} triggerOnce={true}>
        <Image
          src="/icons/uparrow.svg"
          alt="Scroll up button"
          height={45}
          width={45}
        ></Image>
      </Fade>
    </button>
  );
}
