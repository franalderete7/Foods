import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipeDetail } from '../../Redux/Actions/recipesActions';
import './RecipeDetail.css';
import recipeImage from '../../img/kithtreats.jpeg';

function RecipeDetail({match}) {

  const recipe = useSelector((state) => state.recipeById)
  const dispatch = useDispatch(); 

    useEffect(() => { 
        console.log("useEffect")
        dispatch(getRecipeDetail(match.params.id))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); 

    console.log(recipe.diets)

    function summary () {
       return  {__html: recipe.summary};
    }

    return (
      <>
       <div className="detailsContainer">
         <div className="containerHolder">
          <div className="title">
            <h1>{recipe.title} </h1>
          </div>  
          <div className="image_detail">
            <img src={recipe.image? recipe.image : `${recipeImage}` } alt="img" />
          </div>
          <div className="score">
              <div className="description_number">Score: {recipe.spoonacularScore}</div>
              <div className="description_number"> Health Score: {recipe.healthScore}</div>
          </div>
          <div className="diets">
              <div className ="diets_name" style={{textTransform: 'uppercase'}}>
              {recipe.diets?.map((diet) => (
                  <span key={diet}>
                    <span className="span_diets">
                      {diet}
                    </span>
                  </span>
                ))}   
              </div>
          </div>
          <div className="summary">
                <h1>Summary</h1>
                <div dangerouslySetInnerHTML={summary()} className="description" />
          </div>
        
          <div className="instructions">
              <h1>Instructions</h1>
              <p className="description">
                {recipe.analyzedInstructions?.map((inst) => (
                <ul className="instructions_bullets">
                  <li>{inst}</li>
                </ul>
              ))}
              </p>
          </div>
          </div>
        </div>
    </>
    )
}
  
  export default RecipeDetail;