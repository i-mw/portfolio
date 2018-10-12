import React from 'react';
import propTypes from 'prop-types';

function PrimaryLanguagePoint(props) {
  return (
        <tr>
          <td>Primary Language:</td>
          <td>{props.primaryLanguage}</td>
        </tr>
  )
}

PrimaryLanguagePoint.propTypes = {
  primaryLanguage: propTypes.string.isRequired
}

export default PrimaryLanguagePoint;