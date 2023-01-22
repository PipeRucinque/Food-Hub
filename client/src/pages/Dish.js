import '../styles/Dish.css'
import React, { useState, useEffect, useContext} from 'react'
import { Button } from 'react-bootstrap/';
import { useParams } from "react-router-dom";
import { BsYoutube, BsHeartFill, BsHeart } from "react-icons/bs";
import Mapita from '../components/Mapita';
import Ingredients from '../components/Ingredients';
import LoggedContext from '../context/LoggedContext';

const styles = {
  borderRadius: '5px',
  boxShadow: '6px 10px 10px black',
}

const Dish = () => {
    const dish = ((useParams().dish).slice(1)).replace(/ /g, "%20")
    const apiMeal = process.env.REACT_APP_API_MEAL;
    
    const [meal, setMeal] = useState([]);
    const [isLiked, setIsLiked] = useState(false)
    const [isLogged, setIsLogged] = useContext(LoggedContext)
  
    const getData = async () => {
      try {
        const mealFetch = await (await fetch(`${apiMeal}/search.php?s=${dish}`)).json();
        setMeal(mealFetch.meals[0]);
      } catch (error) {
        console.log("Error en el mealFetch, info de receta", error);
      }
    }

    // deje por aqui: tratando de que el boton cambie de forma en la condicion de la linea 49
    const handleLikeDish = (e) => {
      if (isLiked) {
        setIsLiked(true)
      } else {
        setIsLiked(false)
      }
    }

    useEffect(() => {
      getData();
    }, []);

    return (
        <div className='meal'>
            <h1>{meal.strMeal}</h1>
            {!isLogged ? null 
              : (!isLiked ? <a onClick={handleLikeDish} className='likeBtn'><BsHeart/></a>
                  : <a onClick={handleLikeDish} className='likeBtn'><BsHeartFill/></a>
                )
            }
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