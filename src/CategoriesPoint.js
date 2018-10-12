import React from 'react';
import propTypes from 'prop-types';

function CategoriesPoint(props) {
  return (
        <tr>
          <td>Category:</td>
          {props.categories.map(category => (
            <td key={category}>{category}</td>
          ))}
        </tr>
  )
}

CategoriesPoint.propTypes = {
  categories: propTypes.array.isRequired
}

export default CategoriesPoint;