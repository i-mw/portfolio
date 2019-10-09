import React from 'react';
import propTypes from 'prop-types';

function PreviewPoint(props) {
  return (
        <li className="wrap-out"><a target="blank" className="wrap-in" href={props.preview}>Preview</a></li>
  )
}

PreviewPoint.propTypes = {
  preview: propTypes.string.isRequired
}

export default PreviewPoint;