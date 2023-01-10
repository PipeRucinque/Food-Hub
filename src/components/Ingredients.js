import React from 'react'
import {Table} from 'react-bootstrap/'

const Ingredients = ({meal}) => {
    const strIngredient = [];
    let count = 1

    while (true) {
        if (meal[`strIngredient${count}`] !== "") {
            strIngredient.push(meal[`strIngredient${count}`])
        }
        count++;
        if (meal[`strIngredient${count}`] === undefined || meal[`strIngredient${count}`] === null) {
          break;
        }
      }
    console.log(strIngredient);
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>INGREDIENTS</th>
                    </tr>
                </thead>
                <tbody>
                    {strIngredient.map((ingredient) => (
                        <tr>
                            <td>{ingredient}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default Ingredients