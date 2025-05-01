import "./Navbar.css";
import logo_light from "../../assets/logo_light.webp";
import logo_dark from "../../assets/logo_dark.webp";
import { useContext, useState } from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { ThemeContext } from "../../ThemeContext/ThemeContext";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();

  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    setMenuOpen(false);
  };

  return (
    <nav>
      {/* Logo dinámico */}
      <img
        src={theme === "light" ? logo_light : logo_dark}
        alt="Logo Santiago Developer"
        className="logo"
        loading="lazy"
      />

      {/* Menú de navegación */}
      <ul className={menuOpen ? "active" : ""}>
        <li>
          <a href="#hero" onClick={(e) => handleScroll(e, "hero")}>
            {t("navbar.home")}
          </a>
        </li>
        <li>
          <a href="#about" onClick={(e) => handleScroll(e, "about")}>
            {t("navbar.about")}
          </a>
        </li>
        <li>
          <a href="#skills" onClick={(e) => handleScroll(e, "skills")}>
            {t("navbar.skills")}
          </a>
        </li>
        <li>
          <a href="#portfolio" onClick={(e) => handleScroll(e, "portfolio")}>
            {t("navbar.portfolio")}
          </a>
        </li>
        <li>
          <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>
            {t("navbar.contact")}
          </a>
        </li>
        <i className="fa-solid fa-xmark" onClick={() => setMenuOpen(false)}></i>
      </ul>

      {/* Controles de tema e idioma */}
      <div className="navbar-controls">
        <ThemeToggle />
        <div className="language-toggle">
          <button
            onClick={() => i18n.changeLanguage("es")}
            className={i18n.language === "es" ? "active-lang" : ""}
          >
            ES
          </button>
          <button
            onClick={() => i18n.changeLanguage("en")}
            className={i18n.language === "en" ? "active-lang" : ""}
          >
            EN
          </button>
        </div>
      </div>

      <i className="fa-solid fa-bars" onClick={() => setMenuOpen(true)}></i>
    </nav>
  );
};

export default Navbar;
