import styles from './AboutMe.module.css';

function AboutMe() {
  const githubLink =
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg';
  const linkedinLink =
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg';

  return (
    <>
      <div className={styles.container}>
        <div className={styles.frame}>
          <img
            src="/prof_photo_large.jpeg"
            className={styles.logo}
            alt="Photo of author smiling"
          />
          <span className={styles.caption}>Nicholas Maahs</span>
        </div>
        <div className={styles.bio}>
          <div className={styles.bioText}>
            <h3>About me</h3>
            <p>
              about me about me about me about me about me about me about me
              about me about me about me about me about me about me about me
              about me
            </p>
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
        </div>
      </div>
    </>
  );
}

export default AboutMe;
