import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeView from "./components/HomeView";
import AboutView from "./components/AboutView";
import FounderView from "./components/FounderView";
import ServicesViews from "./components/ServicesViews";
import ContactView from "./components/ContactView";
import PrivacyPolicyView from "./components/PrivacyPolicyView";
import VacancyView from "./components/VacancyView";
import OrderModal from "./components/OrderModal";
import ThreeDHero from "./components/ThreeDHero";
import { SERVICES_DATA } from "./data";
import { ServiceDetail } from "./types";

export default function App() {
  const [currentView, setCurrentView] = useState("home");
  const [graphicsSubTab, setGraphicsSubTab] = useState("Logo Design");
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedServiceForOrder, setSelectedServiceForOrder] = useState<ServiceDetail | null>(null);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme-selection");
    return saved === "dark";
  });
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Scroll to top automatically on view modifications to simulate page transitions
  const handleSetView = (view: string, subTab?: string) => {
    setCurrentView(view);
    if (subTab) {
      setGraphicsSubTab(subTab);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenOrderModal = (srv?: ServiceDetail) => {
    if (srv) {
      setSelectedServiceForOrder(srv);
    } else {
      setSelectedServiceForOrder(null);
    }
    setIsOrderModalOpen(true);
  };

  const handleCloseOrderModal = () => {
    setIsOrderModalOpen(false);
    setSelectedServiceForOrder(null);
  };

  return (
    <div
      id="app-root-container"
      className="min-h-screen flex flex-col font-sans transition-colors duration-300 bg-white text-slate-800"
    >
      {/* Dynamic Header */}
      <Header
        currentView={currentView}
        setView={handleSetView}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenOrderModal={handleOpenOrderModal}
      />

      {/* Main Core View Area */}
      <main className="flex-1 relative">
        {/* Renders our interactive, page-scroll responsive 3D Canvas cybernetic particle map inside the home screen */}
        {currentView === "home" && (
          <ThreeDHero currentSlideIndex={currentSlideIndex} />
        )}

        <div className="relative z-10">
          {currentView === "home" && (
            <HomeView
              setView={handleSetView}
              onOpenOrderModal={handleOpenOrderModal}
              currentSlideIndex={currentSlideIndex}
              setCurrentSlideIndex={setCurrentSlideIndex}
            />
          )}

          {currentView === "about-company" && (
            <AboutView setView={handleSetView} />
          )}

          {currentView === "about-founder" && (
            <FounderView onOpenOrderModal={handleOpenOrderModal} />
          )}

          {currentView === "contact" && (
            <ContactView />
          )}

          {currentView === "service-web" && (
            <ServicesViews
              category="web-dev"
              setView={handleSetView}
              onOpenOrderModal={handleOpenOrderModal}
            />
          )}

          {currentView === "service-website" && (
            <ServicesViews
              category="website-dev"
              setView={handleSetView}
              onOpenOrderModal={handleOpenOrderModal}
            />
          )}

          {currentView === "service-graphics" && (
            <ServicesViews
              category="graphics"
              initialSubTab={graphicsSubTab}
              setView={handleSetView}
              onOpenOrderModal={handleOpenOrderModal}
            />
          )}

          {currentView === "service-erp" && (
            <ServicesViews
              category="erp-system"
              setView={handleSetView}
              onOpenOrderModal={handleOpenOrderModal}
            />
          )}

          {currentView === "privacy-policy" && (
            <PrivacyPolicyView setView={handleSetView} />
          )}

          {currentView === "vacancy" && (
            <VacancyView />
          )}
        </div>
      </main>

      {/* Dynamic Footer */}
      <Footer setView={handleSetView} onOpenOrderModal={handleOpenOrderModal} />

      {/* Shared Order Redirection Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={handleCloseOrderModal}
        selectedService={selectedServiceForOrder}
        services={SERVICES_DATA}
      />
    </div>
  );
}
