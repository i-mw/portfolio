import React from 'react';
import propTypes from 'prop-types';
import RemoteDataPoint from './RemoteDataPoint'

function CertificateTechnicalTable(props) {
  const {documentId} = props;

  return (
    <section className="technical">
      <div className="">
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
      </div>
    </section>
  )
}

CertificateTechnicalTable.propTypes = {
  documentId: propTypes.string.isRequired
}

export default CertificateTechnicalTable;