import { Routes, Route, useLocation } from "react-router-dom";
import OffersPage from "./LandingPage/pages/OffersPage";
import ContactsPage from "./LandingPage/pages/ContactsPage";
import { AnimatePresence } from "framer-motion";
import NotfoundPage from "./LandingPage/pages/NotfoundPage";
import { useState, useEffect } from "react";
import Login from "./LandingPage/pages/Login";
import Signup from "./LandingPage/pages/Signup";
import DashboardLayout from "./UserDashboard/DashboardLayout";
import LandingPageLayout from "./LandingPage/LandingPageLayout";
import Hompage from "./LandingPage/pages/Hompage"
import Dashboard from "./UserDashboard/pages/Dashboard";

const App = () => {
  // Initialize dark mode state from localStorage
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      document
        .querySelector('meta[name="theme-color"]')
        .setAttribute("content", "#20212d");
    } else {
      document.body.classList.remove("dark");
      document
        .querySelector('meta[name="theme-color"]')
        .setAttribute("content", "#fefefe");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);
  };

  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route
            path="/"
            element={
              <LandingPageLayout
                toggleTheme={toggleTheme}
                darkMode={darkMode}
              />
            }
          >
            <Route index element={<Hompage/>} />
            <Route path="offers" element={<OffersPage />} />
            <Route path="contacts" element={<ContactsPage />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="*" element={<NotfoundPage />} />
          </Route>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard toggleTheme={toggleTheme}
                darkMode={darkMode} />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
