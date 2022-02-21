import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const MealInfo = () => {
  const { meal } = useContext(GlobalContext)

  const ingredients = [];

  const getIngredients = () => {
    for (let i = 1; i <= 20; i++) {
      if (meal[`strIngredient${i}`]) {
        ingredients.push(
          `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
        );
      } else {
        break;
      }
    }
  }
  return (
    <div className='single-meal'>
      {getIngredients()}
      <h1>{meal.strMeal}</h1>
      <img src={meal.strMealThumb} />
      <div className='single-meal-info'>
        <br />
        {meal.strCategory ?
          <p>{meal.strCategory}</p> :
          ''
        }
        <br />
        {meal.strArea ?
          <p>{meal.strArea}</p> :
          ''
        }
        <br />
      </div>
      <div className='main'>
        <p>{meal.strInstructions}</p>
        <h2>Ingredients</h2>
        <ul>
          {ingredients.map(ing => <li>{ing}</li>)}
        </ul>
      </div>
    </div>
  )
}
