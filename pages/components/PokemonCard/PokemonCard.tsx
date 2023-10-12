import Image from "next/image"
import { FC } from "react"

import { Pokemon } from "@/interfaces/pokemon.interface"

interface IPokemonCardProps {
    pokemon: Pokemon
}

const PokemonCard: FC<IPokemonCardProps> = ({ pokemon }) => {
    return (
        <li key={pokemon?.id}>
            <p>{pokemon?.name}</p>
            <Image
                src={pokemon?.image}
                width={80}
                height={80}
                alt="pokemon"
            />
        </li>
    )
}

export default PokemonCard