import styles from './ContactMe.module.css';

const AboutMe = () => {
  const githubLink =
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg';
  const linkedinLink =
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg';

  return (
    <>
      <footer className={styles.container}>
        <h4 className={styles.title}>Contact Me!</h4>
        <p className={styles.text}>
          My inbox is open, and I'm always happy to talk.
        </p>
        <div className={styles.email}>
          <a href="mailto:nmaahs11@gmail.com" className={styles.emailA}>
            <img
              className={styles.emailIcon}
              src="https://res.cloudinary.com/dscsiijis/image/upload/v1691595031/portfolio%20assets/mail-142_1_pyqama.svg"
              alt="Email icon"
            />
          </a>
          <a className={styles.emailText} href="mailto:nmaahs11@gmail.com">
            nmaahs11@gmail.com
          </a>
        </div>

        <div className={styles.btnContainer}>
          <a href="https://github.com/maahsnd">
            <img src={githubLink} className={styles.icon} />
          </a>
          <a href="https://www.linkedin.com/in/nicholas-maahs/">
            {' '}
            <img src={linkedinLink} className={styles.icon} />
          </a>
        </div>
      </footer>
    </>
  );
};

export default AboutMe;
