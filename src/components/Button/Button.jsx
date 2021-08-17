import styles from './Button.module.css';

export default function Button({ classNames, onClickHandler, children }) {
  return (
    <button
      className={`${styles.button} ${classNames}`}
      onClick={onClickHandler}>
      {children}
    </button>
  );
}
