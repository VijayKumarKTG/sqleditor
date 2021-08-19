import { useState } from 'react';
import styles from './Select.module.css';
import arrowDown from '../../assets/arrow-down.svg';
import arrowUp from '../../assets/arrow-up.svg';

export default function Select({
  all,
  options,
  label,
  value,
  onChangeHandler,
}) {
  const [toggleOptions, setToggleOptions] = useState(false);

  return (
    <div className={styles.selectContainer}>
      <p className={styles.label}>{label}</p>
      <div className={styles.select}>
        <p>{typeof value !== 'string' ? value.join(', ') : value}</p>
        <p onClick={() => setToggleOptions(!toggleOptions)}>
          {toggleOptions ? (
            <img
              className={styles.arrow}
              src={arrowUp}
              alt='arrow showing upward'
            />
          ) : (
            <img
              className={styles.arrow}
              src={arrowDown}
              alt='arrow showing downwards'
            />
          )}
        </p>
      </div>
      {toggleOptions && (
        <ul className={styles.optionsList}>
          {all ? (
            <li
              key='All'
              className={styles.option}
              onClick={() => onChangeHandler('All')}>
              All
            </li>
          ) : null}
          {options.map((option) => (
            <li
              key={option}
              className={styles.option}
              onClick={() => onChangeHandler(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
