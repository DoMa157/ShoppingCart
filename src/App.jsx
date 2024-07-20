import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/home/home";
import Header from "./components/header/header";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

function App({ amount }) {
  const [cart, setCart] = useState(new Set());
  const [itemsAmounts, setItemsAmount] = useState({});
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products?limit=${amount}`)
      .then((res) => res.json())
      .then((res) => {
        setItems(res);
      });
  }, [setItems]);

  useEffect(() => {
    const initializeItemAmounts = function () {
      for (let i = 0; i < items.length; i++) {
        setItemsAmount((prev) => ({ ...prev, [items[i].id]: 0 }));
      }
    };
    initializeItemAmounts();
  }, [items, setItemsAmount]);

  const changeItemAmount = function (e, id) {
    let newCart = new Set([...cart, id]);
    setCart(newCart);
    setItemsAmount((prev) => ({ ...prev, [id]: parseInt(e.target.value) || 0 }));
  };
  const decrementItemAmount = function (e, id) {
    let newCart = new Set([...cart, id]);
    const currAmount = Math.max(0, itemsAmounts[id] - 1);
    if (currAmount <= 0) {
      newCart.delete(id);
    }
    setCart(newCart);
    setItemsAmount((prev) => ({ ...prev, [id]: currAmount }));
  };

  const incrementItemAmount = function (e, id) {
    let newCart = new Set([...cart, id]);
    const currAmount = Math.min(Number.MAX_SAFE_INTEGER, itemsAmounts[id] + 1);
    setCart(newCart);
    setItemsAmount((prev) => ({ ...prev, [id]: currAmount }));
  };

  const searchForItem = function(e, itemName){
    return items.filter(x => x.title.includes(itemName));
  }
  return (
    <>
      <Header cart={cart} itemsAmounts={itemsAmounts} searchFunction={searchForItem}/>
      <Outlet
        context={[
          cart,
          setCart,
          itemsAmounts,
          setItemsAmount,
          changeItemAmount,
          decrementItemAmount,
          incrementItemAmount,
          items,
          setItems,
        ]}
      />
    </>
  );
}

export default App;
