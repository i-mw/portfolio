import React from 'react';
import propTypes from 'prop-types';

function PreviewPoint(props) {
  return (
        <tr>
          <td>Preview:</td>
          <td><a href={props.preview}>link</a></td>
        </tr>
  )
}

PreviewPoint.propTypes = {
  preview: propTypes.string.isRequired
}

export default PreviewPoint;