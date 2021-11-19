import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createRecipe } from '../../Redux/Actions/recipesActions';
import { getDiets } from '../../Redux/Actions/dietsActions';
import './AddRecipe.css'
import { validate } from './Error';



export function AddRecipe () {

  const dispatch = useDispatch();
  const {diets} = useSelector(state=>state)

  useEffect(() => { 
    dispatch(getDiets());
    // eslint-disable-next-line
  }, []);

  const [input, setInput] = useState({
    title: '',
    summary: '',
    spoonacularScore: 0,
    healthScore: 0, 
    analyzedInstructions: '',
    image: '',
    diets: []
 }); 

 const [errors, setErrors] = useState({}); 

 const handleInputChange = function(e) {
  if(e.target.name === "diets") {
    const dietsSelection = input[e.target.name]
    setInput({
      ...input,
      [e.target.name]: dietsSelection.concat(e.target.value)
    })
  } else {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }
}
const handleCheckbox = (e) => {
  if (e.target.checked) {
    setInput({ 
      ...input,
      diets: [...input.diets, e.target.value],
    });
  } else {
    setInput({
      ...input,
      diets: input.diets.filter((diet) => diet !== e.target.value),
    });
  }
};
 
 const handleSubmit = (e) => {
  e.preventDefault()
    if(Object.keys(errors).length === 0)
    {dispatch(createRecipe(input))
      alert("recipe created!")
      window.location.href = `/recipecreated`
    setInput({
      title: '',
      summary: '',
      spoonacularScore: 0,
      healthScore: 0, 
      analyzedInstructions: '',
      image: '', 
      diets: []
      })
    } else {
      alert("complete all")
    }
}
  
 
  return (
    <div className="add_recipe_container">
     <h1 className="h1_title">Make your own recipe: </h1>
     <form
     className="recipe_form"
     onSubmit={(e) => handleSubmit(e)}
     >
       <div>
            <label className="text_title_form">Title</label>
            <input
              onChange={handleInputChange}
              className={`${errors.title && "danger"} title_input`}
              type="text"
              name="title"
              value={input.title}
            />
            {errors.title && (
              <p className="danger">{errors.title}</p>
                )} 
          </div>
          <div>
            <label className="text_title_form">Summary</label>
            <textarea
            onChange={handleInputChange}
            className={`${errors.summary && "danger"} text_input`}
              type="text"
              name="summary"
              value={input.summary}
            />
            {errors.summary && (
              <p className="danger">{errors.summary}</p>
                )} 
          </div>
          <div>
            <label className="text_title_form">Score</label>
            <input
            onChange={handleInputChange}
            className={`${errors.spoonacularScore && "danger"} select_input`}
              type="number"
              min="0"
              max="99"
              name="spoonacularScore"
              value={input.spoonacularScore}
            />
            {errors.spoonacularScore && (
              <p className="danger">{errors.spoonacularScore}</p>
                )} 
                </div> 
            <div>
            <label className="text_title_form">Health Score</label>
            <input
            onChange={handleInputChange}
            className={`${errors.healthScore && "danger"} select_input`}
              type="number"
              min="0"
              max="99"
              name="healthScore"
              value={input.healthScore}
            />
             {errors.healthScore && (
              <p className="danger">{errors.healthScore}</p>
                )} 
          </div>
          <div>
            <label className="text_title_form">Instructions</label>
            <textarea
            onChange={handleInputChange}
              className="text_input"
              type="text"
              name="analyzedInstructions"
              value={input.analyzedInstructions}
            ></textarea>
          </div>
          <div>
              <label className="text_title_form">Image</label>
              <input 
              type="url" 
              name="image" 
              placeholder= "Insert an URL Image" 
              value={input.image} 
              onChange={handleInputChange} 
              className="image_input"/>
          </div>

          <div className="diets_checkbox">
          <label className="text_title_form">Choose your diets</label>

            <ul className="map_diets">
              {diets.map((diet) =>
             
              <li className="keys" key={diet.name}>
                <label className="diet_name" name={diet}>
                <input
                    className="diet_input"
                    type="checkbox"
                    name="diets"
                    value={diet.id}
                    onChange={handleCheckbox}
                  />
                  {diet.name}
                </label>
              </li>
       
              )
              }

              </ul> 

            </div>
          <button className="submit_button" type="submit">
          Submit
        </button>
     </form>
    </div>
  )
}



export default AddRecipe; 