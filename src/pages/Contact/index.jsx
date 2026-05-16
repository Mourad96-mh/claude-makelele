import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import emailjs from "emailjs-com";
import Button from "../../components/ui/Button";
import styles from "./Contact.module.css";

const schema = z.object({
  name: z.string().min(2, "Nom requis (min. 2 caractères)"),
  email: z.string().email("Adresse email invalide"),
});

export default function Contact() {
  const [status, setStatus] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  async function onSubmit(data) {
    setStatus("sending");
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        data,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <Helmet>
        <title>Contact & Booking | Claude Makélélé — Site Officiel</title>
        <meta name="description" content="Contactez l'équipe de Claude Makélélé pour des demandes de booking, presse ou partenariats." />
        <meta property="og:title" content="Contact & Booking | Claude Makélélé — Site Officiel" />
        <meta property="og:description" content="Contactez l'équipe de Claude Makélélé pour des demandes de booking, presse ou partenariats." />
        <meta property="og:image" content="https://claudemakelele.com/claude-maakele.jpeg" />
        <meta property="og:url" content="https://claudemakelele.com/contact" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact & Booking | Claude Makélélé — Site Officiel" />
        <meta name="twitter:description" content="Contactez l'équipe de Claude Makélélé pour des demandes de booking, presse ou partenariats." />
        <meta name="twitter:image" content="https://claudemakelele.com/claude-maakele.jpeg" />
        <link rel="canonical" href="https://claudemakelele.com/contact" />
      </Helmet>

      <div className={styles.page}>
        <div className={styles.card}>
        {/* Left — image panel */}
        <div className={styles.imagePanel}>
          <img
            src="/imgs/contact/side-photo-contact.jpeg"
            alt="Claude Makélélé"
            className={styles.sidePhoto}
          />
        </div>

        {/* Right — form panel */}
        <div className={styles.formPanel}>
          <div className={styles.formInner}>
            <p className={styles.eyebrow}>Vous souhaitez contacter Claude Makélélé</p>
            <h1 className={styles.title}>Partenariats &amp; Sponsoring</h1>
            <div className={styles.domains}>
              <span>Partenariats</span>
              <span>Sponsoring</span>
              <span>Événementiels</span>
              <span>Publicité</span>
            </div>
            <div className={styles.contactCard}>
              <div className={styles.contactInfo}>
                <p className={styles.contactName}>Abdessamad Chafiki</p>
                <p className={styles.contactRole}>Chargé d'affaires &amp; Gestion d'image</p>
              </div>
              <div className={styles.contactLinks}>
                <a href="mailto:Chafikiii@yahoo.fr" className={styles.contactLink}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  Chafikiii@yahoo.fr
                </a>
                <a href="tel:+33777449885" className={styles.contactLink}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 1h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 5.61 5.61l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  +33 7 77 44 98 85
                </a>
              </div>
            </div>

            <div className={styles.companyCard}>
              <p className={styles.companyName}>NATIS MARKETING</p>
              <p className={styles.companyDetail}>3, BD Des anglais — 44100 NANTES FRANCE</p>
              <p className={styles.companyDetail}>SIRET : 41053798900031</p>
            </div>

            {status === "success" ? (
              <div className={styles.successMsg}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <h3>Message envoyé !</h3>
                <p>Nous reviendrons vers vous dans les meilleurs délais.</p>
                <Button variant="outline" onClick={() => setStatus(null)}>
                  Envoyer un autre message
                </Button>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="name">Nom complet *</label>
                    <input
                      id="name"
                      className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
                      {...register("name")}
                      placeholder="Votre nom"
                    />
                    {errors.name && <span className={styles.error}>{errors.name.message}</span>}
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="email">Email *</label>
                    <input
                      id="email"
                      type="email"
                      className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
                      {...register("email")}
                      placeholder="contact@exemple.com"
                    />
                    {errors.email && <span className={styles.error}>{errors.email.message}</span>}
                  </div>
                </div>

{status === "error" && (
                  <p className={styles.sendError}>
                    Une erreur est survenue. Veuillez réessayer ou nous écrire directement.
                  </p>
                )}

                <Button type="submit" variant="primary" disabled={status === "sending"}>
                  {status === "sending" ? "Envoi en cours…" : "Envoyer le message"}
                </Button>
              </form>
            )}
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
