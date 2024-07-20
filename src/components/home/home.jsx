import styles from './home.module.css'
import Header from '../header/header'
import img from '../../assets/wide.webp'
export default function Home({amount}){
    return (
        <div className = {styles.flexContainer}>
            <div className = {styles.imgContainer}>
                <img src = {img} alt = "model wearing beige" height = "601"></img>
            </div>
        <div className={styles.textContainer}>
            <div className={styles.homeBigText}>
                Fashion Gallery
            </div>
            <p>A place where we care about your shopping experience! Feel free to have a look at our catalogue to see what suits your taste.</p>
        </div>
        </div>
    )
}