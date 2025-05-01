import "./Skills.css";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Skills = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.section
      className="skills"
      id="skills"
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Título */}
      <motion.h1 variants={itemVariants}>
        {t("skills.title")}
      </motion.h1>

      {/* Contenedor de las tarjetas */}
      <motion.div
        className="skills-base"
        variants={containerVariants} // 👈 ahora el contenedor también es motion
      >
        {/* Frontend */}
        <motion.div
          className="skills-box"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          <i className="fas fa-laptop-code"></i>
          <h3>{t("skills.frontend.title")}</h3>
          <p>{t("skills.frontend.description")}</p>
        </motion.div>

        {/* Backend */}
        <motion.div
          className="skills-box"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          <i className="fas fa-drafting-compass"></i>
          <h3>{t("skills.backend.title")}</h3>
          <p>{t("skills.backend.description")}</p>
        </motion.div>

        {/* Web Apps */}
        <motion.div
          className="skills-box"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          <i className="fab fa-react"></i>
          <h3>{t("skills.webapps.title")}</h3>
          <p>{t("skills.webapps.description")}</p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Skills;
