import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer';

const initialState = {
    showMealInfo: false,
    mealSearchedFor: '',
    meals: [/*{
        idMeal: "52836",
        strMeal: "Seafood fideuà",
        strDrinkAlternate: null,
        strCategory: "Seafood",
        strArea: "Spanish",
        strInstructions: "Boil the kettle. Empty the mussels into a colander and run under cold water. Throw away any with broken shells. Pick through the shells, tapping each one on the side of the sink – they should be closed or should slowly close when tapped – if they stay open, throw them away. If any of the shells still have barnacles or stringy beards attached, pull them off with a cutlery knife and rinse the shells well. Keep in the colander, covered with a cold, damp cloth, until you’re ready to cook. Peel the prawn shells on the body section only – leave the heads and tails intact. Score down the backs and pull out any gritty entrails. Chill until you’re ready to cook.\r\nPut the saffron in a small cup, cover with 50ml kettle-hot water and set aside for 10 mins. If using vermicelli, put in a bowl and crush to little pieces (about 1cm long) with your hands.\r\nHeat the oil in a large frying pan with at least a 3cm lip, or a 40cm paella pan. Add the onion and stir around the pan for 5 mins until soft. Add the garlic and cook for 1 min more, then tip in the vermicelli and cook for 5 mins, stirring from time to time, until the vermicelli is toasted brown. Stir in the paprika.\r\nKeeping the heat moderate, stir through the monkfish, squid and saffron with its water, seasoning well. Spread the ingredients out in an even layer, then pour over the hot stock and scatter the tomatoes on top. Bring to a simmer, then cover the whole dish with a tight-fitting lid (or foil). Turn the heat to medium and cook for 6 mins.\r\nUncover and stir to incorporate the dry top layer of pasta. Push the mussels into the pasta so the hinges are buried in the bottom of the dish, and they stand straight up. Arrange the prawns on top, cover tightly and cook for another 6 mins or until the mussels are open, the prawns are pink and the pasta is cooked through. Leave to simmer for another 2-3 mins to cook off most of the remaining liquid (leave a little in the pan to prevent the pasta from sticking together). Allow to sit for 2-3 mins, then squeeze over the lemon juice and arrange the wedges on top. Scatter with parsley before serving.",
        strMealThumb: "https://www.themealdb.com/images/media/meals/wqqvyq1511179730.jpg",
        strTags: null,
        strYoutube: "https://www.youtube.com/watch?v=itsFEc8W468",
        strIngredient1: "Mussels",
        strIngredient2: "Prawns",
        strIngredient3: "Saffron",
        strIngredient4: "Vermicelli",
        strIngredient5: "Olive Oil",
        strIngredient6: "Onions",
        strIngredient7: "Garlic",
        strIngredient8: "Paprika",
        strIngredient9: "Monkfish",
        strIngredient10: "Baby Squid",
        strIngredient11: "Fish Stock",
        strIngredient12: "Tomatoes",
        strIngredient13: "Lemon",
        strIngredient14: "Parsley",
        strIngredient15: "",
        strIngredient16: "",
        strIngredient17: "",
        strIngredient18: "",
        strIngredient19: "",
        strIngredient20: "",
        strMeasure1: "400g",
        strMeasure2: "8",
        strMeasure3: "2 pinches",
        strMeasure4: "350g",
        strMeasure5: "5 tblsp ",
        strMeasure6: "1 large",
        strMeasure7: "3 cloves",
        strMeasure8: "2 tbs",
        strMeasure9: "1 tail",
        strMeasure10: "4",
        strMeasure11: "650ml",
        strMeasure12: "2 large",
        strMeasure13: "Juice of 1",
        strMeasure14: "Topping",
        strMeasure15: "",
        strMeasure16: "",
        strMeasure17: "",
        strMeasure18: "",
        strMeasure19: "",
        strMeasure20: "",
        strSource: "https://www.bbcgoodfood.com/recipes/seafood-fideua-paella",
        strImageSource: null,
        strCreativeCommonsConfirmed: null,
        dateModified: null
    }*/]
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    const onMealClick = (meal) => {
        dispatch({
            type: 'SHOW_MEAL_INFO',
            payload: {
                showMealInfo: true,
                meal
            }
        })
    }

    const onSearchMeal = (searchedMealText) => {
        dispatch({
            type: 'MEAL_SEARCHED_FOR',
            payload: searchedMealText
        })
    }

    const updateMeals = (meals) => {
        dispatch({
            type: 'UPDATE_MEAL',
            payload: meals
        })
    }

    return (
        <GlobalContext.Provider value={{
            showMealInfo: state.showMealInfo,
            meals: state.meals,
            meal: state.meal,
            mealSearchedFor: state.mealSearchedFor,
            onMealClick,
            onSearchMeal,
            updateMeals
        }}>{children}</GlobalContext.Provider>
    )
}