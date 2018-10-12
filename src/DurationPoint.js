import React from 'react';
import propTypes from 'prop-types';

function DurationPoint(props) {
  return (
        <tr>
          <td>Duration:</td>
          <td>{props.duration}</td>
        </tr>
  )
}

DurationPoint.propTypes = {
  duration: propTypes.string.isRequired
}

export default DurationPoint;