import { useEffect } from "react";
import { useState } from "react"
import Header from "../header/header";
import Card from "./card/card";
import styles from "./shop.module.css"
import { useOutletContext } from "react-router-dom";
export default function Shop(){
    const [cart, setCart, itemsAmounts, setItemsAmount, changeItemAmount, decrementItemAmount, incrementItemAmount, items, setItems] = useOutletContext();
    
    const loading = (items == undefined);
    if(loading) return (<p>loading...</p>)
    return (
        <div className = {styles.parentContainer}>
        <div className = {styles.title}>
            SHOP
        </div>
        <div className={styles.gridContainer}>
        {items.map(item => 
            <Card key = {item.id} title = {item.title} img = {item.image} price = {item.price} onChange={(e) => changeItemAmount(e, item.id)} increment = {(e) => incrementItemAmount(e, item.id)} decrement={(e) => decrementItemAmount(e, item.id)} value = {itemsAmounts[item.id] || ''}></Card>
        )}
        </div>
        </div>
    )
}