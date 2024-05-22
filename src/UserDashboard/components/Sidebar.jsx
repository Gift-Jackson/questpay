import styles from "../Styles/sidebar.module.css";
import logo from '../images/logo.png'
import { sideNav } from "../../constants/data";
import { NavLink } from "react-router-dom";
import '../../styles/global.css'
import { useContext } from "react";
import { MenuContex } from "../DashboardLayout";
import { motion } from "framer-motion";


const Sidebar = () => {
  const { toggleSidebar } = useContext(MenuContex)
  
  const sidebarVar = {
    initial: {
      x: -100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
    exit: {
      x: -100,
      opacity: 0,
    }
  }

  return (
    <>
      <motion.div
        variants={sidebarVar}
        initial="initial"
        animate="animate"
        exit="exit"
      
        className={styles.container}>
        <div className={styles.overlay} onClick={toggleSidebar}></div>
        <div className={styles.header}>
          <a href="#">
            <div className={styles.brand}>
              <img src={logo} width={40} alt="" />
              <h2>QuestPay</h2>
            </div>
          </a>
          <div className={styles.close} onClick={toggleSidebar}>
            <span className="material-symbols-outlined">close</span>
          </div>
        </div>


        <nav className={styles.nav}>
          <ul id="side-nav" className={styles.list}>
            {sideNav.map((option, index) => (
              <li className={styles.item} key={index}>
                <NavLink className="nav-link" to={option.path}>
                  <span className="material-symbols-outlined">{option.icon}</span>
                  <span>{option.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </>
  );
};

export default Sidebar;
