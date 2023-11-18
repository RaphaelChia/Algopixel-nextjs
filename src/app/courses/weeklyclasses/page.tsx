import PagesBanner from "@/components/Banners/pagesbanner";
import WhyWeekly from "@/components/Courses/whyweeklyclasses";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <PagesBanner
        link="/courses/weeklyclasses"
        page="Weekly Classes"
        description=""
      />
      <WhyWeekly />
      <div className="grid justify-items-center bg-gradient-to-b from-[#F0F6FB] to-[#FFFFFF] p-10 gap-10 mb-10">
      <Image src="/weeklyclasses/schedule.png" alt="Schedule Image" width={1000} height={1000}></Image>
      <Image src="/weeklyclasses/pricing.png"  alt="Pricing Image" width={1000} height={1000}></Image>
    </div>
    </div>
  );
}
