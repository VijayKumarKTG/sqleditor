import styles from './TableList.module.css';
import layout from '../../assets/layout.svg';
import trash from '../../assets/trash.svg';
import Icon from '../Icon/Icon';

function Navigation() {
  return (
    <ul className={styles.container}>
      <li className={`${styles.item} ${styles.active}`} tabIndex='0'>
        <div>
          <Icon src={layout} alt='layout icon' /> Products
        </div>{' '}
        <Icon src={trash} alt='trash icon' />
      </li>
      <li className={styles.item} tabIndex='0'>
        <div>
          <Icon src={layout} alt='layout icon' /> Orders
        </div>{' '}
        <Icon src={trash} alt='trash icon' />
      </li>
      <li className={styles.item} tabIndex='0'>
        <div>
          <Icon src={layout} alt='layout icon' /> Customers
        </div>{' '}
        <Icon src={trash} alt='trash icon' />
      </li>
      <li className={styles.item} tabIndex='0'>
        <div>
          <Icon src={layout} alt='layout icon' /> Suppliers
        </div>{' '}
        <Icon src={trash} alt='trash icon' />
      </li>
    </ul>
  );
}

export default Navigation;
