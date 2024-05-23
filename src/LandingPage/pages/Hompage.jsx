import ContactForm from "../components/home-compos/ContactForm";
import Hero from "../components/home-compos/Hero";
import Offers from "../components/home-compos/Offers";
import ServiceLayout from "../components/home-compos/ServiceLayout";
import Why from "../components/home-compos/Why";
import PageTransition from "../components/reusable/PageTransition";
const Hompage = () => {
  return (
    <>
      <PageTransition>
        <Hero />
        <Offers />
        <ServiceLayout />
        <Why/>
        <ContactForm />
      </PageTransition>
    </>
  );
};

export default Hompage;
