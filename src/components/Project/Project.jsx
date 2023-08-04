import styles from './Project.module.css';

const Project = () => {
  /*        ({ repoLink, siteLink, projectName, description } = props)
    ({screenShotSrc} = props)  */

  const projectName = 'projkect';

  return (
    <div className={styles.container}>
      <div className={styles.screenshot}></div>
      <div className={styles.projectDetails}>
        <div className={styles.topBar}>
          <h3 className={styles.projectName}>{projectName}</h3>
          <div className={styles.buttons}>{/* buttons */}</div>
        </div>
      </div>
    </div>
  );
};

export default Project;
