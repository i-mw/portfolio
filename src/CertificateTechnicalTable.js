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
        setIsInternalLoading={props.setIsInternalLoading}
        setIsOnline={props.setIsOnline}
      />
      <RemoteDataPoint
        parentCollection='certificates'
        searchCollection='snippets'
        searchProperty={'partOf.' + documentId + '.id'}
        searchValue={documentId}
        setIsInternalLoading={props.setIsInternalLoading}
        setIsOnline={props.setIsOnline}
      />
      <RemoteDataPoint
        parentCollection='certificates'
        searchCollection='courses'
        searchProperty={'partOf.' + documentId + '.id'}
        searchValue={documentId}
        setIsInternalLoading={props.setIsInternalLoading}
        setIsOnline={props.setIsOnline}
      />
    </section>
  )
}

CertificateTechnicalTable.propTypes = {
  documentId: propTypes.string.isRequired,
  setIsInternalLoading: propTypes.func.isRequired,
  setIsOnline: propTypes.func.isRequired
}

export default CertificateTechnicalTable;