import styles from './Portfolio.module.css';
import Project from '../Project/Project';

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <Project />
      <Project />
      <Project />
      <Project />
    </div>
  );
};

export default Portfolio;
