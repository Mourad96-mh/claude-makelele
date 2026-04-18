import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Loader from "../components/ui/Loader";

const Accueil = lazy(() => import("../pages/Accueil"));
const Actualites = lazy(() => import("../pages/Actualites"));
const ArticleDetail = lazy(() => import("../pages/Actualites/ArticleDetail"));
const Biographie = lazy(() => import("../pages/Biographie"));
const Media = lazy(() => import("../pages/Media"));
const Boutique = lazy(() => import("../pages/Boutique"));
const ProductDetail = lazy(() => import("../pages/Boutique/ProductDetail"));
const ReseauxSociaux = lazy(() => import("../pages/ReseauxSociaux"));
const Contact = lazy(() => import("../pages/Contact"));

function SuspenseWrapper({ children }) {
  return <Suspense fallback={<Loader fullPage />}>{children}</Suspense>;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <SuspenseWrapper><Accueil /></SuspenseWrapper> },
      { path: "actualites", element: <SuspenseWrapper><Actualites /></SuspenseWrapper> },
      { path: "actualites/:slug", element: <SuspenseWrapper><ArticleDetail /></SuspenseWrapper> },
      { path: "biographie", element: <SuspenseWrapper><Biographie /></SuspenseWrapper> },
      { path: "media", element: <SuspenseWrapper><Media /></SuspenseWrapper> },
      { path: "boutique", element: <SuspenseWrapper><Boutique /></SuspenseWrapper> },
      { path: "boutique/:id", element: <SuspenseWrapper><ProductDetail /></SuspenseWrapper> },
      { path: "reseaux-sociaux", element: <SuspenseWrapper><ReseauxSociaux /></SuspenseWrapper> },
      { path: "contact", element: <SuspenseWrapper><Contact /></SuspenseWrapper> },
    ],
  },
]);

export default router;
