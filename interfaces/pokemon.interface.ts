export interface IPokemonRes {
    count: number;
    next?: string;
    previous?: string;
    results: Pokemon[];
}

export interface Pokemon {
    id: number;
    name: string;
    image: string;
    url: string;
}
