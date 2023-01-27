import { Trash } from "phosphor-react";
import styles from './Card.module.css'

interface CardProps {
    task: Tasks;
    onComplete: (id: string) => void;
    onDelete: (id: string) => void;
}

interface Tasks {
    id: string | undefined;
    message: string;
    isComplete: boolean;
}

export function Card({ task, onComplete, onDelete }: CardProps) {

    return (
        <>
            <article className={styles.card}>
                <div className={styles.content}>
                    <div className={styles.custom_checkbox} >
                        <input id={`checkbox-${task.id}`} type="checkbox" onClick={() => onComplete(task.id as string)} />
                        <label htmlFor={`checkbox-${task.id}`}>{task.message}</label>
                    </div>
                    <Trash onClick={() => onDelete(task.id as string)} className={styles.svg} size={24} />
                </div>
            </article>
        </>

    )
}