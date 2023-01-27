import { ChangeEvent, useState } from 'react'
import { Card } from './Card'
import styles from './SectionTask.module.css'
import { PlusCircle } from "phosphor-react";
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';

interface Tasks {
    id: string | undefined;
    message: string;
    isComplete: boolean
}

export function SectionTask() {

    const [newTaskText, setNewTask] = useState("")
    const [check, setCheck] = useState<boolean>(false)

    const [tasks, setTasks] = useState<Tasks[]>([])

    const newTask: Tasks = {
        id: uuidv4(),
        message: newTaskText,
        isComplete: false
    }

    const tasksCompletedNumber = tasks.filter(task => task.isComplete === true).length


    function handleCreateNewTask() {

        if (newTaskText === "") {
            toast.error("Campo vázio")

            return
        }

        setTasks([...tasks as Tasks[], newTask])
        setNewTask("")
    }

    function handleCompleteTask(id: string) {
        const newTasks = tasks.map(task => {
            if(task.id === id) {
                return {
                    ...task,
                    isComplete: !task.isComplete
                }
            }

            return task
        })

        setTasks(newTasks)
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
                    <strong>
                        Tarefas criadas <span>{tasks.length}</span>
                    </strong>
                    
                    <strong>
                        Concluídas <span>{tasksCompletedNumber} de {tasks.length}</span>
                    </strong>
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