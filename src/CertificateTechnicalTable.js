import React from 'react';
import propTypes from 'prop-types';
import RemoteDataPoint from './RemoteDataPoint'

function CertificateTechnicalTable(props) {
  const {documentId} = props;

  return (
    <section className="wrap-out technical">
      <div className="wrap-in">
        <table>
          <tbody>
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
          </tbody>
        </table>
      </div>
    </section>
  )
}

CertificateTechnicalTable.propTypes = {
  documentId: propTypes.string.isRequired
}

export default CertificateTechnicalTable;