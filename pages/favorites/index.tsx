import Layout from "@/components/layouts"
import styles from "./favorites.module.css";
import NoFavorites from "@/components/NoFavorites";

const Favorites = () => {
    return (
        <Layout title="Favorites">
            <section className={styles.favorites}>
                <NoFavorites />
            </section>
        </Layout>
    )
}

export default Favorites