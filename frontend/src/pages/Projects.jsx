import { useTranslation } from "react-i18next";

import Project1 from "../assets/Stone&Projects/villa1.jpg";
import Project2 from "../assets/Stone&Projects/villa2.png";
import Project3 from "../assets/Stone&Projects/villa3.jpg";
import Project4 from "../assets/Stone&Projects/villa4.jpg";
import Project5 from "../assets/Stone&Projects/villa5.jpg";
import Project6 from "../assets/Stone&Projects/villa6.jpg";
import Project7 from "../assets/Stone&Projects/villa7.jpg";
import Project8 from "../assets/Stone&Projects/villa8.png";
import Hero from "../assets/OurProjects-Hero.jpg";

const DecorBlock = ({ side = "right" }) => {
  if (side === "both") {
    return (
      <>
        <div
          className="hidden md:block absolute -left-16 -bottom-16 w-1/2 h-2/3 bg-[#e5e4e0] -z-10"
          aria-hidden="true"
        />
        <div
          className="hidden md:block absolute -right-16 -top-10 w-1/2 h-2/3 bg-[#e5e4e0] -z-10"
          aria-hidden="true"
        />
      </>
    );
  }

  return (
    <div
      className={`hidden md:block absolute -z-10 w-[60%] h-[60%] bg-[#e5e4e0] ${
        side === "right" ? "-right-16 -bottom-16" : "-left-16 -bottom-16"
      }`}
      aria-hidden="true"
    />
  );
};

const FullImage = ({ src, alt, decorSide }) => (
  <div className="relative z-0">
    {decorSide && <DecorBlock side={decorSide} />}
    <img
      src={src}
      alt={alt}
      className="relative z-10 w-full h-full object-cover"
    />
  </div>
);

export default function Projects() {
  const { t } = useTranslation();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[480px] sm:h-[560px] md:h-[620px] overflow-hidden">
        <img
          src={Hero}
          alt="Cedar Stone completed projects background"
          className="absolute inset-0 w-full h-full object-cover object-[37%_90%]"
        />

        {/* Dynamic Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-stone-900/20 to-transparent" />

        <div className="relative h-full max-w-7xl mx-auto px-5 sm:px-8 flex items-end pb-12 sm:pb-16">
          <div className="max-w-xl ltr:max-w-2xl md:ltr:max-w-3xl">
            <h1 className="font-['Garamond',_'EB_Garamond',_serif] rtl:font-['Alexandria',_sans-serif] text-3xl sm:text-5xl md:text-6xl text-white leading-[1.1] md:leading-[1.05]">
              {t("projects.heroTitle")}
            </h1>
            <p className="font-['Century_Gothic',_Futura,_sans-serif] text-stone-100/90 mt-4 sm:mt-5 text-xs sm:text-sm md:text-base leading-relaxed">
              {t("projects.heroSubtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="w-full bg-white py-16 sm:py-24 px-6 md:px-12 overflow-hidden">
        <h2 className="font-['Garamond',serif] rtl:font-['Alexandria',sans-serif] text-2xl sm:text-3xl text-stone-900 uppercase tracking-widest font-normal text-center mb-16">
          {t("projects.featuredTitle")}
        </h2>

        <div className="max-w-5xl mx-auto flex flex-col gap-10 sm:gap-14">
          <FullImage
            src={Project1}
            alt={t("projects.gallery.project1")}
            decorSide="both"
          />
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <img
              src={Project2}
              alt={t("projects.gallery.project2")}
              className="w-full h-full object-cover"
            />
            <img
              src={Project3}
              alt={t("projects.gallery.project3")}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10">
            <FullImage src={Project4} alt={t("projects.gallery.project4")} />
          </div>

          <div className="relative z-10">
            <FullImage src={Project8} alt={t("projects.gallery.project8")} />
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <img
              src={Project5}
              alt={t("projects.gallery.project5")}
              className="w-full h-full object-cover"
            />
            <img
              src={Project6}
              alt={t("projects.gallery.project6")}
              className="w-full h-full object-cover"
            />
          </div>
          <FullImage
            src={Project7}
            alt={t("projects.gallery.project7")}
            decorSide="right"
          />
        </div>
      </section>
    </div>
  );
}
