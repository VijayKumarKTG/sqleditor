import styles from './Input.module.css';

export default function Input({
  label,
  value,
  onChangeHandler,
  onBlurHandler,
  classNames,
}) {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor='input' className={styles.label}>
        {label}
      </label>
      <input
        className={`${styles.input} ${classNames}`}
        name='input'
        id='input'
        value={value}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
      />
    </div>
  );
}
