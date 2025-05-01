import "./About.css";
import codingGif from "../../assets/coding.gif";
import {
  FaAward,
  FaProjectDiagram,
  FaUsers,
  FaLaptopCode,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const About = () => {
  const { t } = useTranslation();

  return (
    <motion.section
      className="about-details"
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      {/* Fila 1: GIF + Info */}
      <div className="about-top">
        {/* GIF */}
        <motion.div
          className="about-gif-container"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <img
            src={codingGif}
            alt="Persona programando"
            className="coding-gif"
            loading="lazy"
            width="500"
            height="500"
          />
          <div className="gif-overlay">
            <FaLaptopCode className="overlay-icon" />
            <span>{t("about.overlayText")}</span>
          </div>
        </motion.div>

        {/* SOBRE MÍ */}
        <motion.div
          className="about-infos"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>
            {t("about.title1")}{" "}
            <span className="highlight">{t("about.title2")}</span>
          </h2>

          <motion.p
            className="description"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            {t("about.description")}
          </motion.p>

          {/* Tarjetas de Experiencia */}
          <motion.section
            className="experience-section"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
            viewport={{ once: false, amount: 0.3 }}
          >
            {[
              {
                icon: <FaAward className="experience-icon" />,
                number: "10+",
                text: t("about.experience.publicRepos"),
              },
              {
                icon: <FaProjectDiagram className="experience-icon" />,
                number: "5+",
                text: t("about.experience.featuredProjects"),
              },
              {
                icon: <FaUsers className="experience-icon" />,
                number: "1+",
                text: t("about.experience.yearsExperience"),
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="experience-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                {item.icon}
                <span className="experience-number">{item.number}</span>
                <p className="experience-text">{item.text}</p>
              </motion.div>
            ))}
          </motion.section>
        </motion.div>
      </div>

      {/* Bloques de enfoque */}
      <motion.div
        className="professional-focus-container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* Primer bloque */}
        <motion.div
          className="professional-focus"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h3>{t("about.focus.title1")}</h3>
          <ul aria-labelledby="enfoque1" className="focus-list">
            {t("about.focus.list1", { returnObjects: true }).map(
              (item, index) => (
                <li key={index}>{item}</li>
              )
            )}
          </ul>
        </motion.div>

        {/* Segundo bloque */}
        <motion.div
          className="professional-focus"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h3>{t("about.timeline.title")}</h3>

          <div className="timeline-container">
            {/* Experiencia */}
            <div className="timeline-section">
              <h4 className="section-title">
                {t("about.timeline.experience.title")}
              </h4>
              {t("about.timeline.experience.items", {
                returnObjects: true,
              }).map((exp, idx) => (
                <div className="timeline-item" key={idx}>
                  <div className="timeline-icon experience-icon">🏢</div>
                  <div className="timeline-content">
                    <h5>{exp.title}</h5>
                    <span className="timeline-date">{exp.date}</span>
                    <p>{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Educación */}
            <div className="timeline-section">
              <h4 className="section-title">
                {t("about.timeline.education.title")}
              </h4>
              {t("about.timeline.education.items", { returnObjects: true }).map(
                (edu, idx) => (
                  <div className="timeline-item" key={idx}>
                    <div className="timeline-icon education-icon">🎓</div>
                    <div className="timeline-content">
                      <h5>{edu.title}</h5>
                      <span className="timeline-date">{edu.date}</span>
                      <p>{edu.description}</p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;
