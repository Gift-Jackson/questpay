import Heading from "../components/Heading";
import Container from "../components/Container";
import PropTypes from "prop-types";
import styles from "../Styles/dashboard.module.css";
import Services from "../components/Services";
import { Link } from "react-router-dom";
import { useState } from "react";

const Dashboard = ({ toggleTheme, darkMode }) => {
  const [showBalance, setShowBalance] = useState(false);

  const toggleBalance = () => {
    setShowBalance(!showBalance);
  };
  return (
    <>
      <Container toggleTheme={toggleTheme} darkMode={darkMode}>
        <Heading title="Dashboard" />

        <div className={styles.container}>
          <div className={styles.card}>
            <div className={styles.top}>
              <p>Total Balance</p>

              <div className={styles.close} onClick={toggleBalance}>
                {showBalance ? (
                  <span className="material-symbols-outlined">
                  visibility
                </span>
                ):
                  (
                    <span className="material-symbols-outlined">
                  visibility_off
                </span>
                )}
                
              </div>
            </div>

            <div>
              {showBalance ? (
                <h1 contentEditable="true">
                  23,000.00 <span className={styles.currency}>NGN</span>
                </h1>
              ) : (
                <h1>*******</h1>
              )}
            </div>
            <div className={styles.btns}>
              <button className={styles.btn_1}>
                Fund Wallet
                <i className="fa-regular fa-plus"></i>
              </button>
              <button className={styles.btn_2}>
                Withdraw
                <i className="fa-regular fa-paper-plane"></i>
              </button>
              <button className={styles.btn_3}>
                Request
                <i className="fa-solid fa-question fa-bounce"></i>
              </button>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.top}>
              <p>Referral(s)</p>
            </div>
            <div>
              <h1>6</h1>
            </div>
            <div className={styles.btns}>
              <button className={styles.btn_2}>
                View Referral{" "}
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </button>
              <button className={styles.btn_2}>
                Copy link <i className="fa-regular fa-clone"></i>
              </button>
            </div>
          </div>
        </div>

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
