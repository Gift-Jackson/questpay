import { motion } from "framer-motion";
import Title from "../reusable/Title";
import styles from "./authform.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
const LoginForm = () => {
  const [loading] = useState();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <Title
            title="Welcome Back"
            subtitle="Login into your account to continue"
          />
          <form className={styles.form}>
            
            <div className={styles.grp}>
              <label htmlFor="email">E-mail Address:</label>
              <div className={styles.inp}>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="e.g hello@world.com"
                  autoComplete="off"
                />
                <i className="fa-regular fa-envelope"></i>
              </div>
            </div>
            <div className={styles.grp}>
              <label htmlFor="password">Password:</label>
              <div className={styles.inp}>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="6+ characters"
                  autoComplete="off"
                />
                <i className="fa-regular fa-envelope"></i>
              </div>
            </div>

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
              type="submit"
              className={styles.btn}
            >
              {loading ? "Submitting..." : "Submit"}
            </motion.button>
                  </form>
                  <p className={styles.info}>Don&apos;t have an account? <Link className={styles.link} to="/signup">sign Up</Link> </p>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
