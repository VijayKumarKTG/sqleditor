import styles from './Select.module.css';

export default function Select({
  all,
  options,
  label,
  value,
  onChangeHandler,
}) {
  return (
    <div className={styles.selectContainer}>
      <label htmlFor='select' className={styles.label}>
        {label}
      </label>
      <select
        className={styles.select}
        value={value}
        name='select'
        id='select'
        onChange={(e) => onChangeHandler(e)}>
        {all ? (
          <option key='all' className={styles.option} value='all'>
            All
          </option>
        ) : null}
        {options.map((option) => (
          <option key={option} className={styles.option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
