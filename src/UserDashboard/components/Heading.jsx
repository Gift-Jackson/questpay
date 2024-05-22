import PropTypes from 'prop-types'
import styles from '../Styles/heading.module.css'

const Heading = ({ title }) => {
  return (
    <>
      <h1 className={styles.h1}>{title}</h1>
    </>
  );
};

Heading.propTypes = {
  title:PropTypes.string
}

export default Heading;
