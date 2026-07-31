import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Layers,
  BadgeCheck,
  Package,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { TbUserStar } from "react-icons/tb";
import Swatch from "../components/Swatch";
import StoneImageCycler from "../components/StoneImageCycler";
import { stoneTypes, featuredStones } from "../data/stoneTypes";
import { projects } from "../data/projects";
import heroImage from "../assets/Landing-Hero.jpg";

import { TextGenerateEffect } from "../components/TextGenerateEffect";

// Project images (used as fallback for projects without images)
import project1Img from "../assets/villas/Villa1.jpg";
import project2Img from "../assets/villas/Villa2.jpg";
import project3Img from "../assets/villas/Villa3.jpg";

// Why Choose Cedar Stone images
import qualityPic from "../assets/Landing-Icons/quality.svg";
import servicePic from "../assets/Landing-Icons/service.svg";
import tailoredPic from "../assets/Landing-Icons/tailored.svg";
import deliveryPic from "../assets/Landing-Icons/delivery.svg";

import LandingAbout from "../assets/CedarStoneLanding.jpg";
import Stone from "../assets/UnderCedarLanding.jpg";

// Why Choose Cedar Stone images mapping
const whyPictures = {
  quality: qualityPic,
  service: servicePic,
  tailored: tailoredPic,
  delivery: deliveryPic,
};

// Stats icons
const stats = [
  { icon: TbUserStar, key: "experience" },
  { icon: Layers, key: "natural" },
  { icon: BadgeCheck, key: "projects" },
  { icon: Package, key: "custom" },
];

const DEFAULT_SLOTS = { 0: "left", 1: "center", 2: "right" };

const MotionLink = motion(Link);

function useLeftPct(slot) {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024,
  );

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  if (slot === "center") return 50;
  if (width >= 768) return slot === "left" ? 22 : 78;
  return slot === "left" ? 15 : 85;
}

function ProjectCard({ p, idx, slot, onHover }) {
  const leftPct = useLeftPct(slot);
  const isActive = slot === "center";

  return (
    <MotionLink
      to="/projects"
      onMouseEnter={() => onHover(idx)}
      aria-label={p.title}
      layout
      animate={{
        scale: isActive ? 1.12 : 0.88,
        filter: isActive ? "brightness(1)" : "brightness(0.7)",
        opacity: 1,
      }}
      transition={{
        duration: 1.2,
        ease: [0.32, 0.72, 0, 1],
      }}
      style={{ left: `${leftPct}%`, x: "-50%", zIndex: isActive ? 30 : 10 }}
      className={`
        absolute top-10 md:top-12
        w-[80%] sm:w-[60%] md:w-[50%] h-[320px] md:h-[420px]
        overflow-hidden
        cursor-pointer transform-gpu will-change-transform
        transition-shadow duration-500
      `}
    >
      {p.image ? (
        <img
          src={p.image}
          alt={p.title}
          className="absolute inset-0 w-full h-full object-contain z-0 pointer-events-none"
        />
      ) : (
        <div
          className={`absolute inset-0 bg-gradient-to-tr ${p.swatch} pointer-events-none`}
        />
      )}
    </MotionLink>
  );
}

export default function Home() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";
  const Arrow = i18n.dir() === "rtl" ? ArrowLeft : ArrowRight;
  const projectImages = [project1Img, project2Img, project3Img];

  const heroProjects = projects.slice(0, 3).map((project, idx) => ({
    ...project,
    image: project.image || projectImages[idx],
  }));
  const [slots, setSlots] = useState(DEFAULT_SLOTS);

  const handleHover = (idx) => {
    setSlots((prev) => {
      if (prev[idx] === "center") return prev;
      const centerIdx = Object.keys(prev).find((k) => prev[k] === "center");
      if (centerIdx === undefined) return prev;

      const next = { ...prev };
      next[centerIdx] = prev[idx];
      next[idx] = "center";
      return next;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSlots((prev) => {
        return {
          0: prev[2],
          1: prev[0],
          2: prev[1],
        };
      });
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[480px] sm:h-[560px] md:h-[620px] overflow-hidden">
        <img
          src={heroImage}
          alt="Stone tiles hero background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-stone-900/20 to-transparent" />
        <div className="relative h-full max-w-7xl mx-auto px-5 sm:px-8 flex items-end pb-12 sm:pb-16">
          <div className="max-w-xl">
            <h1 className="font-['Garamond',_'EB_Garamond',_serif] rtl:font-['Alexandria',_sans-serif] text-3xl sm:text-5xl md:text-6xl text-white leading-[1.1] md:leading-[1.05]">
              {t("home.heroTitle")}
            </h1>
            <p className="font-['Century_Gothic',_Futura,_sans-serif] text-stone-100/90 mt-4 sm:mt-5 text-xs sm:text-sm md:text-base leading-relaxed">
              {t("home.heroSubtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 divide-stone-200/60">
          {stats.map(({ icon: Icon, key }) => (
            <div
              key={key}
              className="text-center px-4 py-6 md:py-2 flex flex-col items-center justify-center border-stone-200/60 md:border-r rtl:md:border-r-0 rtl:md:border-l md:last:border-r-0 rtl:md:last:border-l-0"
            >
              <Icon
                className="mx-auto mb-3 text-[#A89262] w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14"
                strokeWidth={1.3}
              />
              <div className="font-display text-2xl sm:text-3xl md:text-3xl px-1 text-stone-900 leading-tight">
                {t(`home.statsLabels.${key}`)}
              </div>
              <div className="text-xs text-stone-500 mt-1.5 tracking-wide max-w-[140px] sm:max-w-none">
                {t(`home.stats.${key}`)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="py-8 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-center sm:justify-between mb-1 sm:mb-12">
            <h2 className="font-display text-xl sm:text-3xl md:text-4xl text-stone-900 tracking-widest uppercase text-center sm:text-left">
              {t("home.projectsTitle")}
            </h2>
            {/* Visible ONLY on desktop/tablet (md and larger) */}
            <Link
              to="/projects"
              className="hidden md:flex items-center gap-1.5 text-xs sm:text-sm font-medium text-stone-900 hover:opacity-75 transition-opacity"
            >
              {t("home.viewAllProjects")} <Arrow size={16} />
            </Link>
          </div>

          <div className="-mt-2 sm:mt-0 relative h-[300px] sm:h-[380px] md:h-[500px] w-full max-w-5xl mx-auto flex items-center justify-center">
            {heroProjects.map((p, idx) => (
              <ProjectCard
                key={p.id || idx}
                p={p}
                idx={idx}
                slot={slots[idx]}
              />
            ))}
          </div>

          <div className="mt-8 flex justify-center md:hidden z-40 relative">
            <Link
              to="/projects"
              className="flex items-center gap-1.5 text-xs font-medium text-stone-900 hover:opacity-75 transition-opacity"
            >
              {t("home.viewAllProjects")} <Arrow size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Stone Collection */}
      <section className="bg-white py-6 sm:py-16 md:py-20 pb-12 sm:pb-24">
        <div className="max-w-7xl mx-auto px-3 sm:px-8">
          <div className="bg-[#E5E2DC] p-3 sm:p-8 md:p-12 rounded-none shadow-sm pb-6 sm:pb-12">
            <div className="flex items-center justify-center sm:justify-between mb-4 sm:mb-12">
              <h2 className="font-display text-lg sm:text-2xl md:text-3xl text-stone-900 tracking-widest uppercase text-center sm:text-left">
                {t("home.collectionTitle")}
              </h2>
              <Link
                to="/stone-types"
                className="hidden sm:flex items-center gap-2 text-xs sm:text-sm font-medium text-stone-900 hover:opacity-75 transition-opacity"
              >
                {t("home.viewAll")} <Arrow size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 justify-items-center">
              {featuredStones.map((key, idx) => {
                const stone = stoneTypes.find((s) => s.key === key);
                const stoneName = t(`stoneTypes.stones.${key}.name`);

                return (
                  <div
                    key={key}
                    className="bg-white rounded-xl shadow-md sm:shadow-lg shadow-stone-900/20 overflow-hidden flex flex-col justify-between w-full max-w-[260px] sm:max-w-none mx-auto"
                  >
                    {stone?.images && stone.images.length > 0 ? (
                      <StoneImageCycler
                        images={stone.images}
                        alt={stoneName}
                        intervalMs={3000}
                        delayMs={idx * 1000}
                        className="h-44 sm:h-56 md:h-64 w-full"
                      />
                    ) : (
                      <Swatch
                        gradient={stone?.swatch}
                        className="h-44 sm:h-56 md:h-64 rounded-none"
                        label={stoneName}
                      />
                    )}

                    <div className="p-4 sm:p-6 md:p-8 flex-1 flex flex-col items-center text-center">
                      <h3 className="font-['Garamond',_'EB_Garamond',_serif] rtl:font-['Alexandria',sans-serif] font-bold text-base sm:text-xl md:text-xl text-stone-900 mb-1.5 sm:mb-3">
                        {stoneName}
                      </h3>
                      <p className="text-xs sm:text-xs md:text-sm text-stone-600 leading-relaxed max-w-[220px] sm:max-w-[260px]">
                        {t(`stoneTypes.stones.${key}.body`)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 flex sm:hidden justify-center">
              <Link
                to="/stone-types"
                className="flex items-center gap-2 text-xs font-semibold text-stone-900 hover:opacity-75 px-4 py-2"
              >
                {t("home.viewAll")} <Arrow size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Cedar Stone */}
      <section className="bg-[#E5E2DC] py-8 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <h2 className="font-display text-lg sm:text-2xl md:text-3xl text-[#333333] tracking-widest uppercase mb-6 sm:mb-12 text-center sm:text-left">
            {t("home.whyTitle")}
            <span className="text-[#87775A] font-semibold ml-1">
              {t("home.whyTitleHighlight")}
            </span>
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {["quality", "service", "tailored", "delivery"].map((key) => {
              const titleText = t(`home.why.${key}.title`);

              const formattedTitle = titleText.includes("Cedar Stone")
                ? titleText
                    .split("Cedar Stone")
                    .reduce((acc, current, index, array) => {
                      acc.push(current);
                      if (index < array.length - 1) {
                        acc.push(
                          <span
                            key={index}
                            className="font-black text-stone-950"
                          >
                            Cedar Stone
                          </span>,
                        );
                      }
                      return acc;
                    }, [])
                : titleText;

              return (
                <div
                  key={key}
                  className="bg-[#F8F7F5] px-3 py-4 sm:p-8 md:p-10 flex flex-col items-center justify-start text-center shadow-sm rounded-sm sm:rounded-none"
                >
                  <div
                    className={`mb-2 sm:mb-6 flex items-center justify-center ${
                      key === "delivery"
                        ? "h-24 w-24 sm:h-20 sm:w-20 md:h-24 md:w-24"
                        : "h-20 w-20 sm:h-16 sm:w-16 md:h-20 md:w-20"
                    }`}
                  >
                    <img
                      src={whyPictures[key]}
                      alt={titleText}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  <h3
                    className="font-['Garamond',_'EB_Garamond',_serif] rtl:font-['Alexandria',sans-serif]
                  font-bold text-sm sm:text-xl md:text-xl text-stone-900 mb-1 sm:mb-3 leading-tight"
                  >
                    {formattedTitle}
                  </h3>

                  <p className="text-[11px] sm:text-xs md:text-sm text-stone-600 leading-normal sm:leading-relaxed max-w-[160px] sm:max-w-[220px]">
                    {t(`home.why.${key}.body`)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="h-8 sm:h-12 md:h-16 bg-white w-full" />

      {/* About Preview Section */}
      <section className="bg-[#F8F7F5] w-full overflow-hidden">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 items-stretch">
          <div className="py-10 sm:py-12 md:py-16 px-6 sm:px-12 lg:px-20 flex flex-col justify-center items-start">
            <h2 className="font-['Garamond',_'EB_Garamond',_serif] rtl:font-['Alexandria',_sans-serif] text-xl sm:text-3xl lg:text-4xl text-stone-900 uppercase tracking-widest mb-4">
              {t("home.aboutTitle")}
              <span className="text-[#87775A] ml-1">
                {t("home.aboutTitleHighlight")}
              </span>
            </h2>

            <h3 className="font-['Century_Gothic',_Futura,_sans-serif] text-xs sm:text-sm md:text-base text-stone-800 mb-4 sm:mb-6">
              {t("home.aboutSubtitle")}
            </h3>

            <p className="font-['Century_Gothic',_Futura,_sans-serif] text-xs sm:text-sm text-stone-700 leading-relaxed whitespace-pre-line mb-6 sm:mb-8 max-w-xl">
              {t("home.aboutBody")}
            </p>

            <Link
              to="/about"
              className="inline-block w-full max-w-xs sm:w-auto border border-stone-900 text-stone-900 text-xs font-semibold sm:text-sm tracking-wide px-8 sm:px-12 md:px-16 py-3.5 rounded-full hover:bg-stone-900 hover:text-white transition-all duration-300 text-center"
            >
              {t("home.readStory")}
            </Link>
          </div>

          <div className="w-full h-full min-h-[300px] sm:min-h-[400px] md:min-h-[550px]">
            <img
              src={LandingAbout}
              alt="Cedar Stone Factory"
              className="w-full h-full object-cover object-center block"
            />
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <div className="w-full bg-[#59544F] flex flex-col md:flex-row items-stretch overflow-hidden">
        <div
          className={`w-full md:w-1/4 lg:w-3/12 shrink-0 self-stretch ${isRTL ? "order-2" : "order-1"}`}
        >
          <img
            src={Stone}
            alt="Stone craft"
            className="w-full h-full object-cover block"
          />
        </div>

        <div
          className={`w-full md:w-3/4 lg:w-9/12 px-8 sm:px-12 md:px-16 py-8 md:py-12 flex flex-col ${
            isRTL ? "flex-col-reverse" : ""
          } lg:flex-row ${
            isRTL ? "lg:flex-row-reverse" : ""
          } items-center justify-between gap-6 sm:gap-8 my-auto ${isRTL ? "order-1" : "order-2"}`}
        >
          <p
            className={`text-[#F8F7F5] italic text-xl sm:text-2xl lg:text-3xl max-w-3xl leading-snug text-center lg:text-left ${
              isRTL
                ? "font-['Tajawal',_sans-serif] not-italic leading-normal text-right lg:text-right"
                : "font-['Garamond',_'EB_Garamond',_serif]"
            }`}
          >
            <TextGenerateEffect words={t("home.ctaBanner")} />
          </p>

          {/* CTA Button */}
          <Link
            to="/request-quote"
            className={`bg-[#F8F7F5] text-stone-900 text-sm sm:text-base px-8 py-4 rounded-full whitespace-nowrap hover:bg-stone-900 hover:text-white transition-colors duration-300 shadow-md flex-shrink-0 ${
              isRTL
                ? "font-['Tajawal',_sans-serif] font-bold"
                : "font-['Century_Gothic',_Futura,_sans-serif] font-medium"
            }`}
          >
            {t("home.exploreServices")}
          </Link>
        </div>
      </div>
    </div>
  );
}
