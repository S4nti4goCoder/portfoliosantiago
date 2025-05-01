import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Portfolio.css";

import ecommerce1 from "../../assets/ecommerce1.webp";
import ecommerce2 from "../../assets/ecommerce2.webp";
import ecommerce3 from "../../assets/ecommerce3.webp";
import ecommerce4 from "../../assets/ecommerce4.webp";
import ecommerce5 from "../../assets/ecommerce5.webp";
import ecommerce6 from "../../assets/ecommerce6.webp";
import ecommerce7 from "../../assets/ecommerce7.webp";
import pos1 from "../../assets/pos1.webp";
import pos2 from "../../assets/pos2.webp";
import pos3 from "../../assets/pos3.webp";
import pos4 from "../../assets/pos4.webp";
import pos5 from "../../assets/pos5.webp";
import pos6 from "../../assets/pos6.webp";
import marketplace1 from "../../assets/marketplace.webp";
import gestor1 from "../../assets/gestor1.webp";
import gestor2 from "../../assets/gestor2.webp";
import gestor3 from "../../assets/gestor3.webp";
import gestor4 from "../../assets/gestor4.webp";
import gestor5 from "../../assets/gestor5.webp";
import gestor6 from "../../assets/gestor6.webp";
import gestor7 from "../../assets/gestor7.webp";
import gestor8 from "../../assets/gestor8.webp";

const Portfolio = () => {
  const { t } = useTranslation();
  const [openLightbox, setOpenLightbox] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const portfolioItems = [
    {
      id: 1,
      images: [
        ecommerce1,
        ecommerce2,
        ecommerce3,
        ecommerce4,
        ecommerce5,
        ecommerce6,
        ecommerce7,
      ],
      title: t("portfolio.ecommerce.title"),
      description: t("portfolio.ecommerce.description"),
      demoLink: "https://github.com/S4nti4goCoder/ecommerce_php",
      tech: ["PHP", "MVC", "API REST", "MySQL", "Bootstrap", "jQuery"],
    },
    {
      id: 2,
      images: [pos1, pos2, pos3, pos4, pos5, pos6],
      title: t("portfolio.pos.title"),
      description: t("portfolio.pos.description"),
      demoLink: "https://github.com/S4nti4goCoder/pos_system",
      tech: ["PHP", "MVC", "API REST", "MySQL", "Bootstrap", "jQuery"],
    },
    {
      id: 3,
      images: [marketplace1],
      title: t("portfolio.marketplace.title"),
      description: t("portfolio.marketplace.description"),
      demoLink: "https://github.com/S4nti4goCoder/marketplace_php",
      tech: ["PHP", "MVC", "API REST", "MySQL", "Bootstrap", "jQuery"],
    },
    {
      id: 4,
      images: [
        gestor1,
        gestor2,
        gestor3,
        gestor4,
        gestor5,
        gestor6,
        gestor7,
        gestor8,
      ],
      title: t("portfolio.filemanager.title"),
      description: t("portfolio.filemanager.description"),
      demoLink: "https://github.com/S4nti4goCoder/gestor-archivos",
      tech: ["PHP", "CodeIgniter", "MySQL", "Bootstrap", "jQuery"],
    },
  ];

  const handleOpenLightbox = (images) => {
    const slides = images.map((img) => ({ src: img }));
    setCurrentImages(slides);
    setCurrentIndex(0);
    setOpenLightbox(true);
  };

  return (
    <motion.section
      className="portfolio"
      id="portfolio"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ amount: 0.3 }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {t("portfolio.sectionTitle")}
      </motion.h1>

      <motion.div className="portfolio-container">
        {portfolioItems.map((item) => (
          <motion.div
            className="portfolio-card"
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="portfolio-image-container">
              <Swiper
                navigation
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination]}
                className="portfolio-swiper"
              >
                {item.images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={img}
                      alt={`slide-${index}`}
                      className="portfolio-image"
                      loading="lazy"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <button
                className="view-button"
                onClick={() => handleOpenLightbox(item.images)}
                aria-label="Ver imágenes en grande"
              >
                <i className="fas fa-eye"></i>
              </button>
            </div>

            <div className="portfolio-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="tech-tags">
                {item.tech.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={item.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="demo-button"
              >
                {t("portfolio.viewGithub")} <i className="fab fa-github"></i>
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {openLightbox && (
        <Lightbox
          open={openLightbox}
          close={() => setOpenLightbox(false)}
          slides={currentImages}
          index={currentIndex}
        />
      )}
    </motion.section>
  );
};

export default Portfolio;
