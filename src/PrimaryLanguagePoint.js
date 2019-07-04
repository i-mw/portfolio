import React from 'react';
import propTypes from 'prop-types';

function PrimaryLanguagePoint(props) {
  return (
        <li>
          <p>Primary Language:</p>
          <div className="answer">
            <p>{props.primaryLanguage}</p>
          </div>
        </li>
  )
}

PrimaryLanguagePoint.propTypes = {
  primaryLanguage: propTypes.string.isRequired
}

export default PrimaryLanguagePoint;