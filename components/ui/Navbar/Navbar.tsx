import Link from 'next/link';
import styles from './navbar.module.css';

const Navbar = () => {

    return (
        <nav className={styles.navbar}>
            <Link href="/">Poke-Api</Link>
            <Link href="/favorites">Favoritos</Link>
        </nav>
    )
}

export default Navbar