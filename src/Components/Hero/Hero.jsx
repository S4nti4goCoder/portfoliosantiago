import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import "./Hero.css";
import foto from "../../assets/foto.webp";
import { FaWhatsapp, FaFileAlt, FaDownload } from "react-icons/fa";

const Hero = () => {
  const { t, i18n } = useTranslation();
  const [currentTech, setCurrentTech] = useState(0);

  const technologies = [
    { name: "HTML5", icon: "fab fa-html5", color: "#E34F26" },
    { name: "CSS3", icon: "fab fa-css3-alt", color: "#1572B6" },
    { name: "JavaScript", icon: "fab fa-js", color: "#F7DF1E" },
    { name: "Node.js", icon: "fab fa-node-js", color: "#68A063" },
    { name: "React", icon: "fab fa-react", color: "#61DAFB" },
    { name: "Angular", icon: "fab fa-angular", color: "#dd0031" },
    { name: "MySQL", icon: "fas fa-database", color: "#4479A1" },
    { name: "PHP", icon: "fab fa-php", color: "#777BB4" },
    { name: "Laravel", icon: "fab fa-laravel", color: "#f53003" },
    { name: "Git", icon: "fab fa-git-alt", color: "#F05032" },
    { name: "Bootstrap", icon: "fab fa-bootstrap", color: "#7952B3" },
    { name: "Figma", icon: "fab fa-figma", color: "#F24E1E" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % technologies.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      className="hero"
      id="hero"
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.div
        className="text-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h1>
          <span>{t("hero.greeting")}</span> {t("hero.intro")}
        </h1>

        <h2 className="location">
          <i className="fas fa-map-marker-alt" aria-hidden="true"></i>{" "}
          {t("hero.location")}
        </h2>

        <h3
          className={`typing ${
            i18n.language === "en" ? "typing-en" : "typing-es"
          }`}
        >
          {t("hero.profession")}
        </h3>

        <p>{t("hero.description")}</p>

        {/* Botones */}
        <div className="hero-buttons">
          {/* WhatsApp */}
          <a
            href="https://wa.me/573154488668"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
            aria-label="Contactar por WhatsApp"
          >
            <FaWhatsapp style={{ marginRight: "8px", fontSize: "1.5rem" }} />
            {t("hero.cta")}
          </a>

          {/* Botones de CV */}
          <div className="btn-split-wrapper">
            <a
              href="/cv_santiagoquintero.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-left"
              aria-label="Ver CV Santiago"
            >
              <FaFileAlt style={{ marginRight: "8px", fontSize: "1.2rem" }} />
              {t("hero.cv_view")}
            </a>

            <a
              href="/cv_santiagoquintero.pdf"
              download
              className="btn-right tooltip-right"
              data-tooltip={t("hero.cv_download")}
              aria-label="Descargar CV Santiago"
            >
              <FaDownload style={{ fontSize: "1.2rem" }} />
            </a>
          </div>
        </div>

        {/* Tecnologías */}
        <div className="tech-stack-below">
          <div className="tech-icons">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="tech-icon-item"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <i
                  className={`${tech.icon} ${
                    index === currentTech ? "active" : ""
                  }`}
                  title={tech.name}
                  aria-hidden="true"
                  style={{ color: index === currentTech ? tech.color : "" }}
                />
                <p className="tech-name">{tech.name}</p>
              </motion.div>
            ))}
          </div>
          <p className="tech-text">{t("hero.tech_label")}</p>
        </div>
      </motion.div>

      {/* Foto y redes */}
      <motion.div
        className="image-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.img
          src={foto}
          alt="Foto profesional de Santiago Quintero, desarrollador FullStack"
          loading="lazy"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />

        <div className="social-links">
          <a
            href="https://linkedin.com/in/santiago-david-garcia-quintero-218b35361"
            target="_blank"
            rel="noopener noreferrer"
            className="tooltip-top"
            data-tooltip="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/S4nti4goCoder"
            target="_blank"
            rel="noopener noreferrer"
            className="tooltip-top"
            data-tooltip="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
