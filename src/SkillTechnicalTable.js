import React from 'react';
import propTypes from 'prop-types';
import RemoteDataPoint from './RemoteDataPoint'

function SkillTechnicalTable(props) {
  const {documentId} = props;

  return (
    <section className="technical">
      <RemoteDataPoint
        parentCollection='skills'
        searchCollection='projects'
        searchProperty={'skills.' + documentId + '.id'}
        searchValue={documentId}
        setIsInternalLoading={props.setIsInternalLoading}
      />
      <RemoteDataPoint
        parentCollection='skills'
        searchCollection='snippets'
        searchProperty={'skills.' + documentId + '.id'}
        searchValue={documentId}
        setIsInternalLoading={props.setIsInternalLoading}
      />
      <RemoteDataPoint
        parentCollection='skills'
        searchCollection='courses'
        searchProperty={'skills.' + documentId + '.id'}
        searchValue={documentId}
        setIsInternalLoading={props.setIsInternalLoading}
      />
      <RemoteDataPoint
        parentCollection='skills'
        searchCollection='readings'
        searchProperty={'skills.' + documentId + '.id'}
        searchValue={documentId}
        setIsInternalLoading={props.setIsInternalLoading}
      />
    </section>
  )
}

SkillTechnicalTable.propTypes = {
  documentId: propTypes.string.isRequired,
  setIsInternalLoading: propTypes.func.isRequired
}

export default SkillTechnicalTable;