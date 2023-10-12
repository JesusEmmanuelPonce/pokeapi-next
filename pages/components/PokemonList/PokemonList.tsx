import { FC } from 'react';

import { Pokemon } from '@/interfaces/pokemon.interface';
import PokemonCard from '../PokemonCard';

interface IPokemonListProps {
    pokemons: Pokemon[]
}

const PokemonList: FC<IPokemonListProps> = ({ pokemons }) => {
    return (
        <ul style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
            {pokemons.map((pokemon =>
                <PokemonCard pokemon={pokemon} />
            ))}
        </ul>
    )
}

export default PokemonList