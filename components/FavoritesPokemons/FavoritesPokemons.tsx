import Image from "next/image";
import { FC } from "react";
import { useRouter } from "next/router";

import styles from "./favoritesPokemons.module.css";

interface IFavoritesPokemonsProps {
    ids: number[]
}

const FavoritesPokemons: FC<IFavoritesPokemonsProps> = ({ ids }) => {

    const router = useRouter();

    const goToDetail = (id: number) => {
        router.push(`/pokemon/${id}`)
    }

    return (
        <ul className={styles.favoritesPokemons}>
            {ids.map(id => (
                <li key={id}>
                    <Image
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                        height={100}
                        width={100}
                        alt="pokemon"
                        onClick={() => goToDetail(id)}
                    />
                </li>
            ))}
        </ul>
    )
}

export default FavoritesPokemons