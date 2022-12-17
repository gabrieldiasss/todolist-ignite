import styles from './CreateTask.module.css'
import { PlusCircle} from "phosphor-react";

export function CreateTask() {

    return (
        <div className={styles.sectionCreateTask} >
            <input type="text" placeholder="Adicione uma nova tarefa" />
            <button type="submit">
                Criar <PlusCircle size={20} />
            </button>
        </div>
    )
}