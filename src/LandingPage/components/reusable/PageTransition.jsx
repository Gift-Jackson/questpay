import { motion } from "framer-motion";
import PropTypes from "prop-types";

const PageTransition = ({ children }) => {
  const pageVars = {
    initial: {
      opacity: 0,
      x:100,
    },
    animate: {
      opacity: 1,
      x:0,
    },
    exit: {
      opacity: 0,
      x:100,
    },
  };
  return (
    <motion.div
      variants={pageVars}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        delay: 0.5,
      }}
    >
      <div className="main-container">{children}</div>
    </motion.div>
  );
};

PageTransition.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageTransition;
