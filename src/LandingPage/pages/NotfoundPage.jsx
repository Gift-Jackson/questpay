import PageTransition from "../components/reusable/PageTransition";
import NotFound from "../components/notfound-compo/NotFound";

const NotfoundPage = () => {
  return (
    <>
      <PageTransition>
        <NotFound />
      </PageTransition>
    </>
  );
};

export default NotfoundPage;
