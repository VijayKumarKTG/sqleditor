import Select from './Select';
import Button from './Button';
import styles from './Queries.module.css';
import play from '../../assets/play.svg';

export default function Queries() {
  return (
    <div className={styles.queries}>
      <Select />
      <Select />
      <Select />
      <Button classNames={`${styles.btnStyles} ${styles.btnPlay}`}>
        <img
          src={play}
          alt='play button to run queries'
          className={styles.play}
        />
      </Button>
      <Button classNames={`${styles.btnStyles} ${styles.bgColorRed}`}>
        Reset all
      </Button>
    </div>
  );
}
