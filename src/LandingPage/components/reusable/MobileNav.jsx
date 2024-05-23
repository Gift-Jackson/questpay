import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import styles from "./mobilenav.module.css";
import { motion } from "framer-motion";
import { navLinks } from "../../../constants/data";
import "../../../styles/global.css";
import logo from "../../../assets/logo.png";
const MobileNav = ({ toggleMenu }) => {
  const navVar = {
    initial: {
      x: "-100%",
      opacity:0
    },
    animate: {
      x: "0",
      opacity:1,
    },
    exit: {
      x: "-100%",
      opacity:0
    },
  };

  return (
    <>
      <div id="mobile-nav" className={styles.mobilenav}>
        <div className={styles.overlay} onClick={toggleMenu}></div>
        <motion.div
          variants={navVar}
          initial="initial"
          animate="animate"
          exit="exit"
          className={styles.content}
        >
          <div className={styles.header}>
            <div className={styles.brand}>
              <a href="/">
                <img src={logo} width={40} alt="Questpay Logo" />
                <h2>QuestPay</h2>
              </a>
            </div>
            <div className={styles.close_menu} onClick={toggleMenu}>
              <span className="material-symbols-outlined">close</span>
            </div>
          </div>
          <div className={styles.container}>
            <ul className={styles.nav}>
              {navLinks.map((item, index) => (
                <li key={index}>
                  <NavLink className="nav-link" to={item.path}>
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className={styles.btns}>
              <Link to="/signup">
                <button className={styles.btn_2}>
                  Get Started <i className="fa-solid fa-arrow-right"></i>
                </button>
              </Link>
              <a href="#">
                <button className={styles.btn_1}>
                  <i className="fa-solid fa-arrow-right-to-bracket"></i> Sign In
                </button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

MobileNav.propTypes = {
  toggleMenu: PropTypes.func,
};

export default MobileNav;
