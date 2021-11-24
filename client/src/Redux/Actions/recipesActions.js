import axios from 'axios';
export const GET_RECIPES = 'GET_RECIPES';
export const GET_RECIPES_DETAIL = 'GET_RECIPES_DETAIL';
export const SEARCH_RECIPES = 'SEARCH_RECIPES'; 
export const CREATE_RECIPE = 'CREATE_RECIPE'; 
export const POST_NEW_RECIPE = 'POST_NEW_RECIPE';
export const SEARCH_ERROR = 'SEARCH_ERROR'



export function getRecipes() {
    return (dispatch) => 
      fetch('http://localhost:3001/recipes') 
        .then((response) => response.json()) 
        .then((json) => {
            dispatch({
            type: GET_RECIPES, 
            payload: json})
        })
  }


  export function getRecipeDetail(id) {
    return (dispatch) =>
      fetch(`http://localhost:3001/recipes/${id}`)
        .then((response) => response.json())
        .then((json) => {
          console.log(id)
          dispatch({ 
            type: GET_RECIPES_DETAIL, 
            payload: json });
        })
    }
  

  export function searchRecipes(title) {
    return (dispatch) =>
      fetch(`http://localhost:3001/recipes/search?title=${title}`)
        .then((response) => response.json())
        .then((json) => {
          dispatch({
            type: SEARCH_RECIPES,
            payload: json
          })
        })
        .catch((error) => {
          dispatch({
            type: SEARCH_ERROR,
            payload: error

        })
      }
     )
    }





  export function createRecipe(obj) {
    return (dispatch) =>
      fetch('http://localhost:3001/recipes/addRecipe', {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
        .then((resp) => resp.json())
        .then((json) => {
          dispatch({
            type: CREATE_RECIPE,
            payload: json
          })
        })
  } 

  export const getNewRecipe = (info) => {
    return async function(dispatch) {
      let result = await axios.post(`http://localhost:3001/recipe/create`, info)
      let results = result.data
      return dispatch({ 
        type: POST_NEW_RECIPE,
        payload: results 
      });
      }
}
