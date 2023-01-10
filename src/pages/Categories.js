import React, { useState, useEffect } from 'react'
import { Button, OverlayTrigger } from 'react-bootstrap'
import DishByCategory from '../components/DishByCategory'
import Loader from '../components/Loader'

const Categories = () => {
    const [categories, setCategories] = useState([])
    const apiMeal = process.env.REACT_APP_API_MEAL
    console.log(categories);
    const getData = async () => {
        try {
            const categoriesFetch = await (await fetch(`${apiMeal}categories.php`)).json()
            setCategories(categoriesFetch.categories)
        } catch (error) {
            console.log('Error en el categoriesFetch', error);
        }
    }

    useEffect(() => {
        getData()
    },[])

    // if (!categories) return null
    return (
        <>
            <div>Food Categories</div>
            <ul>
                {categories.map((category) => (
                    <li key={category.strCategory}>
                        <OverlayTrigger 
                            trigger="click" 
                            placement="right" 
                            overlay={<DishByCategory category={category.strCategory}/>}
                        >
                            <Button variant="outline-success">{category.strCategory}</Button>
                        </OverlayTrigger> 
                    </li> 
                ))}
            </ul>
        </>
    )
}

export default Categories