import { Header } from './components/Header'
import { CreateTask } from './components/CreateTask'
import './global.css'
import { SectionTask } from './components/SectionTask'
import styles from './App.module.css'

export default function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper} >
        <CreateTask />

        <SectionTask />
      </div>


    </>
  )
}