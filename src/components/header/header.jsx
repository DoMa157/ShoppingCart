import styles from "./header.module.css";
import shoppingCart from "../../assets/shopping-bag.svg";
import search from "../../assets/search.svg";
import { Link } from "react-router-dom";
export default function Header({ cart, current }) {
  const cartAmount = function () {
    const cartList = Object.keys(cart);
    let sum = 0;
    for (let i = 0; i < cartList.length; i++) {
      sum += cart[cartList[i]].amount;
    }
    return sum;
  };
  return (
    <div className={styles.headerFlexContainer}>
      <div className={styles.flexContainer}>
        Fashion Gallery
      </div>
      <div className={styles.flexContainer}>
        <Link to={current == "shop" ? "/" : "home"} className={styles.headerBtn}>
          Home
        </Link>
        <Link to={current == "shop" ? "" : "shop"} className={styles.headerBtn}>
          Shop
        </Link>
        <div className={styles.flexContainer}>
            <input
              className={styles.inputField}
              type="text"
              placeholder="Search for an item..."
            ></input>
            <img src={search} width="25px"></img>
        </div>
        <Link to =  "/" className={styles.imgBtn}>
          <img src={shoppingCart} width="25px"></img>
          <div>{cart == undefined ? 0 : cartAmount()}</div>
        </Link>
      </div>
    </div>
  );
}
