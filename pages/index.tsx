import { NextPage } from 'next';
import { GetStaticProps } from 'next';

import Layout from './components/layouts'
import pokeApi from '@/api/pokeApi';
import PokemonList from './components/PokemonList';
import { IPokemonRes, Pokemon } from '@/interfaces/pokemon.interface';

interface IHomeProps {
  pokemons: Pokemon[]
}

const Home: NextPage<IHomeProps> = ({ pokemons }) => {

  return (
    <Layout>
      <PokemonList pokemons={pokemons} />
    </Layout >
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await pokeApi.get<IPokemonRes>('/pokemon?limit=151')

  const pokemons: Pokemon[] = data?.results.map((result, i) => ({
    ...result,
    id: i + 1,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
  }))

  return {
    props: {
      pokemons
    }
  }
}

export default Home;
