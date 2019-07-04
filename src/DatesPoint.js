import React from 'react';
import propTypes from 'prop-types';

function DatesPoint(props) {
  const {dates} = props;

  return (
        <li>
          <p>Year:</p>
          <div className="answer">
            <p>{dates.endedAt ? dates.endedAt.toDate().getFullYear() : 'working on'}</p>
          </div>
        </li>
  )
}

DatesPoint.propTypes = {
  dates: propTypes.object.isRequired
}

export default DatesPoint;