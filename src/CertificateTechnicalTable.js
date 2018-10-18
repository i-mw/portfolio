import React from 'react';
import propTypes from 'prop-types';
import RemoteDatPoint from './RemoteDataPoint'

function CertificateTechnicalTable(props) {
  const {documentId} = props;
  
  return (
    <section className="wrap-out points">
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