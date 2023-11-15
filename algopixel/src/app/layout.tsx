import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Poppins } from 'next/font/google'
import "./globals.css";
import NavBarItem from "@/components/Others/navbaritem";
// import NavbarWithMegaMenu from "@/components/navbar";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/footer";
import ScrollToTopButton from "@/components/Others/scrollup";
import Alert from "@/components/alert";

// const inter = Inter({ subsets: ["latin"] });
// const poppins = Poppins({ weight: "700" ,subsets: ["latin"]});


export const metadata: Metadata = {
  title: "Algopixel Coding",
  description: "Learn programming languages, develop problem-solving skills, and create innovative solutions.",
  keywords: 'coding for kids, programming for children, coding courses, children\'s coding school, tech education, programming, STEM education, Python, Scratch',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body>
        <Navbar />
        <Alert/>
        {/* <div className="mt-1"></div> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
