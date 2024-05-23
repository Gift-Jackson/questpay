import Heading from "../components/Heading";
import Container from "../components/Container";
import PropTypes from "prop-types";
import styles from "../Styles/dashboard.module.css";
import Services from "../components/Services";
import { Link } from "react-router-dom";
import { useState } from "react";
import DashboardCard from "../components/DashboardCard";

const Dashboard = ({ toggleTheme, darkMode }) => {
  const [showBalance, setShowBalance] = useState(false);

  const toggleBalance = () => {
    setShowBalance(!showBalance);
  };
  return (
    <>
      <Container toggleTheme={toggleTheme} darkMode={darkMode}>
        <Heading title="Dashboard" />
        <DashboardCard toggleBalance={toggleBalance} showBalance={showBalance} />
        <Services />
        <Link>
          <button className={styles.btn}>
            Transaction History <i className="fa-solid fa-history"></i>
          </button>
        </Link>
      </Container>
    </>
  );
};

Dashboard.propTypes = {
  toggleTheme: PropTypes.func,
  darkMode: PropTypes.bool,
};

export default Dashboard;
