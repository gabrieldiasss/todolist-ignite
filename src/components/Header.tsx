import Logo from '../assets/logo.svg'
import styles from './Header.module.css'

export function Header() {
    return (
        <header className={styles.header} >
            <div className={styles.content} >
                <img src={Logo} alt="" />
            </div>
        </header>
    )
}