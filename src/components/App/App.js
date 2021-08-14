import styles from './App.module.css';
import Logo from '../utils/Logo';
import Navigation from '../utils/Navigation';
import Queries from '../utils/Queries';
import user from '../../assets/user.svg';

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.leftPanel}>
        <header className={styles.header}>
          <Logo /> SQL Editor
        </header>
        <div className={styles.profile}>
          <img src={user} alt='user' className={styles.user} />
          <p className={styles.userName}>John Doe</p>
          <p className={styles.userPost}>Database Admin</p>
        </div>
        <Navigation />
      </div>
      <div className={styles.rightPanel}>
        <Queries />
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <tr className={styles.tableHead}>
              <th>productID</th> <th>productName</th> <th>supplierID</th>{' '}
              <th>categoryID</th> <th>quantityPerUnit</th> <th>unitPrice</th>{' '}
              <th>unitsInStock</th> <th>unitsOnOrder</th> <th>reorderLevel</th>{' '}
              <th>discontinued</th>
            </tr>
            <tr>
              <td>1</td> <td>Chai</td> <td>1</td> <td>1</td>{' '}
              <td>10 boxes x 20 bags</td> <td>18.00</td> <td>39</td> <td>0</td>{' '}
              <td>10</td> <td>0</td>
            </tr>
            <tr>
              <td>2</td> <td>Chang</td> <td>1</td> <td>1</td>{' '}
              <td>24 - 12 oz bottles</td> <td>19.00</td> <td>17</td> <td>40</td>{' '}
              <td>25</td> <td>0</td>
            </tr>
            <tr>
              <td>3</td> <td>Aniseed Syrup</td> <td>1</td> <td>2</td>{' '}
              <td>12 - 550 ml bottles</td> <td>10.00</td> <td>13</td>{' '}
              <td>70</td> <td>25</td> <td>0</td>
            </tr>
            <tr>
              <td>4</td> <td>Chef Anton's Cajun Seasoning</td> <td>2</td>{' '}
              <td>2</td> <td>48 - 6 oz jars</td> <td>22.00</td> <td>53</td>{' '}
              <td>0</td> <td>0</td> <td>0</td>
            </tr>
            <tr>
              <td>5</td> <td>Chef Anton's Gumbo Mix</td> <td>2</td> <td>2</td>{' '}
              <td>36 boxes</td> <td>21.35</td> <td>0</td> <td>0</td> <td>0</td>{' '}
              <td>1</td>
            </tr>
            <tr>
              <td>6</td> <td>Grandma's Boysenberry Spread</td> <td>3</td>{' '}
              <td>2</td> <td>12 - 8 oz jars</td> <td>25.00</td> <td>120</td>{' '}
              <td>0</td> <td>25</td> <td>0</td>
            </tr>
            <tr>
              <td>7</td> <td>Uncle Bob's Organic Dried Pears</td> <td>3</td>{' '}
              <td>7</td> <td>12 - 1 lb pkgs.</td> <td>30.00</td> <td>15</td>{' '}
              <td>0</td>
              <td>10</td> <td>0</td>
            </tr>
            <tr>
              <td>8</td> <td>Northwoods Cranberry Sauce</td> <td>3</td>{' '}
              <td>2</td> <td>12 - 12 oz jars</td> <td>40.00</td> <td>6</td>{' '}
              <td>0</td> <td>0</td> <td>0</td>
            </tr>
            <tr>
              <td>9</td> <td>Mishi Kobe Niku</td> <td>4</td> <td>6</td>{' '}
              <td>18 - 500 g pkgs.</td> <td>97.00</td> <td>29</td> <td>0</td>{' '}
              <td>0</td> <td>1</td>
            </tr>
            <tr>
              <td>10</td> <td>Ikura</td> <td>4</td> <td>8</td>{' '}
              <td>12 - 200 ml jars</td> <td>31.00</td> <td>31</td> <td>0</td>{' '}
              <td>0</td> <td>0</td>
            </tr>
            <tr>
              <td>11</td> <td>Queso Cabrales</td> <td>5</td> <td>4</td>{' '}
              <td>1 kg pkg.</td> <td>21.00</td> <td>22</td> <td>30</td>{' '}
              <td>30</td> <td>0</td>
            </tr>
            <tr>
              <td>12</td> <td>Queso Manchego La Pastora</td> <td>5</td>{' '}
              <td>4</td> <td>10 - 500 g pkgs.</td> <td>38.00</td> <td>86</td>{' '}
              <td>0</td> <td>0</td> <td>0</td>
            </tr>
            <tr>
              <td>13</td> <td>Konbu</td> <td>6</td> <td>8</td> <td>2 kg box</td>{' '}
              <td>6.00</td> <td>24</td> <td>0</td> <td>5</td> <td>0</td>
            </tr>
            <tr>
              <td>14</td> <td>Tofu</td> <td>6</td> <td>7</td>{' '}
              <td>40 - 100 g pkgs.</td> <td>23.25</td> <td>35</td> <td>0</td>{' '}
              <td>0</td> <td>0</td>
            </tr>
            <tr>
              <td>15</td> <td>Genen Shouyu</td> <td>6</td> <td>2</td>{' '}
              <td>24 - 250 ml bottles</td> <td>15.50</td> <td>39</td> <td>0</td>{' '}
              <td>5</td> <td>0</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
