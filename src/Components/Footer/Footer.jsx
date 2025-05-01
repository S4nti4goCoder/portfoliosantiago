import "./Footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/santiago-david-garcia-quintero-218b35361/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/S4nti4goCoder"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <i className="fab fa-github"></i>
        </a>
      </div>
      <p>
        Copyright {currentYear} © SANTIAGOCODER - {t("footer.rights")}
      </p>
    </footer>
  );
};

export default Footer;
