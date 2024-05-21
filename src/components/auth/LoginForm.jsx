import { motion } from "framer-motion";
import Title from "../reusable/Title";
import styles from "./authform.module.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
const LoginForm = () => {
    const navigate = useNavigate()
  const [formData, setFormdata] = useState([
    {
      email: "",
      password: "",
    },
  ]);

  const [loading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormdata((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email) {
      toast.error("Please enter your e-mail address!", {
        style: {
          border: "none",
          backgroundColor: "crimson",
          color: "#fefefe",
        },
      });
    } else if (!formData.password) {
      toast.error("Password is required!", {
        style: {
          border: "none",
          backgroundColor: "crimson",
          color: "#fefefe",
        },
      });
    } else if (formData.password.length < 6) {
      toast.error("Password should be 6 or more characters!", {
        style: {
          border: "none",
          backgroundColor: "crimson",
          color: "#fefefe",
        },
      });
    } else {
      setFormdata({
        name: "",
        email: "",
        phonenumber: "",
        password: "",
      });
      toast.success("Login successful!", {
        style: {
          border: "none",
          backgroundColor: "mediumseagreen",
          color: "#fefefe",
        },
      });
        setTimeout(() => {
            navigate("/dashboard")
        },3000)
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Title
          title="Welcome Back"
          subtitle="Login into your account to continue"
        />
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.grp}>
            <label htmlFor="email">E-mail Address:</label>
            <div className={styles.inp}>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="e.g hello@world.com"
                autoComplete="off"
                value={formData.email}
                onChange={handleChange}
              />
              <i className="fa-solid fa-envelope"></i>
            </div>
          </div>
          <div className={styles.grp}>
            <label htmlFor="password">Password:</label>
            <div className={styles.inp}>
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                id="password"
                placeholder="6+ characters"
                autoComplete="off"
                value={formData.password}
                onChange={handleChange}
              />
              <i className="fa-solid fa-lock"></i>
              <div className={styles.eye} onClick={togglePasswordVisibility}>
                <span className="material-symbols-outlined">
                  {passwordVisible ? "visibility" : "visibility_off"}
                </span>
              </div>
            </div>
          </div>
          <div className={styles.forgot_pass}>
            <Link to="/forgot-password">Forgotten password?</Link>
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
        <p className={styles.info}>
          Don&apos;t have an account?{" "}
          <Link className={styles.link} to="/signup">
            Sign Up
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
