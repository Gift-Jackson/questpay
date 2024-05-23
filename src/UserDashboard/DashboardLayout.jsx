import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import styles from "./Styles/dashboard.module.css";
import { useState, createContext, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

export const MenuContex = createContext();

const DashboardLayout = () => {
  const [showSidebar, setShowSidebar] = useState(window.innerWidth >= 820);

  const handleResize = () => {
    if (window.innerWidth >= 820) {
      setShowSidebar(true);
    } else {
      setShowSidebar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <>
      <MenuContex.Provider value={{ showSidebar, toggleSidebar }}>
        <div className={styles.wrapper}>
          <AnimatePresence>{showSidebar && <Sidebar />}</AnimatePresence>
          <div className={styles.main}>
              <Outlet />
          </div>
        </div>
      </MenuContex.Provider>
    </>
  );
};

export default DashboardLayout;
