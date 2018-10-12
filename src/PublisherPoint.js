import React from 'react';
import propTypes from 'prop-types';

function PublisherPoint(props) {
  return (
        <tr>
          <td>Publisher:</td>
          <td>{props.publisher}</td>
        </tr>
  )
}

PublisherPoint.propTypes = {
  publisher: propTypes.string.isRequired
}

export default PublisherPoint;