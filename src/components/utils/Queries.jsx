import Select from './Select';
import Button from './Button';
import styles from './Queries.module.css';

export default function Queries() {
  return (
    <div className={styles.queries}>
      <Select />
      <Select />
      <Select />
      <div className={styles.btnContainer}>
        <Button text='Run query' classNames={styles.btnStyles} />
      </div>
      <Select />
      <Select />
      <Select />
      <div className={styles.btnContainer}>
        <Button
          classNames={`${styles.btnStyles} ${styles.bgColorRed}`}
          text='Reset all'
        />
      </div>
    </div>
  );
}
