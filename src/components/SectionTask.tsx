import { useState } from 'react'
import { Card } from './Card'
import styles from './SectionTask.module.css'
import { PlusCircle } from "phosphor-react";
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';

interface Tasks {
    id: string | undefined;
    task: string;
    isComplete: boolean;
}

export function SectionTask() {

    const [newTaskText, setNewTask] = useState("")
    const [isComplete, setIsComplete] = useState(false)

    const [tasks, setTasks] = useState<Tasks[]>([])

    function handleCreateNewTask() {

        const newTask: Tasks = {
            id: uuidv4(),
            task: newTaskText,
            isComplete,
        }

        if (newTaskText === "") {
            toast.error("Campo vázio")

            return
        }

        setTasks([...tasks as Tasks[], newTask])
        setNewTask("")
    }

    function handleCompleteTask(id: string) {
        alert(id)
    }

    function handleDeleteTask(id: string) {
        setTasks(tasks.filter(task => task.id !== id))
    }

    return (
        <div className={styles.wrapper} >
            <div className={styles.sectionCreateTask} >
                <input onChange={(e) => setNewTask(e.target.value)} value={newTaskText} type="text" placeholder="Adicione uma nova tarefa" />
                <button onClick={handleCreateNewTask} type="submit" >
                    Criar <PlusCircle size={20} />
                </button>
            </div>

            <div>
                <header className={styles.header}>
                    <span>
                        Tarefas criadas
                    </span>

                    <span>Concluídas</span>
                </header>

                <main>
                    {tasks?.map((task) => (
                        <Card key={task.id} onDelete={handleDeleteTask} onComplete={handleCompleteTask} task={task} />
                    ))}
                </main>
            </div>
        </div>
    )
}