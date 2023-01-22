import React, { useState, useEffect } from 'react'
import { Popover } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import Loader from './Loader'

const PopupList = ({country}) => {
    const apiMeal = process.env.REACT_APP_API_MEAL
    const [dish, setDish] = useState([])
    
    const getData = async () => {
        try {
            const dishFetch = await (await fetch(`${apiMeal}/filter.php?a=${country}`)).json()
            setDish(dishFetch)
        } catch (error) {
            console.log('Error en el dishFetch', error);
        }
    }
    
    useEffect(() => {
        getData()
    }, [])
    
    if (!dish.meals) return null
    return (
        <>
            {dish.meals.length === 0 ? <Loader /> : 
                (<Popover id="popover-basic">
                    <Popover.Header as="h3">{country}</Popover.Header>
                        {dish.meals.map((dish) => (
                            <NavLink
                                to={`/dish/:${dish.strMeal}`}
                                variant="outline-primary"
                                dish={dish.strMeal}
                            >
                                {dish.strMeal}
                            </NavLink>
                        ))}
                </Popover>)
            }
        </> 
    )
}

export default PopupList