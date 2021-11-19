import React from "react";
import './Pagination.css'; 

function Pagination({ recipePerPage, totalRecipes, paginate }) {
  const pages = [];

  for (let i = 1; i <= Math.ceil(totalRecipes / recipePerPage); i++) {
    pages.push(i); 
  }


  return (


    <nav className="nav_page"> 
      <div className="pagination">
        {pages.map((num) => (
            <button
              key={pages.num}
              onClick={(e) => paginate(e, num)}
              className={pages.length > 1 ? 'page_button' : 'page_button1'}
              disabled={pages.length <= 1}
              >
              {num}
            </button>
        ))}
      </div>
    </nav>
  );
}

export default Pagination