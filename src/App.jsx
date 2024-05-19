import { Routes, Route, useLocation } from "react-router-dom"
import LandingPageLayout from "./LandingPageLayout"
import Hompage from "./pages/Hompage"
import OffersPage from "./pages/OffersPage"
import ContactsPage from "./pages/ContactsPage"
import { AnimatePresence } from "framer-motion"

const App = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
      <Routes  key={location.pathname} location={location}>
        <Route path="/" element={<LandingPageLayout />} >
          <Route index element={<Hompage />} />
          <Route path="offers" element={<OffersPage/>} />
          <Route path="contacts" element={<ContactsPage/>} />
        </Route>
        </Routes>
        </AnimatePresence>
    </>
  )
}

export default App