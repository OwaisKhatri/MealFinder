import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { MealInfo } from './MealInfo';
import { SearchImageGrid } from './SearchImageGrid';

export const SearchResult = ({ searchMealFor }) => {
    const { meals, showMealInfo } = useContext(GlobalContext);
    return (
        <>
            {
                meals != null ?
                    <div>
                        <h2>Search results for '{searchMealFor}':</h2>
                        <ul className='meals'>
                            {meals.map(meal =>
                                <SearchImageGrid key={meal.idMeal} meal={meal} />
                            )}
                        </ul>
                    </div> :
                    <h2>No results found for '{searchMealFor}':</h2>
            }
            {
                showMealInfo ? <MealInfo /> : <></>
            }
        </>
    )
}
