import styles from './Portfolio.module.css';
import Project from '../Project/Project';

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <Project />
    </div>
  );
};

export default Portfolio;
