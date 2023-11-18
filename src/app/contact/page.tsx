"use client";

import PagesBanner from "@/components/Banners/pagesbanner";
import Contact1 from "./contact";

export default function Page() {
  return (
    <div>
      <PagesBanner link="/contact" page="Contact" description="Find us" />
      <Contact1/>
    </div>
  );
}
