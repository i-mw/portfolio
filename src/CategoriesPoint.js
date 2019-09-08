import React from 'react';
import propTypes from 'prop-types';

function CategoriesPoint(props) {
  return (
        <li className="wrap-out">
          <div className="wrap-in">
            <p>Category:</p>
            <div className="answer">
              {props.categories.map(category => (
                <p key={category}>{category}</p>
              ))}
            </div>
          </div>
        </li>
  )
}

CategoriesPoint.propTypes = {
  categories: propTypes.array.isRequired
}

export default CategoriesPoint;