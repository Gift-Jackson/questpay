import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Toaster } from "sonner";
import MobileNav from "./components/reusable/MobileNav";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Proptypes from 'prop-types'

const LandingPageLayout = ({toggleTheme, darkMode}) => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <Header toggleMenu={toggleMenu} toggleTheme={toggleTheme} darkMode={darkMode} />
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

LandingPageLayout.propTypes = {
    toggleTheme:Proptypes.func,
    darkMode:Proptypes.bool,
}

export default LandingPageLayout;
