import styles from './footer.module.css'
const Footer = () => {
  return (
      <footer className={styles.footer}>
        <p>
          Powered by <span className="mark">QuestGiG</span> - Copyright &copy;{" "}
          {new Date().getFullYear()} QuestPay
        </p>
      </footer>
  );
};

export default Footer;
