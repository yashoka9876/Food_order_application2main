import React from 'react'
import classes from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem'

let DUMMY_ITEMS=[
    {
        id:'m1',
      name:'Shushi',
      description:'Finest fish and veggie',
      prize:'11.99'
    },
    {
        id:'m2',
      name:'Schitzel',
      description:'A german specialty',
      prize:'16.99'
    },
    {
        id:'m3',
      name:'Barbecue Burger',
      description:'American, raw,meaty',
      prize:'19.44'
    },
    {
        id:'m4',
      name:'Green Bowl',
      description:'Healthy...and green...',
      prize:'22.33'
    }
  ]

const AvailableMeals = () => {
    const mealsList=DUMMY_ITEMS.map((meal)=><MealItem key={meal.id} name={meal.name} description={meal.description} price={meal.prize}/>)
  return (
    <section className={classes.meals}>
        <ul>
        {
        mealsList
        }
      </ul>
    </section>
  )
}

export default AvailableMeals