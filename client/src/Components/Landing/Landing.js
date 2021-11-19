import React from 'react'
// import { useEffect } from 'react'
// import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import { getDiets } from '../../Redux/Actions/dietsActions';
// import { getRecipes } from '../../Redux/Actions/recipesActions';
import './Landing.css'

function Landing() {

    //   const dispatch = useDispatch() 

    //    useEffect(() => {
    //    dispatch(getDiets())
    //    dispatch(getRecipes())
    //    }, [dispatch])

    return (

        <div className='landing_container'>
           <div className='intro_container'>
          <h1 className= 'welcome_text'>Food's App by Francisco Alderete</h1>
          <button className='button_home'><Link to='/home' className='link_text'> START </Link></button>
          </div> 
        </div>
    )
}

export default Landing