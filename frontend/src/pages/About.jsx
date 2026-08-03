import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  ShieldCheck,
  Scale,
  Lightbulb,
  Heart,
  Home as HomeIcon,
  HardHat,
  Building2,
  PenTool,
  Hotel,
  Building,
} from "lucide-react";
import Swatch from "../components/Swatch";
const valueIcons = {
  precision: ShieldCheck,
  integrity: Scale,
  innovation: Lightbulb,
  satisfaction: Heart,
};

import Hero from "../assets/AboutUs-Hero&Legacy/hero.png";
import DesktopHero from "../assets/AboutUs-Hero&Legacy/AboutUsHero.jpg";

import LegacyStoneImg from "../assets/AboutUs-Hero&Legacy/AboutUsStone.jpg";
import MissionImg from "../assets/Mission&Vission/aboutus_mission.jpg";
import VisionImg from "../assets/Mission&Vission/aboutus_vision.jpg";

import PrecisionIcon from "../assets/AboutUs-OurValues/precision.svg";
import IntegrityIcon from "../assets/AboutUs-OurValues/integrity.svg";
import InnovationIcon from "../assets/AboutUs-OurValues/innovation.svg";
import CustomerIcon from "../assets/AboutUs-OurValues/satisfaction.svg";

import HomeownersIcon from "../assets/AboutUs-Industries/homeowners.svg";
import ContractorsIcon from "../assets/AboutUs-Industries/contractors.svg";
import RealEstateIcon from "../assets/AboutUs-Industries/real-estate.svg";
import InteriorDesignersIcon from "../assets/AboutUs-Industries/interior-designers.svg";
import HospitalityIcon from "../assets/AboutUs-Industries/hospitality-projects.svg";
import CommercialIcon from "../assets/AboutUs-Industries/commercial.svg";

import ProcessStep1 from "../assets/steps/step1.png";
import ProcessStep2 from "../assets/steps/step2.png";
import ProcessStep3 from "../assets/steps/step3.png";
import ProcessStep4 from "../assets/steps/step4.png";
import ProcessStep5 from "../assets/steps/step5.png";

const processImages = [
  ProcessStep1,
  ProcessStep2,
  ProcessStep3,
  ProcessStep4,
  ProcessStep5,
];

import VillaFacadesIcon from "../assets/AboutUs-Application/villa-facades.svg";
import ResidentialDevelopmentsIcon from "../assets/AboutUs-Application/residential-developments.svg";
import CommercialBuildingsIcon from "../assets/AboutUs-Application/commercial-buildings.svg";
import HospitalityHotelIcon from "../assets/AboutUs-Application/hospitality-hotel.svg";
import OutdoorFlooringIcon from "../assets/AboutUs-Application/outdoor-flooring.svg";
import AntiqueHeritageIcon from "../assets/AboutUs-Application/antique-heritage.svg";
import InteriorDecorIcon from "../assets/AboutUs-Application/interior-decor.svg";
import StoneTextureBg from "../assets/gemini.jpg";

const applicationsData = [
  { key: "villaFacades", icon: VillaFacadesIcon },
  { key: "residentialDevelopments", icon: ResidentialDevelopmentsIcon },
  { key: "commercialBuildings", icon: CommercialBuildingsIcon },
  { key: "hospitalityHotel", icon: HospitalityHotelIcon },
  { key: "outdoorFlooring", icon: OutdoorFlooringIcon },
  { key: "antiqueHeritage", icon: AntiqueHeritageIcon },
  { key: "interiorDecor", icon: InteriorDecorIcon },
];

const industriesData = [
  { key: "homeowners", icon: HomeownersIcon, label: "Homeowners" },
  { key: "contractors", icon: ContractorsIcon, label: "Contractors" },
  { key: "realEstate", icon: RealEstateIcon, label: "Real Estate Developers" },
  {
    key: "interiorDesigners",
    icon: InteriorDesignersIcon,
    label: "Interior Designers",
  },
  { key: "hospitality", icon: HospitalityIcon, label: "Hospitality Projects" },
  { key: "commercial", icon: CommercialIcon, label: "Commercial Projects" },
];

const valuesData = [
  {
    key: "precision",
    icon: PrecisionIcon,
  },
  {
    key: "integrity",
    icon: IntegrityIcon,
  },
  {
    key: "innovation",
    icon: InnovationIcon,
  },
  {
    key: "satisfaction",
    icon: CustomerIcon,
  },
];

const industryIcons = [HomeIcon, HardHat, Building2, PenTool, Hotel, Building];

function useDeviceReveal(threshold = 0.35) {
  const ref = useRef(null);
  const [isTouchDevice] = useState(
    () =>
      typeof window !== "undefined" &&
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches,
  );
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    if (!isTouchDevice) return;

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(node);
        }
      },
      { threshold, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [isTouchDevice, threshold]);

  return { ref, isRevealed, isTouchDevice };
}

function IndustryCard({ item, index, t }) {
  const { ref, isRevealed, isTouchDevice } = useDeviceReveal();
  const descriptionText = t(`about.industryDescriptions.${item.key}`) || "";

  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    if (!isTouchDevice) return;

    let interval;
    let timeout;

    if (isRevealed) {
      const fullText = descriptionText;
      let i = 0;

      timeout = setTimeout(() => {
        interval = setInterval(() => {
          i++;
          setTypedText(fullText.slice(0, i));

          if (i >= fullText.length) {
            clearInterval(interval);
          }
        }, 18);
      }, 1100);
    } else {
      setTypedText("");
    }

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [isRevealed, isTouchDevice, descriptionText]);

  return (
    <div
      ref={ref}
      className="group relative w-full aspect-square sm:aspect-auto sm:h-[240px] cursor-pointer"
      style={{ perspective: "1000px" }}
    >
      {isTouchDevice ? (
        /* Mobile 3D Card Container */
        <div
          className="relative w-full min-h-[220px] h-auto"
          style={{
            transformStyle: "preserve-3d",
            transform: isRevealed ? "rotateY(180deg)" : "rotateY(0deg)",
            transition: "transform 800ms cubic-bezier(0.22, 1, 0.36, 1)",
            transitionDelay: isRevealed ? "250ms" : "0ms",
          }}
        >
          {/* Card Front */}
          <div
            className="absolute inset-0 w-full h-full bg-[#faf9f6] border border-stone-200/80 p-3 flex flex-col items-center rounded-lg"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <div className="w-full h-20 flex items-center justify-center grayscale opacity-80 mt-2">
              <img
                src={item.icon}
                alt={item.label}
                className="w-16 h-10 object-contain"
              />
            </div>

            <div className="flex-1" />

            <div className="w-full h-10 flex items-center justify-center mb-2">
              <span className="font-['Century_Gothic',sans-serif] font-medium text-[10px] sm:text-xs tracking-[0.15em] uppercase text-[#8c7a6b] text-center line-clamp-2 px-1">
                {t(`about.industries.${index}`)}
              </span>
            </div>
          </div>

          <div
            className="absolute inset-0 w-full h-full bg-[#faf9f6] border border-[#8c7a6b]/50 p-3 flex flex-col items-center rounded-lg overflow-hidden shadow-xl"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div className="w-full h-10 flex items-center justify-center mt-1">
              <img
                src={item.icon}
                alt={item.label}
                className="w-10 h-8 object-contain"
              />
            </div>

            <div className="w-full h-6 flex items-center justify-center my-1">
              <span className="font-['Garamond'] text-[10px] sm:text-xs text-[#8c7a6b] text-center truncate">
                0{index + 1} — {t(`about.industries.${index}`)}
              </span>
            </div>

            <div className="w-full flex-1 flex items-start justify-center pt-1 overflow-hidden">
              <div className="font-['Century_Gothic',sans-serif] text-[9px] sm:text-[11px] text-stone-700 leading-relaxed font-normal text-center max-w-[95%] whitespace-pre-wrap">
                {typedText}
                {isRevealed && typedText.length < descriptionText.length && (
                  <span className="inline-block ml-[1px] animate-pulse text-[#8c7a6b]">
                    |
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Desktop Card (Hover Overlay) */
        <div className="relative w-full h-full bg-[#faf9f6] border border-stone-200/80 p-4 sm:p-8 flex flex-col items-center justify-center text-center overflow-hidden transition-all duration-700 [cubic-bezier(0.16,1,0.3,1)] hover:border-[#8c7a6b]/50 hover:shadow-2xl hover:shadow-stone-900/5">
          <div className="flex flex-col items-center justify-center transition-all duration-700 [cubic-bezier(0.16,1,0.3,1)] group-hover:scale-90 group-hover:opacity-0 group-hover:blur-[2px] group-hover:-translate-y-2">
            <div className="w-32 h-28 sm:w-32 sm:h-32 mb-3 sm:mb-5 flex items-center justify-center grayscale opacity-80 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100">
              <img
                src={item.icon}
                alt={item.label}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-['Century_Gothic',sans-serif] font-bold text-[20px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] uppercase text-[#8c7a6b]">
              {t(`about.industries.${index}`)}
            </span>
          </div>

          <div className="absolute inset-0 bg-[#faf9f6]/95 backdrop-blur-sm p-3 sm:p-6 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out">
            <div className="absolute inset-2 sm:inset-4 border border-[#8c7a6b]/30 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-700 [cubic-bezier(0.16,1,0.3,1)] pointer-events-none" />
            <span className="font-['Garamond'] text-[20px] sm:text-xs text-[#8c7a6b] mb-1 sm:mb-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
              0{index + 1} — {t(`about.industries.${index}`)}
            </span>
            <p className="font-['Century_Gothic',sans-serif] text-[10px] sm:text-[13px] text-stone-700 leading-relaxed font-normal max-w-[90%] translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150">
              {t(`about.industryDescriptions.${item.key}`)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function About() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const process = t("about.process", { returnObjects: true });
  const industries = t("about.industries", { returnObjects: true });

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[480px] sm:h-[560px] md:h-[620px] overflow-hidden">
        <img
          src={Hero}
          alt="About Cedar Stone background"
          className="block md:hidden absolute inset-0 w-full h-full object-cover object-top"
        />

        <img
          src={DesktopHero}
          alt="About Cedar Stone background desktop"
          className="hidden md:block absolute inset-0 w-full h-full object-cover md:object-[center_20%] md:scale-100"
        />

        {/* Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-stone-900/20 to-transparent" />

        {/* Text Content */}
        <div className="relative h-full max-w-7xl mx-auto px-5 sm:px-8 flex items-end pb-12 sm:pb-16">
          <div className="max-w-xl ltr:max-w-2xl md:ltr:max-w-3xl">
            <h1 className="font-['Garamond',_'EB_Garamond',_serif] rtl:font-['Alexandria',_sans-serif] text-3xl sm:text-5xl md:text-6xl text-white leading-[1.1] md:leading-[1.05]">
              {t("about.heroTitle")}
            </h1>
            <p className="font-['Century_Gothic',_Futura,_sans-serif] text-stone-100/90 mt-4 sm:mt-5 text-xs sm:text-sm md:text-base leading-relaxed">
              {t("about.heroSubtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Impact & Legacy Section */}
      <div className="bg-[#E5E3DF] py-8 sm:py-10 px-4 sm:px-8">
        <section className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Impact Swatch */}
          <Swatch
            gradient="from-[#B4A48A] to-[#7D6E57]"
            className="lg:col-span-4 h-[280px] sm:h-[300px] w-full rounded-none p-6 flex flex-col justify-between shadow-2xl mx-auto lg:mx-0 text-left rtl:text-right"
          >
            <span className="rtl:font-['Alexandria',sans-serif] text-xs font-light tracking-wide text-white/90 font-['Century_Gothic',sans-serif]">
              {t("about.impactLabel")}
            </span>
            <div>
              <h3 className="font-['Garamond',serif] rtl:font-['Alexandria',sans-serif] text-2xl text-white mb-2 leading-tight">
                {t("about.impactTitle")}
              </h3>
              <p className="text-white/90 text-[11px] sm:text-xs leading-relaxed font-['Century_Gothic',sans-serif] font-light">
                {t("about.impactBody")}
              </p>
            </div>
          </Swatch>

          {/* Legacy Block */}
          <div className="lg:col-span-8 bg-white h-auto sm:h-[300px] rounded-2xl flex flex-col sm:flex-row items-stretch justify-between shadow-2xl overflow-hidden">
            {/* Text column - Compact font & line spacing */}
            <div className="w-full sm:w-5/12 flex flex-col justify-center p-5 sm:p-6 text-left rtl:text-right shrink-0">
              <h3 className="font-['Garamond',serif] rtl:font-['Alexandria',sans-serif] text-lg sm:text-2xl text-stone-900 mb-2 leading-tight">
                {t("about.legacyTitle")}
              </h3>
              <p className="text-[11px] sm:text-xs text-stone-700 leading-normal sm:leading-relaxed font-['Century_Gothic',sans-serif] font-light">
                {t("about.legacyBody")}
              </p>
            </div>

            {/* Image column */}
            <div className="w-full sm:w-7/12 h-48 sm:h-full shrink-0">
              <img
                src={LegacyStoneImg}
                alt="Legacy stone"
                className="w-full h-full object-cover rounded-b-2xl sm:rounded-b-none sm:rounded-r-2xl rtl:sm:rounded-r-none rtl:sm:rounded-l-2xl"
              />
            </div>
          </div>
        </section>
      </div>

      {/* MISSION & VISION */}
      <div className="w-full bg-[#FBFBFA] py-8 sm:py-12 px-4 sm:px-0">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 px-2 sm:px-10 text-center sm:text-left rtl:sm:text-right">
          <h2 className="font-['Garamond',serif] rtl:font-['Alexandria',sans-serif] text-xl sm:text-3xl tracking-widest text-stone-900 uppercase font-normal mb-2 sm:mb-0">
            {t("about.missionVisionTitle")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <div className="flex flex-col gap-6 w-full">
            <div className="w-full h-[220px] sm:h-[320px] overflow-hidden">
              <img
                src={MissionImg}
                alt="Mission building"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="bg-[#f4f4f4] p-6 sm:p-12 drop-shadow-[0_12px_20px_rgba(0,0,0,0.15)] shadow-stone-400/20 min-h-[170px] flex flex-col justify-center text-left rtl:text-right">
              <h3 className="font-['Century_Gothic',sans-serif] font-bold text-lg sm:text-xl text-stone-900 mb-3">
                {t("about.missionTitle")}
              </h3>
              <p className="font-['Century_Gothic',sans-serif] text-xs sm:text-[14px] text-stone-800 leading-relaxed font-normal">
                {t("about.missionBody")}
              </p>
            </div>
          </div>

          <div className="flex flex-col-reverse md:flex-col gap-6 w-full">
            <div className="bg-[#f4f4f4] p-6 sm:p-12 drop-shadow-[0_12px_20px_rgba(0,0,0,0.15)] shadow-stone-400/20 min-h-[170px] flex flex-col justify-center text-left rtl:text-right">
              <h3 className="font-['Century_Gothic',sans-serif] font-bold text-lg sm:text-xl text-stone-900 mb-3">
                {t("about.visionTitle")}
              </h3>
              <p className="font-['Century_Gothic',sans-serif] text-xs sm:text-[14px] text-stone-800 leading-relaxed font-normal">
                {t("about.visionBody")}
              </p>
            </div>

            <div className="w-full h-[220px] sm:h-[320px] overflow-hidden">
              <img
                src={VisionImg}
                alt="Vision stonework"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <section className="w-full bg-[#e3e1dc]">
        <div className="bg-white pt-16 sm:pt-24 pb-12 sm:pb-16 px-6 md:px-12 text-center md:text-left rtl:md:text-right">
          <h2
            className="font-['Garamond',serif] rtl:font-['Alexandria',sans-serif]
          text-2xl sm:text-3xl text-stone-900 uppercase tracking-widest font-normal mb-16 sm:mb-24 max-w-7xl mx-auto"
          >
            {t("about.valuesTitle")}
          </h2>
        </div>

        <div className="px-4 sm:px-6 md:px-12 max-w-[1300px] mx-auto -mt-16 sm:-mt-23">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {valuesData.map(({ key, icon }) => (
              <div
                key={key}
                className="bg-[#f9f8f6] border-t border-b border-stone-200/60 shadow-lg shadow-black/5 p-4 sm:p-8 flex flex-col text-center"
              >
                <div className="h-16 sm:h-24 flex items-center justify-center mb-4 sm:mb-6">
                  <img
                    src={icon}
                    alt={t(`about.values.${key}.title`)}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                <div className="min-h-[40px] sm:min-h-[56px] flex items-center justify-center mb-2 sm:mb-3">
                  <h3 className="font-['Century_Gothic',sans-serif] font-bold text-sm sm:text-lg text-[#8c7a6b]">
                    {t(`about.values.${key}.title`)}
                  </h3>
                </div>

                <p className="font-['Century_Gothic',sans-serif] text-[10px] sm:text-[13px] text-stone-600 leading-relaxed font-normal">
                  {t(`about.values.${key}.body`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="w-full bg-white py-12 sm:py-16 px-4 sm:px-6 md:px-12">
        <div className="max-w-[1300px] mx-auto">
          <h2
            className="font-['Garamond',serif] rtl:font-['Alexandria',sans-serif]
          text-xl sm:text-3xl text-stone-900 uppercase tracking-widest font-normal mb-8 sm:mb-10 text-center md:text-left rtl:md:text-right"
          >
            {t("about.industriesTitle")}
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {industriesData.map((item, i) => (
              <IndustryCard key={item.key || i} item={item} index={i} t={t} />
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Process Section — Sticky Stacking Cards with Images */}
      <section className="bg-[#E2E0DB] py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 text-center md:text-left rtl:md:text-right">
          <h2 className="font-['Garamond',serif] rtl:font-['Alexandria',sans-serif] text-xl sm:text-3xl text-stone-900 uppercase tracking-widest mb-8 sm:mb-10">
            {t("about.processTitle")}
          </h2>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          {process.map((step, i) => (
            <div
              key={step.step}
              className="sticky top-16 sm:top-24"
              style={{ zIndex: i + 1 }}
            >
              <div
                className={`${
                  i % 2 === 0 ? "bg-[#f4f4f2]" : "bg-[#faf9f6]"
                } border-t border-stone-200/70 shadow-[0_-12px_28px_rgba(0,0,0,0.10)] flex flex-col ${
                  isRTL ? "lg:flex-row-reverse" : "lg:flex-row"
                } min-h-auto lg:min-h-[380px]`}
              >
                <div
                  className={`w-full lg:w-1/2 flex flex-col justify-center p-6 sm:p-10 lg:p-14 ${
                    isRTL ? "text-right" : "text-left"
                  }`}
                >
                  <span className="font-['Garamond',serif] text-3xl sm:text-5xl text-stone-300 mb-2 sm:mb-3 leading-none">
                    {step.step}
                  </span>

                  <h3 className="font-['Century_Gothic',sans-serif] text-base sm:text-xl leading-snug mb-2 sm:mb-3">
                    {step.highlightFirst ? (
                      <>
                        <span className="font-bold text-[#8c7a6b]">
                          {step.titlePart1}
                        </span>{" "}
                        <span className="font-bold text-stone-900">
                          {step.titlePart2}
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="font-bold text-stone-900">
                          {step.titlePart1}
                        </span>{" "}
                        <span className="font-bold text-[#8c7a6b]">
                          {step.titlePart2}
                        </span>
                      </>
                    )}
                  </h3>

                  <p className="font-['Century_Gothic',sans-serif] text-xs sm:text-sm text-stone-500 leading-relaxed max-w-md mb-4 lg:mb-0">
                    {step.body}
                  </p>
                </div>

                <div className="w-full lg:w-1/2 h-[160px] sm:h-[240px] lg:h-auto shrink-0 overflow-hidden">
                  <img
                    src={processImages[i]}
                    alt={`${step.titlePart1} ${step.titlePart2}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Gallery Section */}
      <section className="bg-[#E2E0DB] py-12 sm:py-16 px-4 sm:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2
            className={`font-['Garamond',serif] rtl:font-['Alexandria',sans-serif]
        text-xl sm:text-3xl text-stone-900 uppercase tracking-widest mb-4 text-center md:text-left rtl:md:text-right`}
          >
            {t("about.applicationsTitle")}
          </h2>

          <p
            className={`text-xs sm:text-sm text-stone-700 max-w-3xl mb-8 sm:mb-12 font-['Century_Gothic',sans-serif] text-center md:text-left rtl:md:text-right ${
              isRTL ? "md:ml-auto" : ""
            }`}
          >
            {t("about.applicationsBody")}
          </p>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-5">
            {applicationsData.map(({ key, icon }) => (
              <div
                key={key}
                className="relative flex flex-col items-center justify-center text-center p-4 sm:p-6 bg-white/40 shadow-md shadow-stone-400/20 overflow-hidden 
                     w-[calc(50%-6px)] md:w-[calc(33.333%-14px)] lg:w-[calc(25%-15px)] 
                     min-h-[150px] sm:min-h-[200px]"
              >
                {StoneTextureBg && (
                  <img
                    src={StoneTextureBg}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover opacity-90 pointer-events-none z-0"
                  />
                )}

                <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
                  <div className="h-16 sm:h-24 w-full flex items-center justify-center mb-2 sm:mb-4">
                    <img
                      src={icon}
                      alt={t(`about.applications.${key}`)}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  <h3 className="font-['Century_Gothic',sans-serif] font-bold text-xs sm:text-base text-stone-900 leading-snug max-w-[180px]">
                    {t(`about.applications.${key}`)}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
