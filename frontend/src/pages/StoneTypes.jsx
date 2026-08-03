import { useTranslation } from "react-i18next";
import StoneImageCycler from "../components/StoneImageCycler";

import heroImage from "../assets/Stone&Projects/herostones.svg";

// ---- Stone Collection images ----
import kfairImg1 from "../assets/Stone&Projects/stone_kfairstone-35.jpg";
import kfairImg2 from "../assets/Stone&Projects/stone_kfairstone-38.jpg";
import kfairImg3 from "../assets/Stone&Projects/stone_kfairstone-41.jpg";

import tariaImg1 from "../assets/Stone&Projects/stone_taria stone copy 3.jpg";
import tariaImg2 from "../assets/Stone&Projects/stone_taria stone copy 4.jpg";
import tariaImg3 from "../assets/Stone&Projects/stone_taria stone copy 5.jpg";

import arsalImg1 from "../assets/Stone&Projects/stone_arsal stone copy 3.jpg";
import arsalImg2 from "../assets/Stone&Projects/stone_arsal stone copy 4.jpg";
import arsalImg3 from "../assets/Stone&Projects/stone_arsal stone copy 5.jpg";

import shiraImg1 from "../assets/Stone&Projects/stone_shirastone-36.jpg";
import shiraImg2 from "../assets/Stone&Projects/stone_shirastone-39.jpg";
import shiraImg3 from "../assets/Stone&Projects/stone_shirastone-42.jpg";

import testaImg1 from "../assets/Stone&Projects/stone_testastone-37.jpg";
import testaImg2 from "../assets/Stone&Projects/stone_testastone-40.jpg";
import testaImg3 from "../assets/Stone&Projects/stone_testastone-43.jpg";

import rousImg1 from "../assets/Stone&Projects/stone_rousstone-46.jpg";
import rousImg2 from "../assets/Stone&Projects/stone_rousstone-49.jpg";
import rousImg3 from "../assets/Stone&Projects/stone_rousstone-52.jpg";

import labbayaImg1 from "../assets/Stone&Projects/stone_labbayastone-44.jpg";
import labbayaImg2 from "../assets/Stone&Projects/stone_labbayastone-47.jpg";
import labbayaImg3 from "../assets/Stone&Projects/stone_labbayastone-50.jpg";

import saghbineImg1 from "../assets/Stone&Projects/stone_saghbine-45.jpg";
import saghbineImg2 from "../assets/Stone&Projects/stone_saghbine-48.jpg";
import saghbineImg3 from "../assets/Stone&Projects/stone_saghbine-51.jpg";

import basaltImg1 from "../assets/Stone&Projects/stone_basalt stone copy 3.jpg";
import basaltImg2 from "../assets/Stone&Projects/stone_basalt stone copy 4.jpg";
import basaltImg3 from "../assets/Stone&Projects/stone_basalt stone copy 5.jpg";

// ---- Surface Finishes images ----
import polishedImg from "../assets/Stone&Projects/stone-43.jpg";
import smoothImg from "../assets/Stone&Projects/stone-44.jpg";
import antiqueImg from "../assets/Stone&Projects/stone-45.jpg";
import bushHammeredImg from "../assets/Stone&Projects/stone-46.jpg";
import roughImg from "../assets/Stone&Projects/stone-47.jpg";
import handCarvedImg from "../assets/Stone&Projects/Postersman76ut-100.jpg";

export default function StoneTypes() {
  const { t } = useTranslation();

  const stones = [
    { key: "kfair", images: [kfairImg1, kfairImg2, kfairImg3] },
    { key: "taria", images: [tariaImg1, tariaImg2, tariaImg3] },
    { key: "arsal", images: [arsalImg1, arsalImg2, arsalImg3] },
    { key: "shira", images: [shiraImg1, shiraImg2, shiraImg3] },
    { key: "testa", images: [testaImg1, testaImg2, testaImg3] },
    { key: "rous", images: [rousImg1, rousImg2, rousImg3] },
    { key: "labbaya", images: [labbayaImg1, labbayaImg2, labbayaImg3] },
    { key: "saghbine", images: [saghbineImg1, saghbineImg2, saghbineImg3] },
    { key: "basalt", images: [basaltImg1, basaltImg2, basaltImg3] },
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
    <div>
      {/* Hero Section */}
      <section className="relative h-[480px] sm:h-[560px] md:h-[620px] overflow-hidden">
        <img
          src={heroImage}
          alt="Natural stone quarry"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-stone-900/20 to-transparent" />
        <div className="relative h-full max-w-7xl mx-auto px-5 sm:px-8 flex items-end pb-12 sm:pb-16">
          <div className="max-w-xl ltr:max-w-2xl md:ltr:max-w-3xl">
            <h1 className="font-['Garamond',_'EB_Garamond',_serif] rtl:font-['Alexandria',_sans-serif] text-3xl sm:text-5xl md:text-6xl text-white leading-[1.1] md:leading-[1.05]">
              {t("stoneTypes.heroTitle")}
            </h1>
            <p className="font-['Century_Gothic',_Futura,_sans-serif] rtl:font-['Tajawal',_sans-serif] text-stone-100/90 mt-4 sm:mt-5 text-xs sm:text-sm md:text-base leading-relaxed">
              {t("stoneTypes.heroSubtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Stone Collection Section with StoneImageCycler */}
      <section className="bg-white py-10 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <h2 className="font-['Garamond',_'EB_Garamond',_serif] rtl:font-['Alexandria',_sans-serif] text-2xl sm:text-3xl md:text-4xl text-stone-900 tracking-widest uppercase text-center mb-10 sm:mb-14">
            {t("stoneTypes.collectionTitle")}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {stones.map((stone, index) => (
              <div
                key={stone.key}
                className="bg-white shadow-xl shadow-stone-900/10 overflow-hidden flex flex-col"
              >
                <StoneImageCycler
                  images={stone.images}
                  alt={t(`stoneTypes.stones.${stone.key}.name`)}
                  className="w-full h-52 sm:h-56 md:h-60"
                  intervalMs={5000}
                  delayMs={(index % 3) * 600}
                />

                <div className="p-5 sm:p-6 flex-1 flex flex-col items-center text-center">
                  <h3 className="font-['Century_Gothic',_'EB_Garamond',_serif] rtl:font-['Tajawal'] font-bold text-lg sm:text-xl text-stone-900 mb-2">
                    {t(`stoneTypes.stones.${stone.key}.name`)}
                  </h3>
                  <p className="font-['Century_Gothic'] rtl:font-['Tajawal',_sans-serif] text-xs sm:text-sm text-stone-600 leading-relaxed max-w-[280px]">
                    {t(`stoneTypes.stones.${stone.key}.body`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Surface Finishes Section */}
      <section className="bg-[#E5E2DC] py-8 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white p-6 sm:p-12 md:p-16 shadow-lg shadow-stone-900/5">
            <h2 className="font-['Garamond',_'EB_Garamond',_serif] rtl:font-['Alexandria',_sans-serif] text-2xl sm:text-3xl md:text-4xl text-stone-900 tracking-wider uppercase mb-3 text-center sm:text-start">
              {t("stoneTypes.finishesTitle")}
            </h2>

            <p className="font-['Century_Gothic',_sans-serif] rtl:font-['Tajawal',_sans-serif] text-stone-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-3xl mb-8 sm:mb-14 text-center sm:text-start mx-auto sm:ms-0">
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
