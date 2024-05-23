import { AnimatePresence, motion } from "framer-motion";
import { why } from "../../../constants/data";
import { Link } from "react-router-dom";
import { useRef } from "react";
import Title from "../reusable/Title";
import styles from "./why.module.css";


const Why = () => {
    const scrollRef = useRef(null);
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Title
          title="Why choose QuestPay"
          subtitle="Few reasons why we are the best..."
        />
        <ul className={styles.wrapper}>
          <AnimatePresence>
            {why.map((item, index) => (
              <motion.li
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ root: scrollRef }}
                transition={{
                  delay: 0.2,
                }}
                className={styles.list}
                key={index}
              >
                <div className={styles.icon}>
                  <span className="material-symbols-outlined">
                    {item.icon}
                  </span>
                </div>
                <div className={styles.body}>
                  <h4>{item.name}</h4>
                  <p>{item.value}</p>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
        <Link to="/signup">
          <motion.button
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.8,
            }}
            transition={{
              duration: 0.1,
            }}
            className={styles.btn}
          >
            Sign Up Now <i className="fa-solid fa-arrow-right"></i>
          </motion.button>
        </Link>
      </div>
    </div>
  )
}

export default Why