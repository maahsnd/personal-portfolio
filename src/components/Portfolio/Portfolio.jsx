import styles from './Portfolio.module.css';
import Project from '../Project/Project';
import ProjectData from './ProjectData';

const Portfolio = () => {
  const data = ProjectData();

  return (
    <div className={styles.container}>
      <div className={styles.sectionTitle}>
        <h2>My work</h2>
      </div>
      <Project
        title={data[0].title}
        description={data[0].description}
        siteLink={data[0].siteLink}
        repoLink={data[0].repoLink}
        screenShotSrc={data[0].screenShotSrc}
      />
      <Project
        title={data[1].title}
        description={data[1].description}
        siteLink={data[1].siteLink}
        repoLink={data[1].repoLink}
        screenShotSrc={data[1].screenShotSrc}
      />
      <Project />
      <Project />
    </div>
  );
};

export default Portfolio;
