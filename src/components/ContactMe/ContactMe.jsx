import styles from './ContactMe.module.css';

const AboutMe = () => {
  return (
    <>
      <footer className={styles.container}>
        <h4 className={styles.title}>Contact Me</h4>
        <p className={styles.text}>
          Please get in touch if you think our work could be mutually
          beneficial!
        </p>
        <div className={styles.email}>
          <a href="mailto:nmaahs11@gmail.com" className={styles.emailA}>
            <img
              className={styles.emailIcon}
              src="https://res.cloudinary.com/dscsiijis/image/upload/v1691595031/portfolio%20assets/mail-142_1_pyqama.svg"
              alt="Email icon"
            />
          </a>
          <p className={styles.emailText}>nmaahs11@gmail.com</p>
        </div>
      </footer>
    </>
  );
};

export default AboutMe;
