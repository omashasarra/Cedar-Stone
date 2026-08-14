import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu, X, Globe } from "lucide-react";
import { FaLinkedin, FaInstagram } from "react-icons/fa6";
import { setLanguage } from "../i18n/index.js";
import logo from "../assets/Logo.svg";

// Navigation links config
const NAV_ITEMS = [
  { key: "home", path: "/" },
  { key: "about", path: "/about" },
  { key: "stoneTypes", path: "/stone-types" },
  { key: "projects", path: "/projects" },
];

function TikTokIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M16.6 5.82c-.9-.88-1.4-2.08-1.4-3.32h-3.1v13.94a3.1 3.1 0 1 1-2.53-3.05v-3.14a6.2 6.2 0 1 0 5.63 6.17v-6.3a8.3 8.3 0 0 0 4.83 1.55v-3.1a5.3 5.3 0 0 1-3.43-2.75z" />
    </svg>
  );
}

export default function CedarStoneNavbar() {
  const { t, i18n } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const lang = i18n.language?.startsWith("ar") ? "ar" : "en";
  const dir = lang === "ar" ? "rtl" : "ltr";
  const toggleLang = () => setLanguage(lang === "en" ? "ar" : "en");

  return (
    <div dir={dir} className="font-sans relative pt-44 sm:pt-48">
      {/* ===== 1. Sticky Top Header (Forced to LTR regardless of active language) ===== */}
      <header
        dir="ltr"
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-neutral-100"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          <div className="relative flex h-24 items-center justify-between">
            {/* Left Side: Mobile Hamburger & Desktop Socials */}
            <div className="flex items-center gap-3 z-10">
              <button
                onClick={() => setMobileOpen(true)}
                className="md:hidden p-2 text-neutral-800 focus:outline-none"
                aria-label="Open Menu"
              >
                <Menu className="h-6 w-6" />
              </button>

              <div className="hidden md:flex items-center gap-2.5">
                <a
                  href="#"
                  aria-label="TikTok"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#4A4A4A] text-white hover:bg-black transition-colors"
                >
                  <TikTokIcon className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#4A4A4A] text-white hover:bg-black transition-colors"
                >
                  <FaLinkedin className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#4A4A4A] text-white hover:bg-black transition-colors"
                >
                  <FaInstagram className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Center: Scaled Up Logo */}
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
              <Link to="/">
                <img
                  src={logo}
                  alt="Cedar Stone - Hasbaya Lebanon"
                  className="h-24 sm:h-32 w-auto object-contain transition-all duration-300"
                />
              </Link>
            </div>

            {/* Right Side: Swapped Language Switcher */}
            <div className="flex items-center gap-3 z-10">
              <button
                onClick={toggleLang}
                className="flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-full text-neutral-700 font-medium transition-all duration-300 hover:bg-neutral-900 hover:text-white hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Globe className="h-4 w-4" />
                <span>{lang === "en" ? "ع" : "EN"}</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ===== 2. Standalone Sticky Floating Pill Navigation Bar ===== */}
      <div className="hidden md:flex fixed top-28 left-1/2 -translate-x-1/2 z-40">
        <div className="flex items-center gap-6 rounded-full bg-white/70 backdrop-blur-md px-8 py-3 shadow-lg border border-white/80">
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.path;
            const title = t(`nav.${item.key}`);
            return (
              <Link
                key={item.key}
                to={item.path}
                className={`text-base tracking-wide transition-colors ${
                  isActive
                    ? "text-neutral-900 font-semibold"
                    : "text-neutral-700 hover:text-black"
                }`}
              >
                {isActive ? `-${title}-` : title}
              </Link>
            );
          })}

          {/* Request Quote Link */}
          {(() => {
            const isQuoteActive = location.pathname === "/request-quote";
            const quoteTitle = t("nav.quote");
            return (
              <Link
                to="/request-quote"
                className={`text-base tracking-wide transition-colors ${
                  isQuoteActive
                    ? "text-neutral-900 font-semibold"
                    : "text-neutral-700 hover:text-black"
                }`}
              >
                {isQuoteActive ? `-${quoteTitle}-` : quoteTitle}
              </Link>
            );
          })()}
        </div>
      </div>

      {/* ===== 3. Mobile Side-Drawer Menu ===== */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />

          {/* Side Drawer Content */}
          <div
            className={`relative w-full max-w-xs bg-white h-full shadow-2xl flex flex-col justify-between z-10 ${
              lang === "ar" ? "mr-auto" : "ml-auto"
            }`}
          >
            <div>
              {/* Header section with Close Button & Title */}
              <div className="p-6 border-b border-neutral-100 flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-bold text-neutral-800">
                    {lang === "ar" ? "القائمة" : "Menu"}
                  </h2>
                  <p className="text-sm text-neutral-500 mt-1">
                    {lang === "ar" ? "استكشف الفئات" : "Explore Categories"}
                  </p>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-1 text-neutral-700 hover:text-black"
                >
                  <X className="h-7 w-7" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="px-6 py-4 space-y-1">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.key}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className="block py-4 text-lg text-neutral-700 border-b border-neutral-200/60 font-normal hover:text-black"
                  >
                    {t(`nav.${item.key}`)}
                  </Link>
                ))}
                <Link
                  to="/request-quote"
                  onClick={() => setMobileOpen(false)}
                  className="block py-4 text-lg text-neutral-700 border-b border-neutral-200/60 font-normal hover:text-black"
                >
                  {t("nav.quote")}
                </Link>
              </nav>
            </div>

            {/* Social Icons at bottom of mobile menu */}
            <div className="p-6 flex items-center gap-4">
              <a
                href="#"
                aria-label="TikTok"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#4A4A4A] text-white"
              >
                <TikTokIcon className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#4A4A4A] text-white"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#4A4A4A] text-white"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
