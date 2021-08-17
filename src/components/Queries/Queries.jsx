import Select from '../Select/Select';
import Button from '../Button/Button';
import styles from './Queries.module.css';
//import play from '../../assets/play.svg';

export default function Queries({ cols }) {
  return (
    <div className={styles.queries}>
      <Select options={cols} />
      <Select options={cols} />
      <Select options={cols} />
      <Button classNames={`${styles.btnStyles} ${styles.bgColorRed}`}>
        Reset all
      </Button>
    </div>
  );
}
