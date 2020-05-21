import React from 'react'
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient.js';
const burger = (props) => {
    //convert the keys of an object to an array
    let transformedIngredients = Object.keys(props.ingredients)
            .map(igKey => {
                return [...Array(props.ingredients[igKey])].map((_, i) => {
                    return <BurgerIngredient key={igKey + i} type={igKey} />
                });
            })
            //flatten the array
            .reduce((arr, el) => {
                return arr.concat(el)
            }, []);
            // console.log(transformedIngredients);
    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }
    
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;