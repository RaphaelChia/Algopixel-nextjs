// export default function ScrollUp() {
//   return (
//     <div id="scroll" className="scroll-up position-relative z-index11">
//       <div className="top text-center">
//         <span className="white-color theme-bg">
//           <i className="fa fa-arrow-alt-up"></i>
//         </span>
//       </div>
//     </div>
//   );
// }

// components/ScrollToTopButton.js

'use client';

import { useEffect, useState } from 'react';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a scroll event listener to track when the user scrolls
    const handleScroll = () => {
      // Show the button when the user scrolls down
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    // Smooth scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-full ${
        isVisible ? 'visible' : 'invisible'
      }`}
      onClick={scrollToTop}
    >
      Scroll to Top
    </button>
  );
};