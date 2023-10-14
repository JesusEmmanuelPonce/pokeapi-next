import { GetStaticPaths, GetStaticProps, NextPage } from "next"

import pokeApi from "@/api/pokeApi";
import { PokemonDeatilRes } from "@/interfaces/pokemonDetail.interface";

interface IPokemonByIdProps {
    pokemon: PokemonDeatilRes;
}

const pokemonById: NextPage<IPokemonByIdProps> = ({ pokemon }) => {

    return (
        <div>pokemonById</div>
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