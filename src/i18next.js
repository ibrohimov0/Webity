import i18next from "i18next";
import {initReactI18next} from "react-i18next";
import ru from "./locales/ru/transalation.json"
import uz from "./locales/uz/transalation.json"
import en from "./locales/en/transalation.json"
import LanguageDetector from "i18next-browser-languagedetector"
i18next 
.use(initReactI18next)
.use(LanguageDetector)
.init({
  resources:{
    uz:{
      translation: uz
    },
    ru:{
      translation:ru
    },
    en:{
      translation:en
    }
  },
  lng: window.localStorage.getItem('i18nextLng'),
  fallbackLng: 'uz',
  detection:{
    order:['htmlTag' , 'cookie', 'localStorage', 'path', 'subdomain'],
    caches:['cookie' , 'localStorage']
  }
})
export default i18next