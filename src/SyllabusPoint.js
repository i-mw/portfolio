import React from 'react';
import propTypes from 'prop-types';

function SyllabusPoint(props) {
  return (
        <li className="wrap-out"><a className="wrap-in" href={props.syllabus}>Syllabus</a></li>
  )
}

SyllabusPoint.propTypes = {
  syllabus: propTypes.string.isRequired
}

export default SyllabusPoint;