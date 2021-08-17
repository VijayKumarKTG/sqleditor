import styles from './Select.module.css';

export default function Select({ options }) {
  return (
    <div className={styles.selectContainer}>
      <label htmlFor='select' className={styles.label}>
        Select column
      </label>
      <select className={styles.select} name='select' id='select'>
        <option key='*' className={styles.option} value='*'>
          All
        </option>
        {options.map((option) => (
          <option key={option} className={styles.option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
