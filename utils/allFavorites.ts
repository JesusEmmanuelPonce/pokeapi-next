
const allFavorites = (): number[] => {

    return JSON.parse(localStorage.getItem('favorites') || '[]');

}

export default allFavorites