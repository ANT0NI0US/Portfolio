import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
// import translationEn from "./local/en.json";
// import translationAr from "./local/ar.json";
import HttpApi from "i18next-http-backend";

// const resources = {
//   en: {
//     translation: translationEn,
//   },
//   ar: {
//     translation: translationAr,
//   },
// };

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(HttpApi)
  .init({
    supportedLngs: ["ar", "en"],
    detection: {
      order: ["cookie", "htmlTag"],
      lookupCookie: "language",
      caches: ["cookie"],
      htmlTag: document.documentElement,
    },
    backend: {
      loadPath: "/local/{{lng}}.json",
    },
    react: {
      useSuspense: true, // Set useSuspense to true
    },
  });

export default i18n;
