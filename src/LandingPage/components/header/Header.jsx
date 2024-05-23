import styles from "./header.module.css";
import { navLinks } from "../../../constants/data";
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "../../../styles/global.css";
import logo from '../../../assets/logo.png'
const Header = ({ toggleMenu, toggleTheme, darkMode }) => {
  return (
    <>
      <header>
        <main>
          <div className={styles.header}>
            <div className={styles.brand}>
              <a href="/">
                <img src={logo} width={40} alt="Questpay Logo" />
                <h2>QuestPay</h2>
              </a>
            </div>

            <div className={styles.right}>
              <nav>
                <ul className={styles.navs}>
                  {navLinks.map((item, index) => (
                    <li key={index}>
                      <NavLink className="nav-link" to={item.path}>
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className={styles.btns}>
                <button className={styles.theme} onClick={toggleTheme}>
                  {!darkMode ? (
                    <span className="material-symbols-outlined">
                      light_mode
                    </span>
                  ) : (
                    <span className="material-symbols-outlined">dark_mode</span>
                  )}
                </button>
                <Link to="/login">
                  <button className={styles.btn}>
                    Let me in &nbsp;{" "}
                    <i className="fa-solid fa-arrow-right fa-shake"></i>
                  </button>
                </Link>
                <button className={styles.menu} onClick={toggleMenu}>
                  <span className="material-symbols-outlined">side_navigation</span>
                </button>
              </div>
            </div>
          </div>
        </main>
      </header>
    </>
  );
};
Header.propTypes = {
  toggleMenu: PropTypes.func,
  toggleTheme: PropTypes.func,
  darkMode: PropTypes.func,
};

export default Header;
