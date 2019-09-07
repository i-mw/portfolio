import React from 'react';
import propTypes from 'prop-types';
import RemoteDataPoint from './RemoteDataPoint'

function CertificateTechnicalTable(props) {
  const {documentId} = props;

  return (
    <section className="technical">
      <RemoteDataPoint
        parentCollection='certificates'
        searchCollection='projects'
        searchProperty={'partOf.' + documentId + '.id'}
        searchValue={documentId}
      />
      <RemoteDataPoint
        parentCollection='certificates'
        searchCollection='snippets'
        searchProperty={'partOf.' + documentId + '.id'}
        searchValue={documentId}
      />
      <RemoteDataPoint
        parentCollection='certificates'
        searchCollection='courses'
        searchProperty={'partOf.' + documentId + '.id'}
        searchValue={documentId}
      />
    </section>
  )
}

CertificateTechnicalTable.propTypes = {
  documentId: propTypes.string.isRequired
}

export default CertificateTechnicalTable;