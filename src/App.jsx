import { Outlet } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <HelmetProvider>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100dvh" }}>
        <Navbar />
        <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}
