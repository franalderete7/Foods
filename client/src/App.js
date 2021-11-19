import React from 'react';
import { Route, useLocation } from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import AddRecipe from './Components/AddRecipe/AddRecipe';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';
import RecipeDetail from './Components/RecipeDetail/RecipeDetail';
import RecipeCreated from './Components/RecipeCreated/RecipeCreated';
import './App.css';



function App() {

  const location = useLocation();

  return (
    <div className="App">
      {location.pathname === '/' ? null : <Nav />}
       <Route exact path='/' component={Landing}/>
       <Route exact path='/home' component={Home}/>
       <Route path='/recipe/:id' component={RecipeDetail} />
       <Route exact path='/addRecipe' component={AddRecipe}/>
       <Route exact path='/recipecreated' component={RecipeCreated}/>
    </div>
  );
}

export default App;