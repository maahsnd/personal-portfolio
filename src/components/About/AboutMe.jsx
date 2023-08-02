import styles from './AboutMe.module.css';

function AboutMe() {
  return (
    <div className={styles.frame}>
      <img src="/prof_photo.jpeg" className="logo" alt="Photo of author" />
    </div>
  );
}

export default AboutMe;
