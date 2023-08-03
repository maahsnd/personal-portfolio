import styles from './AboutMe.module.css';

function AboutMe() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.frame}>
          <img src="/prof_photo.jpeg" className="logo" alt="Photo of author" />
          <span className={styles.caption}>Nicholas Maahs</span>
        </div>
        <div className={styles.bio}>
          <h3>About me</h3>
          <p>
            about me about me about me about me about me about me about me about
            me about me about me about me about me about me about me about me
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
