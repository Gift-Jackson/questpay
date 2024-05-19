import styles from './header.module.css'
import { navLinks } from '../../constants/data'
import { Link, NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import '../../styles/global.css'
const Header = ({toggleMenu}) => {
  return (
      <>
          <header>
              <main>
                  <div className={styles.header}>
                      <div className={styles.brand}>
                          <a href="/">
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
                              <button className={styles.theme}>
                                  <span className="material-symbols-outlined">light_mode</span>
                              </button>
                              <Link>
                                  <button className={styles.btn}>
                                      Let me in &nbsp; <i className="fa-solid fa-arrow-right fa-shake"></i>
                              </button>
                              </Link>
                              <button  className={styles.menu} onClick={toggleMenu}>
                              <span className="material-symbols-outlined">menu</span>
                              </button>
                          </div>
                      </div>
                  </div>
              </main>
          </header>
      </>
  )
}
Header.propTypes = {
    toggleMenu:PropTypes.func
}

export default Header