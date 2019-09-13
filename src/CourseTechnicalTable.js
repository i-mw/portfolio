import React from 'react';
import propTypes from 'prop-types';
import SkillsPoint from './SkillsPoint'
import RemoteDataPoint from './RemoteDataPoint'

function CourseTechnicalTable(props) {
  const {skills, documentId} = props;

  return (
    <section className="technical">
      <SkillsPoint skills={skills}/>
      <RemoteDataPoint
        parentCollection='courses'
        searchCollection='projects'
        searchProperty={'partOf.' + documentId + '.id'}
        searchValue={documentId}
        setIsInternalLoading={props.setIsInternalLoading}
      />
      <RemoteDataPoint
        parentCollection='courses'
        searchCollection='snippets'
        searchProperty={'partOf.' + documentId + '.id'}
        searchValue={documentId}
        setIsInternalLoading={props.setIsInternalLoading}
      />
    </section>
  )
}

CourseTechnicalTable.propTypes = {
  skills: propTypes.object.isRequired,
  documentId: propTypes.string.isRequired,
  setIsInternalLoading: propTypes.func.isRequired
}

export default CourseTechnicalTable;