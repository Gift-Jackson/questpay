import { motion } from "framer-motion";
import layoutImg from "../../../assets/offerlayout.png";
import Title from "../reusable/Title";
import styles from "./servicelayout.module.css";
import { useRef } from "react";
const ServiceLayout = () => {
  const scrollRef = useRef(null);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <Title
            title="Over 30+ service providers integrated"
            subtitle="At QuestPay, we've got you covered with 30+ top-notch service providers that cater to all your needs. From utility bills to airtime and data top-ups, electricity, cable TV subscriptions&#44; and much more we've got it all on our app."
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ root: scrollRef }}
            transition={{
              delay: 0.2,
            }}
            className={styles.img_wrap}
          >
            <img src={layoutImg} alt="Service Providers" />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ServiceLayout;
