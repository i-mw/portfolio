import React from 'react';
import propTypes from 'prop-types';

function AuthorPoint(props) {
  return (
        <li className="wrap-out">
          <div className="wrap-in">
            <p>Author:</p>
            <div className="answer">
              <p>{props.author}</p>
            </div>
          </div>
        </li>
  )
}

AuthorPoint.propTypes = {
  author: propTypes.string.isRequired
}

export default AuthorPoint;