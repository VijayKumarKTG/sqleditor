import styles from './Select.module.css';

export default function Select() {
  return (
    <div>
      <label htmlFor='select' className={styles.label}>
        Select column
      </label>
      <select className={styles.select} name='select' id='select'>
        <option value='products'>Products</option>
        <option value='orders'>Orders</option>
        <option value='customers'>Curstomers</option>
        <option value='suppliers'>Suppliers</option>
      </select>
    </div>
  );
}
