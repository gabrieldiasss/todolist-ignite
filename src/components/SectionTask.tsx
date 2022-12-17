import { useState } from 'react'
import { Card } from './Card'
import styles from './SectionTask.module.css'

interface Task {
    id: number;
    task: string;
}

export function SectionTask() {

    const [tasks, setTasks] = useState<Task[]>([
        {
            id: 1,
            task:  "Almoçar",
        },
        {
            id: 2,
            task: "Fazer lição",
        }
    ])

    return (
        <div>
            <header className={styles.header} >
                <span>Tarefas criadas</span>

                <span>Concluídas</span>
            </header>

            <main>
                {tasks.map((task) => (
                    <Card key={task.id} text={task.task} />
                ))}
                
            </main>
        </div>
    )
}