import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.css"; // opcional para estilos propios

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const handleChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="language-toggle">
      <button
        onClick={() => handleChange("es")}
        className={currentLang === "es" ? "active-lang" : ""}
      >
        ES
      </button>
      <button
        onClick={() => handleChange("en")}
        className={currentLang === "en" ? "active-lang" : ""}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
