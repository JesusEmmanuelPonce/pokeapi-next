import Image from 'next/image';
import { Progress } from "@nextui-org/react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next"

import styles from './pokemon.module.css';
import Layout from "@/components/layouts/Layout";
import pokeApi from "@/api/pokeApi";
import { PokemonDeatilRes } from "@/interfaces/pokemonDetail.interface";

interface IPokemonByIdProps {
    pokemon: PokemonDeatilRes;
}

const pokemonById: NextPage<IPokemonByIdProps> = ({ pokemon }) => {

    return (
        <Layout>
            <section className={styles.wrapper}>
                <article className={styles.wrapper__pokemon}>
                    <h2>{pokemon?.name}</h2>
                    <Image
                        src={pokemon?.sprites?.other?.dream_world?.front_default || '/no-image.png'}
                        alt={pokemon?.name}
                        width={200}
                        height={200}
                    />

                    <h3>Order: </h3>
                    <p>{pokemon?.order}</p>

                    <h3>Peso: </h3>
                    <p>{pokemon?.weight}Kg</p>

                    <h3>Tipo:</h3>
                    <ul className={styles.wrapper__information_listTypes}>
                        {pokemon?.types.map((type, index) => (
                            <li key={index}>{type?.type?.name}</li>
                        ))}
                    </ul>
                </article>

                <article className={styles.wrapper__information}>

                    <h3>Stats:</h3>
                    <ul className={styles.wrapper__information_stats}>
                        {pokemon?.stats.map((stat, index) => (
                            <li key={index}>
                                <p>{stat?.stat?.name} - {stat?.base_stat}</p>
                                <Progress color="warning" aria-label="Loading..." value={stat?.base_stat} maxValue={150} />
                            </li>
                        ))}
                    </ul>

                    <h3>Sprites:</h3>
                    <ul className={styles.wrapper__information_sprites}>
                        <li>
                            <figure>
                                <Image
                                    src={pokemon?.sprites?.front_default || '/no-image.png'}
                                    height={120}
                                    width={120}
                                    alt={pokemon.name}
                                />
                                <Image
                                    src={pokemon?.sprites?.back_default || '/no-image.png'}
                                    height={120}
                                    width={120}
                                    alt={pokemon.name}
                                />
                            </figure>
                            <p>Default</p>
                        </li>
                        <li>
                            <figure>
                                <Image
                                    src={pokemon?.sprites?.front_shiny || '/no-image.png'}
                                    height={120}
                                    width={120}
                                    alt={pokemon.name}
                                />
                                <Image
                                    src={pokemon?.sprites?.back_shiny || '/no-image.png'}
                                    height={120}
                                    width={120}
                                    alt={pokemon.name}
                                />
                            </figure>
                            <p>Shiny</p>
                        </li>
                    </ul>
                </article>
            </section>
        </Layout>
    )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const totalPokemons = [...Array(151)].map((value, index) => `${index + 1}`);

    return {
        paths: totalPokemons.map(id => ({ params: { id } })),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { id } = params as { id: string };

    const { data } = await pokeApi.get<PokemonDeatilRes>(`/pokemon/${id}`)

    return {
        props: {
            pokemon: data
        }
    }
}

export default pokemonById