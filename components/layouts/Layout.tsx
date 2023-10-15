import { FC, ReactNode } from 'react';
import Head from 'next/head';

import Navbar from '../ui/Navbar';
import styles from './layout.module.css'

interface ILayoutProps {
    children: ReactNode;
    title?: String;
}

const Layout: FC<ILayoutProps> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title || 'Pokemon app'}</title>
                <meta name='author' content='Jesús Ponce' />
                <meta name='description' content='Informacion' />
                <meta name='keywords' content={`${title} pokemon, pokedex`} />
            </Head>

            <Navbar />

            <main className={styles.layout}>
                {children}
            </main>
        </>
    )
}

export default Layout