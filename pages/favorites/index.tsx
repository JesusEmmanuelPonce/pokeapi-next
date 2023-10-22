import { useEffect, useState } from "react";

import Layout from "@/components/layouts"
import styles from "./favorites.module.css";
import NoFavorites from "@/components/NoFavorites";
import allFavorites from "@/utils/allFavorites";
import FavoritesPokemons from "@/components/FavoritesPokemons";

const Favorites = () => {

    const [allPokeID, setAllPokeID] = useState<number[]>([]);

    useEffect(() => {

        setAllPokeID(allFavorites())

    }, [])

    return (
        <Layout title="Favorites">
            <section className={styles.favorites}>
                {allPokeID.length === 0 ?
                    <NoFavorites /> :
                    <FavoritesPokemons ids={allPokeID} />
                }
            </section>
        </Layout>
    )
}

export default Favorites