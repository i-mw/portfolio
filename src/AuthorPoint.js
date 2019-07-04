import React from 'react';
import propTypes from 'prop-types';

function AuthorPoint(props) {
  return (
        <li>
          <p>Author:</p>
          <div className="answer">
            <p>{props.author}</p>
          </div>
        </li>
  )
}

AuthorPoint.propTypes = {
  author: propTypes.string.isRequired
}

export default AuthorPoint;