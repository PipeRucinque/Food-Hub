import React, { useState, useEffect } from "react";
import { Popover, Button, Card } from "react-bootstrap/";
import { NavLink, Link } from "react-router-dom";

const DishByCategory = ({ category }) => {
  console.log(category);
  const apiMeal = process.env.REACT_APP_API_MEAL;
  const [dishes, setDishes] = useState([]);
  //console.log(dishes);

  const getData = async () => {
    try {
      const dishesFetch = await (
        await fetch(`${apiMeal}/filter.php?c=${category}`)
      ).json();
      setDishes(dishesFetch.meals);
    } catch (error) {
      console.log("Error en el dishesFetch (platos de una categoria X)", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Popover id="popover-basic">
      <Popover.Header as="h3">{category}</Popover.Header>
      <Popover.Body>
        {dishes.map((dish) => (
          <Card style={{ width: "10rem" }}>
            <Card.Img variant="top" src={dish.strMealThumb} />
            <Card.Body>
              <NavLink
                to={`/dish/:${dish.strMeal}`}
                variant="outline-primary"
                dish={dish.strMeal}
              >
                {dish.strMeal}
              </NavLink>
            </Card.Body>
          </Card>
        ))}
      </Popover.Body>
    </Popover>
  );
};

export default DishByCategory;
