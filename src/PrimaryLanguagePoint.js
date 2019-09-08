import React from 'react';
import propTypes from 'prop-types';

function PrimaryLanguagePoint(props) {
  return (
        <li className="wrap-out">
          <div className="wrap-in">
            <p>Primary Language:</p>
            <div className="answer">
              <p>{props.primaryLanguage}</p>
            </div>
          </div>
        </li>
  )
}

PrimaryLanguagePoint.propTypes = {
  primaryLanguage: propTypes.string.isRequired
}

export default PrimaryLanguagePoint;