import styles from './Input.module.css';

export default function Input({ label, value, onChangeHandler }) {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor='input' className={styles.label}>
        {label}
      </label>
      <input
        className={styles.input}
        name='input'
        id='input'
        value={value}
        onChange={onChangeHandler}
      />
    </div>
  );
}
