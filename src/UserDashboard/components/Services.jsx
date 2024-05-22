import { Link } from "react-router-dom"
import { services } from "../../constants/data"
import styles from '../Styles/services.module.css'
const Services = () => {
  return (
      <>
          <div className={styles.container}>
              <div className={styles.top}>
                  <p>Services</p>
                  <p>See all <i className="fa-solid fa-angle-down"></i></p>
              </div>

              <ul className={styles.list}>
                  {services.map((item, index) => {
                      return (
                          <Link className={styles.box} to={item.path} key={index}>
                              <li className={styles.card}>
                              <div className={styles.icon}><span className="material-symbols-outlined">{item.icon}</span></div>
                              <div>{item.name}</div>
                          </li>
                          </Link>
                      )
                  })}
              </ul>
      </div>
      </>
  )
}

export default Services