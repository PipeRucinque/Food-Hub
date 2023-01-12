import React, { useState, useEffect} from 'react'
import '../styles/Dish.css'
import { useParams } from "react-router-dom";
import { BsYoutube } from "react-icons/bs";
import Mapita from '../components/Mapita';
import Ingredients from '../components/Ingredients';

const styles = {
  borderRadius: '5px',
  boxShadow: '6px 10px 10px black',
}

const Dish = () => {
    const dish = ((useParams().dish).slice(1)).replace(/ /g, "%20")
    // console.log(dish);
    const apiMeal = process.env.REACT_APP_API_MEAL;
    
    const [meal, setMeal] = useState([]);
    console.log(meal);
  
    const getData = async () => {
      try {
        const mealFetch = await (await fetch(`${apiMeal}/search.php?s=${dish}`)).json();
        setMeal(mealFetch.meals[0]);
      } catch (error) {
        console.log("Error en el mealFetch, info de receta", error);
      }
    }
    useEffect(() => {
      getData();
    }, []);

    return (
        <div className='meal'>
            <h1>{meal.strMeal}</h1>
            <div className='img-ingredients'>
                <img src={meal.strMealThumb} style={styles} alt={`${meal.strMeal} img`} />
                <div className='dishInfo'>
                    <label><strong>Country:</strong> {meal.strArea}</label>
                    <br />
                    <label><strong>Category:</strong> {meal.strCategory}</label>
                    <Mapita origin={meal.strArea}/>
                    <a className='YTbtn' href={meal.strYoutube} target="_blank">{<BsYoutube/>}</a>
                </div>
                <Ingredients meal={meal} />
            </div>
            <hr />
            <div className='preparation'>
                {meal.strInstructions}
            </div>
            <hr />
        </div>
    )
}

export default Dish