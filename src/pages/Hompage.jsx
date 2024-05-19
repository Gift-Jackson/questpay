import ContactForm from "../components/home-compos/ContactForm";
import Hero from "../components/home-compos/Hero";
import Offers from "../components/home-compos/Offers";
import PageTransition from "../components/reusable/PageTransition";
const Hompage = () => {
  return (
    <>
      <PageTransition>
        <Hero />
        <Offers />
        <ContactForm />
      </PageTransition>
    </>
  );
};

export default Hompage;
