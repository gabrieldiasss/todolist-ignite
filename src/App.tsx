import { Header } from './components/Header'
import './global.css'
import { SectionTask } from './components/SectionTask'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {

  return (
    <>
      <ToastContainer />

      <Header />

      <SectionTask />
    </>
  )
}