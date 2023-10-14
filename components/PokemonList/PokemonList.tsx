import { FC } from 'react';

import { Pokemon } from '@/interfaces/pokemon.interface';
import PokemonCard from '../PokemonCard';
import styles from './pokemonList.module.css'

interface IPokemonListProps {
    pokemons: Pokemon[]
}

const PokemonList: FC<IPokemonListProps> = ({ pokemons }) => {
    return (
        <ul className={styles.pokemonList}>
            {pokemons.map((pokemon =>
                <PokemonCard
                    key={pokemon?.id}
                    pokemon={pokemon}
                />
            ))}
        </ul>
    )
}

export default PokemonList