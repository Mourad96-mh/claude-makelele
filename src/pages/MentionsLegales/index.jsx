import { Helmet } from "react-helmet-async";
import styles from "./MentionsLegales.module.css";

export default function MentionsLegales() {
  return (
    <>
      <Helmet>
        <title>Mentions Légales | Claude Makélélé — Site Officiel</title>
        <meta name="description" content="Mentions légales du site officiel de Claude Makélélé." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://xn--claudemakll-jbbbb.com/mentions-legales" />
      </Helmet>

      <div className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.title}>Mentions Légales</h1>

          <section className={styles.section}>
            <h2 className={styles.heading}>1. Éditeur du site</h2>
            <p>Le site <strong>xn--claudemakll-jbbbb.com</strong> est édité par :</p>
            <ul className={styles.list}>
              <li>Nom : Claude Makélélé</li>
              <li>Gestionnaire du site : Abdessamad Chafiki</li>
              <li>Qualité : Chargé d'affaires &amp; Gestion d'image</li>
              <li>Société : NATIS MARKETING</li>
              <li>Adresse : 3, BD Des anglais — 44100 NANTES FRANCE</li>
              <li>SIRET : 41053798900031</li>
              <li>Téléphone : <a href="tel:+33777449885" className={styles.link}>+33 7 77 44 98 85</a></li>
              <li>Email : <a href="mailto:chafikiii@yahoo.fr" className={styles.link}>chafikiii@yahoo.fr</a></li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>2. Hébergement</h2>
            <p>Ce site est hébergé par :</p>
            <ul className={styles.list}>
              <li>Société : Vercel Inc.</li>
              <li>Adresse : 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</li>
              <li>Site web : <a href="https://vercel.com" className={styles.link} target="_blank" rel="noopener noreferrer">vercel.com</a></li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>3. Propriété intellectuelle</h2>
            <p>
              L'ensemble des contenus présents sur ce site (textes, images, vidéos, logos, graphismes)
              sont protégés par le droit d'auteur et appartiennent à Claude Makélélé ou à leurs auteurs
              respectifs. Toute reproduction, distribution ou utilisation sans autorisation préalable écrite
              est strictement interdite.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>4. Données personnelles</h2>
            <p>
              Les informations collectées via le formulaire de contact sont utilisées uniquement pour
              répondre aux demandes des utilisateurs. Conformément au Règlement Général sur la Protection
              des Données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression
              de vos données. Pour exercer ces droits, contactez-nous à l'adresse :&nbsp;
              <a href="mailto:Chafikiii@yahoo.fr" className={styles.link}>Chafikiii@yahoo.fr</a>.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>5. Cookies</h2>
            <p>
              Ce site peut utiliser des cookies à des fins d'analyse d'audience (Google Analytics).
              Vous pouvez paramétrer votre navigateur pour refuser les cookies ou être alerté lorsqu'un
              cookie est envoyé.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>6. Limitation de responsabilité</h2>
            <p>
              L'éditeur s'efforce de maintenir les informations publiées sur ce site aussi précises et
              à jour que possible, mais ne saurait être tenu responsable des erreurs, omissions ou
              résultats obtenus par l'utilisation de ces informations. Des liens hypertextes peuvent
              renvoyer vers des sites tiers sur lesquels l'éditeur n'exerce aucun contrôle.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>7. Droit applicable</h2>
            <p>
              Les présentes mentions légales sont régies par le droit français. En cas de litige,
              les tribunaux français seront seuls compétents.
            </p>
          </section>

          <p className={styles.updated}>Dernière mise à jour : avril 2026</p>
        </div>
      </div>
    </>
  );
}
