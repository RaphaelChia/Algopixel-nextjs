import PagesBanner from "@/components/Banners/pagesbanner";
import { HolidayClasses } from "@/components/Courses/holidayclasses";
import WhyHoliday from "@/components/Courses/whyholidayclasses";

export default function Page(){
    return (
        <div>
        <PagesBanner link="/courses/holidayclasses" page="Holiday Classes" description=""/>
        <WhyHoliday/>
        <HolidayClasses/>

      </div>
    )
}