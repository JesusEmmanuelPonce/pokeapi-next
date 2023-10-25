import pokeApi from "./pokeApi";
import { PokemonDeatilRes } from "@/interfaces/pokemonDetail.interface";

const getPokemons = async (id: string) => {
    try {
        const { data } = await pokeApi.get<PokemonDeatilRes>(`/pokemon/${id}`)

        const pokemon = {
            id: data?.id,
            name: data?.name,
            order: data?.order,
            types: data?.types,
            stats: data?.stats,
            weight: data?.weight,
            sprites: data?.sprites,
        }

        return pokemon

    } catch (error) {
        return null
    }
}

export default getPokemons