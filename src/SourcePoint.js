import React from 'react';
import propTypes from 'prop-types';

function SourcePoint(props) {
  return (
        <tr>
          <td>Source:</td>
          <td><a href={props.source}>link</a></td>
        </tr>
  )
}

SourcePoint.propTypes = {
  source: propTypes.string.isRequired
}

export default SourcePoint;