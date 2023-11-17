import Image from "next/image";
import { CheckIcon } from "@heroicons/react/24/solid";

const contents = [
  {
    title: "Hands-On Learning",
    description:
      "We believe that the best way to learn coding is by doing. That's why our classes emphasize hands-on projects, real-world applications, and interactive learning.",
    features: [
      "Lacus eu mauris quisque tortor torquent",
      "Lorem ipsum dolor sit amet consectetur",
      "Lacus eu mauris quisque tortor torquent",
    ],
    image: "/icons-about/handson.svg",
    order: false,
  },
  {
    title: "Comprehensive Curriculum",
    description:
      "Our curriculum is thoughtfully designed to cater to both beginners and advanced learners. Whether a child is passionate about game development, web design, robotics, or data science, we provide the tools and guidance for them to delve deeper into their specific interests.",
    features: [
      "But I must explain to you how all this mistaken",
      "Voluptatum deleniti atque corrupti quos",
      "He endures pains to avoid worse pains",
    ],
    image: "/icons-about/comprehensive.svg",
    order: true,
  },
  {
    title: "Fostering a Growth Mindset",
    description:
      "Our instructors encourage children to embrace challenges, learn from failures, and continuously improve. This mindset not only applies to coding but also extends to all aspects of life, helping them become resilient, adaptable, and confident individuals.",
    features: [
      "Sed ut perspiciatis unde omnis iste natus",
      "Quis autem vel eum iure reprehenderit",
      "Consequuntur magni dolores eos qui ratione",
    ],
    image: "/icons-about/growthmindset.svg",
    order: false,
  },
];

export default function WhyUs() {
  return (
    <div className="bg-gradient-to-b from-[#F0F6FB] to-white-300" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-x-40 pt-16 pb-16">
        <h2 className="text-4xl font-bold text-center">Why Choose Algopixel?</h2>
        <p className="pt-6 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
        Algopixel is the place where your coding journey begins. We invite you to explore our courses, meet our passionate team, and discover the endless possibilities that coding can offer.
        </p>

        {contents.map((content) => (
          <div
            key={content.title}
            className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-28 items-center"
          >
            <div
              className={`pt-8 md:pt-16 ${
                content.order ? "order-1 md:order-2" : "order-1"
              }`}
            >
              <h1 className="text-2xl font-bold">{content.title}</h1>
              <p className="pt-6 pb-6 text-base dark:text-neutral-400">
                {content.description}
              </p>

              <ul className="font-medium space-y-1 flex-1">
                {content.features.map((feature) => (
                  <li key={feature} className="leading-6 flex">
                    <CheckIcon className="mt-2 w-3 h-3 text-rose-500 shrink-0" />
                    <span className="ml-3 dark:text-neutral-400">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`order-1 pt-8 md:pt-16 ${
                content.order ? "ml-0 2xl:-ml-40" : "mr-0 2xl:-mr-40"
              }`}
            >
              <div className="flex items-center">
                <Image
                  src={content.image}
                  alt="Image description"
                  width={1920}
                  height={1080}
                  quality={75}
                  sizes="100vw"
                  priority
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
