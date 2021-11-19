import React from 'react'
import './RecipeCreated.css'


export function RecipeCreated() {

    return (
        <div>
            <div className="wait"> 
            Recipe created, returning home in {setTimeout(() => {
            window.location.href = 'http://localhost:3000/home'
            }, 3000)} seconds...
            </div>
        </div>
            
        
    )
};

export default RecipeCreated;