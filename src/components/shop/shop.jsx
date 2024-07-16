import { useEffect } from "react";
import { useState } from "react"
import Header from "../header/header";
import Card from "./card/card";
import styles from "./shop.module.css"
import { useOutletContext } from "react-router-dom";
export default function Shop({amount = '20'}){
    const [items, setItems] = useState([]);
    const [itemsAmounts, setItemsAmount] = useState({});
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useOutletContext();
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products?limit=${amount}`)
        .then(res => res.json())
        .then(res => {
            setItems(res);
            setLoading(false);
        });
    }, [amount]);

    useEffect(() => {
        const initializeItemAmounts = function(){
            for(let i = 0; i<items.length;i++){
                setItemsAmount(prev => ({...prev, [items[i].id]: 0}));
            }
        }
        if(loading){
            return;
        }
        initializeItemAmounts();
    }, [loading, items])
    const changeItemAmount = function(e, id) {
        setCart(prevState => ({...prevState, [id]: {...items[id], amount: parseInt(e.target.value)}}));
        setItemsAmount(prev => ({...prev, [id]: e.target.value}));
    }
    const decrementItemAmount = function(e, id){
        const currAmount = Math.max(0, itemsAmounts[id] - 1);
        setCart(prevState => ({...prevState, [id]: {...items[id], amount: currAmount}}));
        setItemsAmount(prev => ({...prev, [id]: currAmount}));
    }

    const incrementItemAmount = function(e, id){
        const currAmount = Math.min(Number.MAX_SAFE_INTEGER, itemsAmounts[id] + 1);
        setCart(prevState => ({...prevState, [id]: {...items[id], amount: currAmount}}));
        setItemsAmount(prev => ({...prev, [id]: currAmount}));
    }

    
    if(loading) return (<p>loading...</p>)
    return (
        <>
        <div className = {styles.title}>
            SHOP
        </div>
        <div className={styles.gridContainer}>
        {items.map(item => 
            <Card key = {item.id} title = {item.title} img = {item.image} price = {item.price} onChange={(e) => changeItemAmount(e, item.id)} increment = {(e) => incrementItemAmount(e, item.id)} decrement={(e) => decrementItemAmount(e, item.id)} value = {itemsAmounts[item.id] || ''}></Card>
        )}
        </div>
        </>
    )
}