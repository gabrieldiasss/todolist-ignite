import { Trash} from "phosphor-react";
import styles from './Card.module.css'

interface CardProps {
    text: string
}

export function Card({ text }: CardProps) {

    return (
        <article className={styles.card} >
            <div className={styles.content}>
                <div className={styles.custom_radio} >
                    <input type="checkbox" name="checkboxTask" id="checkboxTask" />
                    <label htmlFor="checkboxTask">{text}</label>
                </div>

                <Trash className={styles.svg} size={24} />
            </div>
        </article>
    )
}