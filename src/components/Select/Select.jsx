import styles from './Select.module.css';

export default function Select() {
  return (
    <div className={styles.selectContainer}>
      <label htmlFor='select' className={styles.label}>
        Select column
      </label>
      <select className={styles.select} name='select' id='select'>
        <option className={styles.option} value='products'>
          Products
        </option>
        <option className={styles.option} value='orders'>
          Orders
        </option>
        <option className={styles.option} value='customers'>
          Curstomers
        </option>
        <option className={styles.option} value='suppliers'>
          Suppliers
        </option>
      </select>
    </div>
  );
}
