import Image from "next/image"
import { FC } from "react"

import { Pokemon } from "@/interfaces/pokemon.interface"
import styles from './pokemonCard.module.css'
import { useRouter } from "next/router"

interface IPokemonCardProps {
    pokemon: Pokemon
}

const PokemonCard: FC<IPokemonCardProps> = ({ pokemon }) => {

    const router = useRouter();

    const goByDetail = () => {
        router.push(`/pokemon/${pokemon?.id}`)
    }

    return (
        <li className={styles.pokemonCard} key={pokemon?.id}>
            <p className={styles.pokemonCard__name}>{pokemon?.name}</p>
            <Image
                src={pokemon?.image}
                width={80}
                height={80}
                alt="pokemon"
                onClick={goByDetail}
            />
        </li>
    )
}

export default PokemonCard