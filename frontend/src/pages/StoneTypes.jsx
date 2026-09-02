import { useTranslation } from "react-i18next";
import StoneImageCycler from "../components/StoneImageCycler";

import heroImage from "../assets/StoneTypes-Hero.svg";

// ---- Image Import Placeholders for the 5 Stone Colors ----
import whiteImg1 from "../assets/Stone&Projects/white_stone_1.jpg";
import whiteImg2 from "../assets/Stone&Projects/white_stone_2.jpg";
import whiteImg3 from "../assets/Stone&Projects/white_stone_3.jpg";

import blackImg1 from "../assets/Stone&Projects/black_stone_1.jpg";
import blackImg2 from "../assets/Stone&Projects/black_stone_2.jpg";
import blackImg3 from "../assets/Stone&Projects/black_stone_3.jpg";

import brownImg1 from "../assets/Stone&Projects/brown_stone_1.jpg";
import brownImg2 from "../assets/Stone&Projects/brown_stone_2.jpg";
import brownImg3 from "../assets/Stone&Projects/brown_stone_3.jpg";

import ivoryImg1 from "../assets/Stone&Projects/ivory_stone_1.jpg";
import ivoryImg2 from "../assets/Stone&Projects/ivory_stone_2.jpg";
import ivoryImg3 from "../assets/Stone&Projects/ivory_stone_3.jpg";

import yellowishBrownImg1 from "../assets/Stone&Projects/yellowish_brown_stone_1.jpg";
import yellowishBrownImg2 from "../assets/Stone&Projects/yellowish_brown_stone_2.jpg";
import yellowishBrownImg3 from "../assets/Stone&Projects/yellowish_brown_stone_3.jpg";

// ---- Surface Finishes images ----
import polishedImg from "../assets/Stone&Projects/stone-43.jpg";
import smoothImg from "../assets/Stone&Projects/stone-44.jpg";
import antiqueImg from "../assets/Stone&Projects/stone-45.jpg";
import bushHammeredImg from "../assets/Stone&Projects/stone-46.jpg";
import roughImg from "../assets/Stone&Projects/stone-47.jpg";
import handCarvedImg from "../assets/Stone&Projects/Postersman76ut-100.jpg";

export default function StoneTypes() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const stoneColors = [
    {
      key: "white",
      num: "01",
      images: [whiteImg1, whiteImg2, whiteImg3],
      isDarkText: true,
    },
    {
      key: "black",
      num: "02",
      images: [blackImg1, blackImg2, blackImg3],
      isDarkText: false,
    },
    {
      key: "brown",
      num: "03",
      images: [brownImg1, brownImg2, brownImg3],
      isDarkText: false,
    },
    {
      key: "ivory",
      num: "04",
      images: [ivoryImg1, ivoryImg2, ivoryImg3],
      isDarkText: true,
    },
    {
      key: "yellowishBrown",
      num: "05",
      images: [yellowishBrownImg1, yellowishBrownImg2, yellowishBrownImg3],
      isDarkText: true,
    },
  ];

  const finishes = [
    { key: "polished", labelKey: 0, image: polishedImg },
    { key: "smooth", labelKey: 1, image: smoothImg },
    { key: "antique", labelKey: 2, image: antiqueImg },
    { key: "bush-hammered", labelKey: 3, image: bushHammeredImg },
    { key: "rough", labelKey: 4, image: roughImg },
    { key: "hand-carved", labelKey: 5, image: handCarvedImg },
  ];

  return (
    <div dir={isRTL ? "rtl" : "ltr"}>
      {/* Hero Section */}
      <section className="relative h-[480px] sm:h-[560px] md:h-[620px] overflow-hidden">
        <img
          src={heroImage}
          alt="Natural stone quarry"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-stone-900/20 to-transparent" />
        <div className="relative h-full max-w-7xl mx-auto px-5 sm:px-8 flex items-end pb-12 sm:pb-16">
          <div className="max-w-xl ltr:max-w-2xl md:ltr:max-w-3xl rtl:max-w-2xl md:rtl:max-w-3xl text-start">
            <h1 className="font-['Garamond',_'EB_Garamond',_serif] rtl:font-['Alexandria',_sans-serif] text-3xl sm:text-5xl md:text-6xl text-white leading-[1.1] md:leading-[1.05]">
              {t("stoneTypes.heroTitle")}
            </h1>
            <p className="font-['Century_Gothic',_Futura,_sans-serif] rtl:font-['Tajawal',_sans-serif] text-stone-100/90 mt-4 sm:mt-5 text-xs sm:text-sm md:text-base leading-relaxed text-start">
              {t("stoneTypes.heroSubtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* 5-Color Stacked Landscape Section */}
      <section className="bg-[#E2E0DB] py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
          <h2 className="font-['Garamond',_'EB_Garamond',_serif] rtl:font-['Alexandria',_sans-serif] text-2xl sm:text-3xl md:text-4xl text-stone-900 tracking-widest uppercase mb-10 sm:mb-14 text-center">
            {t("stoneTypes.collectionTitle")}
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
          {stoneColors.map((colorItem, i) => (
            <div
              key={colorItem.key}
              className="sticky top-16 sm:top-24"
              style={{ zIndex: i + 1 }}
            >
              <div className="relative h-[220px] sm:h-[280px] md:h-[320px] lg:h-[360px] w-full overflow-hidden shadow-[0_-12px_28px_rgba(0,0,0,0.20)] flex items-center ltr:justify-start rtl:justify-end rtl:flex-row-reverse">
                {/* Full Landscape Background Stone Cycler */}
                <div className="absolute inset-0 w-full h-full">
                  <StoneImageCycler
                    images={colorItem.images}
                    alt={t(`stoneTypes.stones.${colorItem.key}.name`)}
                    className="w-full h-full object-cover"
                    intervalMs={4500}
                    delayMs={i * 500}
                  />
                </div>

                {/* Radial Shadow Backlight */}
                <div
                  className="absolute inset-y-0 ltr:left-0 ltr:right-auto rtl:right-0 rtl:left-auto w-full sm:w-[60%] md:w-[50%] pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 45%, transparent 75%)",
                  }}
                />

                {/* Text Container - Generous Side Padding */}
                <div className="relative z-10 w-full sm:w-[55%] md:w-[50%] lg:w-[45%] h-full px-12 sm:px-16 lg:px-24 py-6 sm:py-8 lg:py-12 flex flex-col justify-center text-start items-start text-white">
                  <span className="font-['Garamond',serif] text-xl sm:text-2xl md:text-3xl mb-1 sm:mb-2 leading-none font-bold text-white/90">
                    {colorItem.num}
                  </span>

                  <h3 className="font-['Garamond',_'EB_Garamond',_serif] rtl:font-['Alexandria',_sans-serif] uppercase tracking-widest text-lg sm:text-xl md:text-2xl font-semibold mb-1 text-white">
                    {t(`stoneTypes.stones.${colorItem.key}.name`)}
                  </h3>

                  <p className="font-['Century_Gothic',sans-serif] rtl:font-['Tajawal',_sans-serif] text-[10px] sm:text-xs md:text-sm font-semibold tracking-widest uppercase mb-2 sm:mb-3 text-stone-200">
                    {t(`stoneTypes.stones.${colorItem.key}.tagline`)}
                  </p>

                  <p className="font-['Century_Gothic',sans-serif] rtl:font-['Tajawal',_sans-serif] text-[11px] sm:text-xs md:text-sm leading-relaxed text-stone-100 max-w-sm">
                    {t(`stoneTypes.stones.${colorItem.key}.body`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Surface Finishes Section */}
      <section className="bg-[#E5E2DC] py-8 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white p-6 sm:p-12 md:p-16 shadow-lg shadow-stone-900/5">
            <h2 className="font-['Garamond',_'EB_Garamond',_serif] rtl:font-['Alexandria',_sans-serif] text-2xl sm:text-3xl md:text-4xl text-stone-900 tracking-wider uppercase mb-3 text-start">
              {t("stoneTypes.finishesTitle")}
            </h2>

            <p className="font-['Century_Gothic',_sans-serif] rtl:font-['Tajawal',_sans-serif] text-stone-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-3xl mb-8 sm:mb-14 text-start">
              {t("stoneTypes.finishesSubtitle")}
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 lg:gap-6">
              {finishes.map((finish) => (
                <div
                  key={finish.key}
                  className="flex flex-row lg:flex-col items-center gap-4 sm:gap-6 lg:gap-0"
                >
                  <div className="w-[58%] lg:w-full aspect-[2.05/1] lg:aspect-[1/2.05] shrink-0 overflow-hidden bg-stone-100 relative flex items-center justify-center">
                    <div className="max-lg:-rotate-90 max-lg:w-[48.78%] max-lg:h-[205%] max-lg:shrink-0 w-full h-full">
                      <img
                        src={finish.image}
                        alt={t(`stoneTypes.finishes.${finish.labelKey}`)}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <p className="font-['Century_Gothic',_sans-serif] rtl:font-['Tajawal',_sans-serif] text-start lg:text-center text-xs sm:text-sm font-medium text-stone-800 lg:mt-5 flex-1">
                    {t(`stoneTypes.finishes.${finish.labelKey}`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
