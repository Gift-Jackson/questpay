import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Toaster } from "sonner";
import MobileNav from "./components/reusable/MobileNav";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

const LandingPageLayout = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <Header toggleMenu={toggleMenu} />
      <AnimatePresence>
        {openMenu && <MobileNav toggleMenu={toggleMenu} />}
      </AnimatePresence>
      <Toaster position="top-center" richColors />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default LandingPageLayout;
