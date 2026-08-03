import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";
import emailjs from "@emailjs/browser";
import villaImage from "../assets/Stone&Projects/villa4.jpg";
import { stoneTypes } from "../data/stoneTypes";

export default function RequestQuote() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir
    ? i18n.dir() === "rtl"
    : i18n.language?.startsWith("ar");

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    stone: "", // Default empty string so placeholder is selected
    quantity: "",
    details: "",
  });

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setSubmitted(true);
    } catch (err) {
      console.error("EmailJS Error:", err);
      setErrorMsg("Failed to send request. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  }

  function resetForm() {
    setSubmitted(false);
    setErrorMsg("");
    setForm({
      name: "",
      email: "",
      phone: "",
      city: "",
      stone: "",
      quantity: "",
      details: "",
    });
  }

  const inputClass =
    "w-full rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-500 focus:ring-1 focus:ring-stone-500 transition-colors";
  const labelClass = "block text-sm font-medium text-stone-800 mb-1.5";

  const submitNote = isRTL
    ? "بعد استلام الطلب سيقوم فريقنا بالتواصل معك في أقرب وقت ممكن."
    : "Once your request has been submitted, our team will review it and contact you as soon as possible.";

  return (
    <div dir={isRTL ? "rtl" : "ltr"} className="bg-white">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-5 sm:px-8 pt-16 pb-8 text-center">
        <h1 className="font-display text-4xl md:text-5xl text-stone-900">
          {t("quote.heroTitle")}
        </h1>
        <p className="text-sm text-stone-500 mt-4 leading-relaxed max-w-xl mx-auto">
          {t("quote.heroSubtitle")}
        </p>
      </section>

      <section className="relative py-14 sm:py-20">
        <img
          src={villaImage}
          alt="Villa at dusk"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-stone-900/50" />

        <div className="relative z-10 max-w-2xl mx-auto px-5 sm:px-8">
          <div className="bg-stone-50 rounded-2xl shadow-xl p-6 sm:p-10">
            {submitted ? (
              <div className="text-center py-8">
                <h2 className="font-display text-2xl text-stone-900 mb-2">
                  {t("quote.successTitle")}
                </h2>
                <p className="text-sm text-stone-500 mb-6">
                  {t("quote.successBody")}
                </p>
                <button
                  type="button"
                  onClick={resetForm}
                  className="text-sm font-medium underline text-stone-700 hover:text-stone-900"
                >
                  {t("quote.sendAnother")}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {errorMsg && (
                  <p className="text-sm text-red-600 font-medium">{errorMsg}</p>
                )}

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>{t("quote.fullName")}</label>
                    <input
                      required
                      className={inputClass}
                      placeholder={t("quote.fullNamePlaceholder")}
                      value={form.name}
                      onChange={update("name")}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>{t("quote.email")}</label>
                    <input
                      required
                      type="email"
                      className={inputClass}
                      placeholder={t("quote.emailPlaceholder")}
                      value={form.email}
                      onChange={update("email")}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>{t("quote.contact")}</label>
                    <div className="flex items-stretch rounded-lg border border-stone-300 bg-white overflow-hidden focus-within:border-stone-500 focus-within:ring-1 focus-within:ring-stone-500">
                      <button
                        type="button"
                        className="flex items-center gap-1 px-3 sm:px-4 text-sm text-stone-600 border-e border-stone-300 shrink-0 bg-stone-50/60"
                        tabIndex={-1}
                      >
                        <span>(+961)</span>
                        <ChevronDown size={14} className="text-stone-400" />
                      </button>
                      <input
                        required
                        className="flex-1 min-w-0 px-3 sm:px-4 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none bg-transparent"
                        placeholder="123 456 7890"
                        value={form.phone}
                        onChange={update("phone")}
                      />
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>{t("quote.city")}</label>
                    <input
                      required
                      className={inputClass}
                      placeholder={t("quote.cityPlaceholder")}
                      value={form.city}
                      onChange={update("city")}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>{t("quote.stoneType")}</label>
                  <div className="relative">
                    <select
                      required
                      className={`${inputClass} appearance-none pr-10 ${
                        !form.stone ? "text-stone-400" : "text-stone-900"
                      }`}
                      value={form.stone}
                      onChange={update("stone")}
                    >
                      {/* Placeholder front label */}
                      <option value="" disabled hidden>
                        {t("quote.selectStone", "Stone Types")}
                      </option>

                      {/* Stone list from data */}
                      {stoneTypes.map((s) => (
                        <option
                          key={s.key}
                          value={t(`stoneTypes.stones.${s.key}.name`)}
                          className="text-stone-900"
                        >
                          {t(`stoneTypes.stones.${s.key}.name`)}
                        </option>
                      ))}

                      {/* Other option */}
                      <option value="Other" className="text-stone-900">
                        {t("quote.other", "Other")}
                      </option>
                    </select>
                    <ChevronDown
                      size={16}
                      className={`absolute ${
                        isRTL ? "left-3" : "right-3"
                      } top-1/2 -translate-y-1/2 pointer-events-none text-stone-400`}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>{t("quote.quantity")}</label>
                  <input
                    className={inputClass}
                    placeholder={t("quote.quantityPlaceholder")}
                    value={form.quantity}
                    onChange={update("quantity")}
                  />
                </div>

                <div>
                  <label className={labelClass}>{t("quote.details")}</label>
                  <textarea
                    rows={4}
                    className={`${inputClass} resize-none`}
                    placeholder={t("quote.detailsPlaceholder")}
                    value={form.details}
                    onChange={update("details")}
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-1">
                  <p className="text-xs text-stone-500 leading-relaxed sm:max-w-[60%] order-2 sm:order-1">
                    {submitNote}
                  </p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="order-1 sm:order-2 w-full sm:w-auto sm:px-10 shrink-0 bg-stone-900 text-white font-medium py-3 rounded-full hover:bg-stone-800 transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : t("quote.send")}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
