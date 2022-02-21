import React, { useState, useContext } from 'react'
import { getRandomMeal, getSearchedMeal } from '../remote/API'
import { GlobalContext } from '../context/GlobalState'
import { SearchResult } from './SearchResult'

export const TopView = () => {
    const [searchText, setSearchText] = useState('')
    const { onSearchMeal, mealSearchedFor, updateMeals } = useContext(GlobalContext)
    
    const onSearchClicked = async (e) => {
        e.preventDefault();

        onSearchMeal(searchText)
        const meals = await getSearchedMeal(searchText)
        updateMeals(meals)
    }

    const onRandomGenerateClick = async () => {
        const meals = await getRandomMeal()
        onSearchMeal('random')
        updateMeals(meals)
    }
    return (
        <>
            <h1>Meal Finder</h1>
            <div className="flex">
                <form className="flex" onSubmit={onSearchClicked}>
                    <input
                        type="text"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        placeholder="Search for meals or keywords"
                    />
                    <button className="search-btn" type="submit">
                        <i className="fas fa-search"></i>
                    </button>
                </form>
                <button className="random-btn" onClick={() => onRandomGenerateClick()}>
                    <i className="fas fa-random"></i>
                </button>
            </div>
            {
                mealSearchedFor === '' ? <></> : <SearchResult searchMealFor={mealSearchedFor}/> 
            }
        </>
    )
}
