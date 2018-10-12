import React from 'react';
import propTypes from 'prop-types';

function CertificatePoint(props) {
  return (
        <tr>
          <td>Certificate:</td>
          <td><a href={props.certificate}>link</a></td>
        </tr>
  )
}

CertificatePoint.propTypes = {
  certificate: propTypes.string.isRequired
}

export default CertificatePoint;