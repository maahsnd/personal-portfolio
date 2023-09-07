import styles from './AboutMe.module.css';

function AboutMe() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.contentContainer}>
          <div className={styles.frame}>
            <img
              src="https://res.cloudinary.com/dscsiijis/image/upload/v1694124199/portfolio%20assets/prof_photo_large_orfrjs.jpg"
              className={styles.logo}
              alt="Photo of author smiling"
            />
          </div>
          <div className={styles.bio}>
            <div className={styles.sectionTitle}>
              <h2>About </h2>
              <div></div>
            </div>
            <div>
              <p className={styles.bioText}>
                I'm a software engineer, self-taught via Harvard's CS50x and The
                Odin Project. I'm an obsessive problem-solver, a life-long
                learner, and a compassionate co-worker. A former journalist and
                marketing writer, I communicate economically and with an
                elegance few engineers can rival. I consider myself a craftsman,
                and strive to engineer as I write, pursuing the joy of writing
                clean, thoughtful code.
                {/* ALT-TEXT, TAKEN FROM GUIDORIAL: If I don't know it, I figure it out.
              Committed to the idea of life-long learning, I am passionate about web development 
              and the endless possibilities it offers. 
              I am always seeking new challenges and opportunities to grow and improve as a developer.
              Whether working on a personal project or collaborating with a team, I am committed to 
              delivering high-quality and scalable 
              web applications that meet the needs of users and businesses. */}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
