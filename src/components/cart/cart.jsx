import Card from '../shop/card/card'
import styles from './cart.module.css'
import { useOutletContext } from 'react-router-dom';
export default function Cart(){
    const [cart, setCart, itemsAmounts, setItemsAmount, changeItemAmount, decrementItemAmount, incrementItemAmount, items, setItems] = useOutletContext();
    return (
        <div className = {styles.flexContainer}>
            {[...cart].map(id => 
                <Card key = {id} title = {items[id-1].title} img = {items[id-1].image} price = {items[id-1].price} decrement={(e) => decrementItemAmount(e, id)} incrementItemAmount={(e) => incrementItemAmount(e, id)}
                    onChange = {(e) => changeItemAmount(e, id)} value = {itemsAmounts[id] || ''}/>
            )}
        </div>
    )
}   