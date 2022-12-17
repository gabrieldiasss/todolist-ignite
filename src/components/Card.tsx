import { Trash} from "phosphor-react";
import styles from './Card.module.css'

interface CardProps {
    text: string
}

export function Card({ text }: CardProps) {

    return (
        <article className={styles.card} >
            <div className={styles.content}>
                <div className={styles.custom_checkbox} >
                    <input type="radio" name="" id="" />
                    <label>{text}</label>
                </div>
                <Trash size={20} />
            </div>
        </article>
    )
}