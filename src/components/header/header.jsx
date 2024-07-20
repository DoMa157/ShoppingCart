import styles from "./header.module.css";
import shoppingCart from "../../assets/shopping-bag.svg";
import search from "../../assets/search.svg";
import { Link } from "react-router-dom";
export default function Header({ cart, itemsAmounts, searchFunction }) {
  const cartAmount = function () {
    let sum = 0;
    let newCart = [...cart];
    for (let i = 0; i < newCart.length; i++) {
      sum += itemsAmounts[newCart[i]];
    }
    return sum;
  };
  return (
    <div className={styles.headerFlexContainer}>
      <div className={styles.flexContainer}>
        Fashion Gallery
      </div>
      <div className={styles.flexContainer}>
        <Link to="home" className={styles.headerBtn}>
          Home
        </Link>
        <Link to="shop" className={styles.headerBtn}>
          Shop
        </Link>
        <div className={styles.flexContainer}>
            <input
              className={styles.inputField}
              type="text"
              placeholder="Search for an item..."
              onChange={searchFunction}
            ></input>
            <img src={search} width="25px"></img>
        </div>
        <Link to =  "cart" className={styles.imgBtn}>
          <img src={shoppingCart} width="25px"></img>
          <div>{cartAmount()}</div>
        </Link>
      </div>
    </div>
  );
}
