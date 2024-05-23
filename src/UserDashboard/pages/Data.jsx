import { Link } from "react-router-dom";
import Container from "../components/Container";
import Heading from "../components/Heading";
import styles from "../Styles/airtime.module.css";
import NotFound from "../../LandingPage/components/notfound-compo/NotFound";
const Data = () => {
  return (
    <Container>
      <div className={styles.heading}>
        <Link to="..">
          <div className={styles.back}>
            <span className="material-symbols-outlined">arrow_back</span>
          </div>
        </Link>
        <Heading title="Data Bundles" />
          </div>
          <NotFound />
    </Container>
  );
};

export default Data;
