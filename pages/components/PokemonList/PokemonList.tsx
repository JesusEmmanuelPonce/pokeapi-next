import Image from 'next/image';
import { FC } from 'react';

import { Pokemon } from '@/interfaces/pokemon.interface';

interface IPokemonListProps {
    pokemons: Pokemon[]
}

const PokemonList: FC<IPokemonListProps> = ({ pokemons }) => {
    return (
        <ul style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
            {pokemons.map((pokemon =>
                <li key={pokemon?.id}>
                    <p>{pokemon?.name}</p>
                    <Image
                        src={pokemon?.image}
                        width={80}
                        height={80}
                        alt="pokemon"
                    />
                </li>
            ))}
        </ul>
    )
}

export default PokemonList