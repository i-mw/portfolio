import React from 'react';
import propTypes from 'prop-types';

function SourcePoint(props) {
  return (
        <li className="wrap-out"><a target="blank" className="wrap-in" href={props.source}>Source</a></li>
  )
}

SourcePoint.propTypes = {
  source: propTypes.string.isRequired
}

export default SourcePoint;