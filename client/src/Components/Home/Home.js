import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import Pagination  from '../Pagination/Pagination';
import FilterOptions from '../FilterOptions/FilterOptions';
import DisplayRecipes from '../DisplayRecipes/DisplayRecipes';
import { getRecipes } from '../../Redux/Actions/recipesActions';
import { getDiets} from '../../Redux/Actions/dietsActions';
import './Home.css'

function Home() {
  
  const dispatch = useDispatch()

  const {recipes} = useSelector((state) => state);
  const {filteredRecipes} = useSelector((state) => state);
  const {filterBy} = useSelector((state) => state);
  const {orderBy} = useSelector((state) => state);

  const [allRecipes, setAllRecipes] = useState([])
  const [page, setPage] = useState(1);
  const [recipesPerPage] = useState(9);


    
    useEffect(() => {
       if(filterBy === 'All' && orderBy === 'Select') {
        setAllRecipes(recipes)
    } else {
        setAllRecipes(filteredRecipes)
    }
       // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [filterBy, orderBy, recipes, filteredRecipes]);  

    useEffect(() => {
        dispatch(getRecipes())
        dispatch(getDiets())
      },[dispatch]) 
     
      console.log(recipes)
      // Pagination

  let indexLastPage = page * recipesPerPage;
  // indice del último elemento de cada pagina
  let indexFirtsPage = indexLastPage - recipesPerPage;
  // indice del primer elemento de cada pagina
  let currentPage = allRecipes.slice(indexFirtsPage, indexLastPage);
  // recipes de la pagina actual

  // Change Page

  function paginate(e, num) {
    e.preventDefault();
  
    setPage(num); // Seteo el número de página
  }

    return (
        <div className="homePage">
      <div className="container">
          <>
            <FilterOptions />
            {recipes.length > 0 ?  <DisplayRecipes recipes={currentPage}/> : <h1 className="recipes_not_found">No recipes found...</h1>}
            <Pagination
              recipePerPage={recipesPerPage}
              totalRecipes={allRecipes.length}
              paginate={paginate}
            />
          </>
      </div>
    </div>
    )
}


export default Home; 