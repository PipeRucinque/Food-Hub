import React, { useState, useEffect } from 'react'
import Loader from './Loader'
import Popover from 'react-bootstrap/Popover';

const PopupList = ({country}) => {
    console.log(country);
    const apiMeal = process.env.REACT_APP_API_MEAL
    const [dish, setDish] = useState([])
    console.log(dish.meals);
    
    const getData = async () => {
        try {
            const dishFetch = await (await fetch(`${apiMeal}/filter.php?a=${country}`)).json()
            setDish(dishFetch)
        } catch (error) {
            console.log('Error en getData', error);
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
                            <Popover.Body>
                                <ul>
                                    <li><a href='#'>{dish.strMeal}</a></li>
                                </ul>
                            </Popover.Body>
                        ))}
                </Popover>)
            }
        </> 
    )
}

export default PopupList