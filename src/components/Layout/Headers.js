import React from 'react'
import classes from './Header.module.css'
import mealsImage from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton CartItemHandler={props.onCartItemHandler} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table of delicious food!' />
      </div>
    </>
  )
}

export default Header;