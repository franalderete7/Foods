import React, {useState} from 'react';
import { useDispatch} from 'react-redux';
import { NavLink} from 'react-router-dom';
import './Nav.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import { searchRecipes } from '../../Redux/Actions/recipesActions';
import { getRecipes} from '../../Redux/Actions/recipesActions';
import { reset } from '../../Redux/Actions/orderActions';


export default function Nav() {
    const dispatch = useDispatch(); 
    const [title, setTitle] = useState("");

    const handleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(searchRecipes(title))
        setTitle("")
       }

    return (
        <div className='container-nav'>
            <NavLink to= '/home' 
                className='nav_logo'
                onClick={(e) => {dispatch(reset()); dispatch(getRecipes());}}
                > Foods App

            </NavLink>
            <div className='form'> 
               <form  className='form_search' onSubmit={((e) => handleSubmit(e))}>
               <input 
               className="box_search"
               name='search'  
               onChange={(e) => handleChange(e)}
               placeholder="Search..."
               value={title}
               type="text"/>
                   <button className="search_button" type="submit">
                       <FontAwesomeIcon icon={faSearch}/>
                       </button>
               </form>
            </div>
           <NavLink to={`/addRecipe`}>
                <button className="create_button" type="submit">
                       CREATE
                </button>
            </NavLink>
        </div>
    )
}