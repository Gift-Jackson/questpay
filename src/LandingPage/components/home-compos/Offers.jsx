import { AnimatePresence, motion } from "framer-motion";
import { offers } from "../../../constants/data";
import { Link } from "react-router-dom";
import { useRef } from "react";
import Title from "../reusable/Title";
import styles from "./offers.module.css";
const Offers = () => {
  const scrollRef = useRef(null);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Title
          title="Discover Our offers"
          subtitle="Tailored Solutions for Your bill payments."
        />
        <ul className={styles.wrapper}>
          <AnimatePresence>
            {offers.map((offer, index) => (
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
                    {offer.icon}
                  </span>
                </div>
                <div className={styles.body}>
                  <h4>{offer.title}</h4>
                  <p>{offer.content}</p>
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
            Get Started <i className="fa-solid fa-arrow-right"></i>
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default Offers;
