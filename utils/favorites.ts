const favorites = (id: number) => {
    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

    if (favorites.includes(id)) {
        favorites = favorites.filter(pokeId => pokeId !== id);
    } else {
        favorites.push(id);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites))
}

export default favorites;