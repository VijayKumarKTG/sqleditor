import styles from './Textarea.module.css';

export default function Textarea({
  label,
  value,
  onChangeHandler,
  onBlurHandler,
  classNames,
}) {
  return (
    <div className={styles.textareaContainer}>
      <label htmlFor='textarea' className={styles.label}>
        {label}
      </label>
      <textarea
        className={`${styles.textarea} ${classNames}`}
        name='textarea'
        id='textarea'
        value={value}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
      />
    </div>
  );
}
