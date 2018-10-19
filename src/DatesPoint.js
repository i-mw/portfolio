import React from 'react';
import propTypes from 'prop-types';

function DatesPoint(props) {
  const {dates} = props;

  return (
        <tr>
          <td>Year:</td>
          <td>{dates.endedAt ? dates.endedAt.toDate().getFullYear() : 'working on'}</td>
        </tr>
  )
}

DatesPoint.propTypes = {
  dates: propTypes.object.isRequired
}

export default DatesPoint;