import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const SearchImageGrid = ({ meal }) => {
    const { onMealClick } = useContext(GlobalContext);
    return (
        <div className='meal' onClick={() => onMealClick(meal)}>
            <img src={meal.strMealThumb} />
            <div className='meal-info'>
                <h3>{meal.strMeal}</h3>
            </div>
        </div>
    )
}
