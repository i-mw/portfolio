import React from 'react';
import propTypes from 'prop-types';

function AuthorPoint(props) {
  return (
        <tr>
          <td>Author:</td>
          <td>{props.author}</td>
        </tr>
  )
}

AuthorPoint.propTypes = {
  author: propTypes.string.isRequired
}

export default AuthorPoint;