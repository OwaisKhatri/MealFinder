export default (state, action) => {
    switch (action.type) {
        case 'SHOW_MEAL_INFO': {
            return {
                ...state,
                showMealInfo: action.payload.showMealInfo,
                meal: action.payload.meal
            }
        }
        case 'MEAL_SEARCHED_FOR': {
            return {
                ...state,
                mealSearchedFor: action.payload
            }
        }
        case 'UPDATE_MEAL': {
            state.meals = []
            return {
                ...state,
                meals: action.payload
            }
        }
        default:
            return state;
    }
}