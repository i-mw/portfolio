import React from 'react';
import propTypes from 'prop-types'

function NetworkError(props) {
  return (
    <p className={props.placement}>Network error! Check your connection.</p>
  )
}

NetworkError.propTypes = {
  placement: propTypes.string.isRequired
}

export default NetworkError;