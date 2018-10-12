import React from 'react';
import propTypes from 'prop-types';

function SyllabusPoint(props) {
  return (
        <tr>
          <td>Syllabus:</td>
          <td><a href={props.syllabus}>link</a></td>
        </tr>
  )
}

SyllabusPoint.propTypes = {
  syllabus: propTypes.string.isRequired
}

export default SyllabusPoint;