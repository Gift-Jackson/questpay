import PropTypes from "prop-types";
import Header from "./Header";
const Container = ({ children, toggleTheme, darkMode }) => {
  return (
    <>
      <div className="main-container">
        <Header toggleTheme={toggleTheme} darkMode={darkMode} />
        {children}
      </div>
    </>
  );
};

Container.propTypes = {
  children: PropTypes.node,
  toggleTheme: PropTypes.func,
  darkMode: PropTypes.bool,
};

export default Container;
