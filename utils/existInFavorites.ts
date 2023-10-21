const existInFavorites = (id: number): boolean => {

    if (typeof window === 'undefined') return false;

    const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

    return favorites.includes(id)
}

export default existInFavorites;