import Why from "@/components/About/why";
import WhyUs from "@/components/About/whyus";
import PagesBanner from "@/components/Banners/pagesbanner";
import Numbers from "@/components/Numbers";
import ImgRight from "@/components/Sections/ImgRight";

export default function Page() {
  return (
    <div>
      <PagesBanner link="/about" page="About" description="Know more" />
      <ImgRight
        subtitle="Learn more about us"
        title="Empower young minds through code, fostering innovation, and holistic growth"
        para="We are more than just a place to learn coding; we are a community of passionate educators and learners, united by a common vision of empowering the next generation with the skills they need to thrive in a digital world."
        para2="We aim to make coding accessible, engaging, and rewarding for learners of all ages. We believe that coding is not just about typing lines of text; it's about unlocking creativity, honing problem-solving abilities, and preparing individuals for the challenges and opportunities of the future."
        imgsrc="/icons-about/codingicon.svg"
        imgalt="Kid Coding Image"
      />
      {/* <Numbers /> */}
      <WhyUs/>
      {/* <Why /> */}
    </div>
  );
}
