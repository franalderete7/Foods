import React from 'react'
import {Link} from 'react-router-dom'
import recipe from '../../img/kithtreats.jpeg'
import './RecipeContainer.css'

export default function RecipeContainer (props) {
    console.log('recipeContainer', props.recipe)
    return (
        <div className='cards'>
        <div className='card_container'>
            <h1 className='card_title'>{ props.recipe.title }</h1>
            <div className="diets_card">
                    {props.recipe.diets?.map((diet, index) => (
                        <div key={diet.index}>
                            <p>
                                {diet}
                            </p>
                        </div>
                    ))}
             </div>

            <div className='image'>
            <img src={props.recipe.image ? props.recipe.image : `${recipe} `} alt="name" />
            </div>
            
            <Link to={`/recipe/${props.recipe.id}`}>
                    <button className="button_card" type='submit'>More Info</button>
            </Link>
        </div>
        </div>
    )
}
