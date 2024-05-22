import { useContext } from 'react'
import styles from '../Styles/dashboard-header.module.css'
import PropTypes from 'prop-types'
import { MenuContex } from '../DashboardLayout'

const Header = ({ toggleTheme, darkMode }) => {
  const {toggleSidebar} = useContext(MenuContex)
  return (
      <div className={styles.header}>
          <div className={styles.left}>
          <div className={styles.menu} onClick={toggleSidebar}>
            <span className="material-symbols-outlined">menu</span>
              </div>
          </div>
          <div className={styles.left}>
          <button className={styles.theme} onClick={toggleTheme}>
                  {!darkMode ? (
                    <span className="material-symbols-outlined">
                      light_mode
                    </span>
                  ) : (
                    <span className="material-symbols-outlined">dark_mode</span>
                  )}
                </button>
              <div className={styles.wrap}>
                  <div className={styles.indicator}></div>
            <span className="material-symbols-outlined">notifications</span>
              </div>
              <div className={styles.profile}>
                 <p>Gift Jackson</p>
                  <div className={styles.initials}>
                      GJ
                  </div>
                  <i className="fa-solid fa-angle-down"></i>
              </div>
          </div>
    </div>
  )
}

Header.propTypes = {
  toggleTheme: PropTypes.func,
  darkMode: PropTypes.bool,
}

export default Header