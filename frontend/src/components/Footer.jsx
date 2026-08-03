import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "../assets/Logo.svg";

// Custom TikTok Icon
const TikTokIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.2-1.74 2.89 2.89 0 0 1 2.31-2.23V8.2a6.34 6.34 0 0 0-1 .09A6.34 6.34 0 1 1 15 15.67V9.41a8.17 8.17 0 0 0 4.59 1.41V7.37a4.85 4.85 0 0 1-.001-.68z" />
  </svg>
);

// Custom LinkedIn Icon
const LinkedInIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

// Custom Instagram Icon
const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

// Custom WhatsApp Icon
const WhatsAppIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.67-1.622-.918-2.218-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.05 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

// Navigation Routes Configuration
const NAV_ITEMS = [
  { key: "home", translationKey: "nav.home", path: "/" },
  { key: "about", translationKey: "nav.about", path: "/about" },
  { key: "stoneTypes", translationKey: "nav.stoneTypes", path: "/stone-types" },
  { key: "projects", translationKey: "nav.projects", path: "/projects" },
  { key: "quote", translationKey: "nav.quote", path: "/request-quote" },
];

export default function Footer() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith("ar") ? "ar" : "en";
  const dir = lang === "ar" ? "rtl" : "ltr";

  const locationParts = t("footer.locationValue")
    .split(/[،,]\s*/)
    .filter(Boolean);
  const locationLine1 = locationParts
    .slice(0, -1)
    .join(lang === "ar" ? "، " : ", ");
  const locationLine2 = locationParts[locationParts.length - 1];

  const WhatsAppButton = (
    <a
      href="https://wa.me/96170703900"
      target="_blank"
      rel="noreferrer"
      className="mt-1 inline-flex w-12 h-12 bg-[#D4E8DF] hover:bg-[#c2e0d3] rounded-full items-center justify-center transition-all shadow-sm"
    >
      <div className="w-8 h-8 bg-[#25D366] rounded-full flex items-center justify-center text-white">
        <WhatsAppIcon className="w-5 h-5 fill-current" />
      </div>
    </a>
  );

  return (
    <footer
      dir={dir}
      className="w-full font-['Century_Gothic',CenturyGothic,AppleGothic,'Montserrat',sans-serif] text-[#4A4A4A]"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');
      `}</style>

      {/* Top Main Section */}
      <div className="bg-[#FAF9F6] mt-12 pb-16 px-6 md:px-12 lg:px-20">
        {/* Mobile View */}
        <div className="md:hidden max-w-sm mx-auto flex flex-col items-center gap-10">
          <div className="flex flex-col items-center text-center">
            <img
              src={Logo}
              alt="Cedar Stone Logo"
              className="w-40 object-contain"
            />
            <p className="font-['Century_Gothic',_Futura,_sans-serif] rtl:font-['Tajawal',_sans-serif] text-xs text-[#5A5A5A] leading-tight max-w-[220px] -mt-3">
              {t("footer.tagline")}
            </p>
            <p className="font-['Century_Gothic',_Futura,_sans-serif] rtl:font-['Tajawal',_sans-serif] text-xs text-[#5A5A5A] mt-2 font-medium">
              {t("footer.since")}
            </p>
          </div>

          <div className="w-full grid grid-cols-[auto_1fr] gap-x-6 gap-y-8 items-start">
            <h3 className="font-['Century_Gothic',_Futura,_sans-serif] rtl:font-['Tajawal',_sans-serif] text-base text-[#2A2A2A] font-semibold">
              {t("footer.navigation")}
            </h3>
            <ul className="space-y-1.5 text-xs text-[#666666]">
              {NAV_ITEMS.map((item) => (
                <li key={item.key}>
                  <Link
                    to={item.path}
                    className="font-['Century_Gothic',_Futura,_sans-serif] rtl:font-['Tajawal',_sans-serif] hover:text-black transition-colors"
                  >
                    {t(item.translationKey)}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="font-['Century_Gothic',_Futura,_sans-serif] rtl:font-['Tajawal',_sans-serif] text-base text-[#2A2A2A] font-semibold">
              {t("footer.getInTouch")}
            </h3>
            <div className="space-y-2 text-xs text-[#666666]">
              <a
                href="mailto:info@cedarstonelb.com"
                dir="ltr"
                className="flex items-center gap-2.5 hover:text-black transition-colors"
              >
                <Mail className="w-4 h-4 text-[#5A5A5A]" />
                <span>info@cedarstonelb.com</span>
              </a>
              <a
                href="tel:+96170703900"
                dir="ltr"
                className="flex items-center gap-2.5 hover:text-black transition-colors"
              >
                <Phone className="w-4 h-4 text-[#5A5A5A]" />
                <span>+961 70 703 900</span>
              </a>
              {WhatsAppButton}
            </div>

            <h3 className="font-['Century_Gothic',_Futura,_sans-serif] rtl:font-['Tajawal',_sans-serif] text-base text-[#2A2A2A] font-semibold">
              {t("footer.socialMedia")}
            </h3>
            <div className="space-y-2.5 text-xs text-[#666666]">
              <a
                href="https://www.tiktok.com/@cedar_stone_lb?_r=1&_t=ZS-98UxFxzszCv"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-black transition-colors"
              >
                <TikTokIcon className="w-4 h-4 text-[#333333]" />
                <span>cedar_stone_lb</span>
              </a>
              <a
                href="https://www.linkedin.com/company/cedar-stone-lb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-black transition-colors"
              >
                <LinkedInIcon className="w-4 h-4 text-[#333333]" />
                <span>Cedar Stone</span>
              </a>
              <a
                href="https://www.instagram.com/cedar_stone_lb/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-black transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-[#333333]" />
                <span>cedar_stone_lb</span>
              </a>
            </div>

            <h3 className="font-['Century_Gothic',_Futura,_sans-serif] rtl:font-['Tajawal',_sans-serif] text-base text-[#2A2A2A] font-semibold">
              {t("footer.location")}
            </h3>
            <div className="flex items-start gap-2 text-xs text-[#666666]">
              <MapPin className="w-4 h-4 text-[#5A5A5A] shrink-0 mt-0.5" />
              <div>
                <p>{locationLine1}</p>
                <p>{locationLine2}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:grid max-w-12xl mx-auto grid-cols-2 lg:grid-cols-5 gap-8 items-start">
          {/* Column 1: Logo & Brand Info */}
          <div className="flex flex-col items-center text-center">
            <div className="relative flex flex-col items-center">
              <img
                src={Logo}
                alt="Cedar Stone Logo"
                className="w-40 object-contain"
              />
            </div>
            <p className="font-['Century_Gothic',_Futura,_sans-serif] rtl:font-['Tajawal',_sans-serif] text-xs text-[#5A5A5A] leading-tight max-w-[200px] -mt-3">
              {t("footer.tagline")}
            </p>
            <p className="font-['Century_Gothic',_Futura,_sans-serif] rtl:font-['Tajawal',_sans-serif] text-xs text-[#5A5A5A] mt-2 font-medium">
              {t("footer.since")}
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col space-y-3">
            <h3 className="font-['Century_Gothic',_Futura,_sans-serif] rtl:font-['Tajawal',_sans-serif] text-base text-[#2A2A2A] font-semibold mb-1">
              {t("footer.navigation")}
            </h3>
            <ul className="space-y-1.5 text-xs text-[#666666]">
              {NAV_ITEMS.map((item) => (
                <li key={item.key}>
                  <Link
                    to={item.path}
                    className="font-['Century_Gothic',_Futura,_sans-serif] rtl:font-['Tajawal',_sans-serif] hover:text-black transition-colors"
                  >
                    {t(item.translationKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Get In Touch */}
          <div className="flex flex-col space-y-3 rtl:items-start rtl:text-right">
            <h3 className="font-['Century_Gothic',_Futura,_sans-serif] rtl:font-['Tajawal',_sans-serif] text-base text-[#2A2A2A] font-semibold mb-1">
              {t("footer.getInTouch")}
            </h3>

            <div className="space-y-2 text-xs text-[#666666]">
              <a
                href="mailto:info@cedarstonelb.com"
                className="flex items-center gap-2.5 hover:text-black transition-colors"
              >
                <Mail className="w-4 h-4 text-[#5A5A5A] shrink-0" />
                <span dir="ltr">info@cedarstonelb.com</span>
              </a>

              <a
                href="tel:+96170703900"
                className="flex items-center gap-2.5 hover:text-black transition-colors"
              >
                <Phone className="w-4 h-4 text-[#5A5A5A] shrink-0" />
                <span dir="ltr">+961 70 703 900</span>
              </a>
            </div>

            <div className="pt-2 flex justify-start">{WhatsAppButton}</div>
          </div>

          {/* Column 4: Social Media */}
          <div className="flex flex-col space-y-3">
            <h3 className="font-['Century_Gothic',_Futura,_sans-serif] rtl:font-['Tajawal',_sans-serif] text-base text-[#2A2A2A] font-semibold mb-1">
              {t("footer.socialMedia")}
            </h3>
            <div className="space-y-2.5 text-xs text-[#666666]">
              <a
                href="https://www.tiktok.com/@cedar_stone_lb?_r=1&_t=ZS-98UxFxzszCv"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-black transition-colors"
              >
                <TikTokIcon className="w-4 h-4 text-[#333333]" />
                <span>cedar_stone_lb</span>
              </a>
              <a
                href="https://www.linkedin.com/company/cedar-stone-lb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-black transition-colors"
              >
                <LinkedInIcon className="w-4 h-4 text-[#333333]" />
                <span>Cedar Stone</span>
              </a>
              <a
                href="https://www.instagram.com/cedar_stone_lb/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-black transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-[#333333]" />
                <span>cedar_stone_lb</span>
              </a>
            </div>
          </div>

          {/* Column 5: Our Location */}
          <div className="flex flex-col space-y-3">
            <h3 className="font-['Century_Gothic',_Futura,_sans-serif] rtl:font-['Tajawal',_sans-serif] text-base text-[#2A2A2A] font-semibold mb-1">
              {t("footer.location")}
            </h3>
            <a
              href="https://maps.google.com?q=Cedar%20Stone%20LB%20%D9%85%D9%86%D8%B4%D8%A7%D8%B1%20%D8%B5%D8%AE%D8%B1,%20Bathaniyeh,%20Lebanon"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 text-xs text-[#666666] hover:text-black transition-colors group"
            >
              <MapPin className="w-4 h-4 text-[#5A5A5A] group-hover:text-black shrink-0 mt-0.5" />
              <div>
                <p>{locationLine1}</p>
                <p>{locationLine2}</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div
        dir="ltr"
        className="bg-[#2B2B2B] text-white/80 py-4 px-6 md:px-12 lg:px-20 text-xs"
      >
        <div className="max-w-7xl mx-auto flex flex-col-reverse sm:flex-row justify-between items-center gap-2">
          <p className="font-['Century_Gothic',_Futura,_sans-serif] rtl:font-['Tajawal',_sans-serif]">
            {t("footer.rights")}
          </p>
          <div className="flex items-center gap-2 text-white/80">
            <Link
              to="/privacy-policy"
              className="font-['Century_Gothic',_Futura,_sans-serif] rtl:font-['Tajawal',_sans-serif] hover:text-white transition-colors"
            >
              {t("footer.privacy")}
            </Link>
            <span>|</span>
            <Link
              to="/terms-of-service"
              className="font-['Century_Gothic',_Futura,_sans-serif] rtl:font-['Tajawal',_sans-serif] hover:text-white transition-colors"
            >
              {t("footer.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
