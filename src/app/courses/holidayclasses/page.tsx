import PagesBanner from "@/components/Banners/pagesbanner";
import { HolidayClasses } from "@/components/Courses/holidayclasses";

export default function Page(){
    return (
        <div>
        <PagesBanner link="/courses/holidayclasses" page="Holiday Classes" description=""/>
        <HolidayClasses/>
      </div>
    )
}