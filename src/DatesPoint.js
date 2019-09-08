import React from 'react';
import propTypes from 'prop-types';

function DatesPoint(props) {
  const {dates} = props;

  return (
        <li className="wrap-out">
          <div className="wrap-in">
            <p>Year:</p>
            <div className="answer">
              <p>{dates.endedAt ? dates.endedAt.toDate().getFullYear() : 'working on'}</p>
            </div>
          </div>
        </li>
  )
}

DatesPoint.propTypes = {
  dates: propTypes.object.isRequired
}

export default DatesPoint;