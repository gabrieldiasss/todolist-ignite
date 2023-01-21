import { Trash } from "phosphor-react";
import styles from './Card.module.css'

interface CardProps {
    task: Tasks;
    onComplete: (id: string) => void;
    onDelete: (id: string) => void;
}

interface Tasks {
    id: string | undefined;
    task: string;
    isComplete: boolean;
}

export function Card({ task, onComplete, onDelete }: CardProps) {

    return (
        <article className={styles.card} >
            <div className={styles.content}>
                <div className={styles.custom_checkbox} >
                    <input id="checkbox-1" type="checkbox" />
                    <label htmlFor="checkbox-1">Checkbox 1</label>
                </div>
            <Trash onClick={() => onDelete(task.id as string)} className={styles.svg} size={24} />
        </div>
        </article>
    )
}