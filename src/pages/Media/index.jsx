import { useState } from "react";
import { Helmet } from "react-helmet-async";
import PageWrapper from "../../components/layout/PageWrapper";
import SectionTitle from "../../components/ui/SectionTitle";
import PhotoGallery from "./sections/PhotoGallery";
import VideoGallery from "./sections/VideoGallery";
import PressPhotos from "./sections/PressPhotos";
import styles from "./Media.module.css";

const tabs = [
  { id: "photos", label: "Photos" },
  { id: "videos", label: "Vidéos" },
  { id: "documents", label: "Documents" },
];

export default function Media() {
  const [activeTab, setActiveTab] = useState("photos");

  return (
    <>
      <Helmet>
        <title>Médias & Galerie | Claude Makélélé — Site Officiel</title>
        <meta name="description" content="Galerie photos, vidéos et documents presse de Claude Makélélé, légende du football français." />
        <meta property="og:title" content="Médias & Galerie | Claude Makélélé — Site Officiel" />
        <meta property="og:description" content="Galerie photos, vidéos et documents presse de Claude Makélélé, légende du football français." />
        <meta property="og:image" content="https://claudemakelele.com/claude-maakele.jpeg" />
        <meta property="og:url" content="https://claudemakelele.com/media" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Médias & Galerie | Claude Makélélé — Site Officiel" />
        <meta name="twitter:description" content="Galerie photos, vidéos et documents presse de Claude Makélélé, légende du football français." />
        <meta name="twitter:image" content="https://claudemakelele.com/claude-maakele.jpeg" />
        <link rel="canonical" href="https://claudemakelele.com/media" />
      </Helmet>

      <PageWrapper>
        <section className={styles.hero}>
          <div className="container">
            <p className={styles.eyebrow}>Médiathèque</p>
            <h1 className={styles.title}>Médias</h1>
            <p className={styles.subtitle}>Photos, vidéos et ressources presse</p>
          </div>
        </section>

        <section className={styles.content}>
          <div className="container">
            <nav className={styles.tabs} role="tablist">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  className={`${styles.tab} ${activeTab === tab.id ? styles.active : ""}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </nav>

            <div role="tabpanel" className={styles.panel}>
              {activeTab === "photos" && (
                <>
                  <SectionTitle title="Galerie Photos" />
                  <PhotoGallery />
                </>
              )}
              {activeTab === "videos" && (
                <>
                  <SectionTitle title="Vidéos" />
                  <VideoGallery />
                </>
              )}
              {activeTab === "documents" && (
                <>
                  <SectionTitle title="Ressources Presse" />
                  <PressPhotos />
                </>
              )}
            </div>
          </div>
        </section>
      </PageWrapper>
    </>
  );
}
