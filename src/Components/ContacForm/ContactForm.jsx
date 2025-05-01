import "./ContactForm.css";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const ContactForm = () => {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);

  // Validación con Yup
  const schema = Yup.object().shape({
    name: Yup.string()
      .required(t("contact.validations.name_required"))
      .min(3, t("contact.validations.name_min")),
    email: Yup.string()
      .required(t("contact.validations.email_required"))
      .email(t("contact.validations.email_invalid")),
    message: Yup.string()
      .required(t("contact.validations.message_required"))
      .min(10, t("contact.validations.message_min")),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("message", data.message);

      const response = await fetch("https://formspree.io/f/meogoabz", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (response.ok) {
        setSubmitted(true);
        reset();
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert(t("contact.validations.error_submit"));
      }
    } catch (error) {
      alert(t("contact.validations.error_network"));
    }
  };

  return (
    <motion.section
      className="contact"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.h1>{t("contact.title")}</motion.h1>

      <div className="contact-container">
        {/* Info de contacto */}
        <div className="contact-info">
          <div className="info-content">
            <i className="fas fa-user-circle icon"></i>
            <h2>{t("contact.info_title")}</h2>
            <p>
              <i className="fas fa-envelope"></i>
              santiagoquintero.softdev.code@gmail.com
            </p>
            <p>
              <i className="fas fa-phone"></i>
              +57 315-448-8668
            </p>
          </div>
        </div>

        {/* Formulario */}
        <div className="contact-form">
          {!submitted ? (
            <>
              <h2>{t("contact.form_title")}</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="text"
                  {...register("name")}
                  placeholder={t("contact.name_placeholder")}
                />
                {errors.name && <p className="error">{errors.name.message}</p>}

                <input
                  type="email"
                  {...register("email")}
                  placeholder={t("contact.email_placeholder")}
                />
                {errors.email && (
                  <p className="error">{errors.email.message}</p>
                )}

                <textarea
                  {...register("message")}
                  placeholder={t("contact.message_placeholder")}
                />
                {errors.message && (
                  <p className="error">{errors.message.message}</p>
                )}

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {t("contact.button")}
                </motion.button>
              </form>
            </>
          ) : (
            <div className="success-message">
              <FaCheckCircle className="success-icon" />
              <span>{t("contact.success_message")}</span>
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default ContactForm;
