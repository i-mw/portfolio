import React from 'react';
import propTypes from 'prop-types';

function DurationPoint(props) {
  return (
        <li>
          <p>Duration:</p>
          <div className="answer">
            <p>{props.duration}</p>
          </div>
        </li>
  )
}

DurationPoint.propTypes = {
  duration: propTypes.string.isRequired
}

export default DurationPoint;