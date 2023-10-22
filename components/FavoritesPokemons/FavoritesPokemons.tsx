import Image from "next/image";
import { FC } from "react";

import styles from "./favoritesPokemons.module.css";

interface IFavoritesPokemonsProps {
    ids: number[]
}

const FavoritesPokemons: FC<IFavoritesPokemonsProps> = ({ ids }) => {
    return (
        <ul className={styles.favoritesPokemons}>
            {ids.map(id => (
                <li key={id}>
                    <Image
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                        height={100}
                        width={100}
                        alt="pokemon"
                    />
                </li>
            ))}
        </ul>
    )
}

export default FavoritesPokemons