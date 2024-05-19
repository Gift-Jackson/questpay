import ContactForm from "../components/home-compos/ContactForm";
import PageTransition from "../components/reusable/PageTransition";

const ContactsPage = () => {
  return (
    <>
      <PageTransition>
        <ContactForm />
      </PageTransition>
    </>
  );
};

export default ContactsPage;
