export const getRandomMeal = async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const jsonRes = await response.json()
    return jsonRes.meals
}

export const getSearchedMeal = async (enteredKeyword) => {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${enteredKeyword}`);
        const jsonRes = await response.json()
        return jsonRes.meals
    } catch (e) {
        console.log(e)
    }
}