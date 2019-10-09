import React from 'react';
import propTypes from 'prop-types';

function CertificatePoint(props) {
  return (
        <li className="wrap-out"><a target="blank" className="wrap-in" href={props.certificate}>Certificate</a></li>
  )
}

CertificatePoint.propTypes = {
  certificate: propTypes.string.isRequired
}

export default CertificatePoint;