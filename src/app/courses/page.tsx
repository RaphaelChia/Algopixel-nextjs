import PagesBanner from "@/components/Banners/pagesbanner";
import Courses from "@/components/Courses";
import NavBarDropdown from "@/components/Navbar/navbaritem";
import Programmes from "@/components/Programmes";

export default function Page() {
  return (
    <div>
      <PagesBanner link="/courses" page="Courses" description="Find our"/>
      <Programmes/>
      <Courses/>
    </div>
  );
}