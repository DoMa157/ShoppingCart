import styles from './card.module.css'
export default function Card({title, img, price,onChange, decrement, increment, value}){

    return (
        <div className={styles.flexContainer}>
            <div className={styles.imgContainer}><img src = {img}/></div>
            <div>
                <div className={styles.cardTitle}>{title}</div>
                <div className = {styles.cardPrice}>${price}</div>
            </div>
            <div className = {styles.amountContainer}>
                <button type = "submit" onClick={decrement}>-</button>
                <input className = {styles.input} type = "number" name = "amount" placeholder='Insert amount...' onChange={onChange} value={value}></input>
                <button type = "submit" onClick={increment}>+</button>
            </div>
        </div>
    )
}