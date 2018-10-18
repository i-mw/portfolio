import React from 'react';
import propTypes from 'prop-types';
import DefaultTechnicalTable from './DefaultTechnicalTable';
import CourseTechnicalTable from './CourseTechnicalTable';
import CertificateTechnicalTable from './CertificateTechnicalTable';
import SkillTechnicalTable from './SkillTechnicalTable'

function TechnicalTable(props) {
  const {parentCollection, documentId, skills} = props;

  return (
    parentCollection === 'courses' ?
      <CourseTechnicalTable skills={skills} documentId={documentId}/>
    :
      parentCollection === 'certificates' ?
        <CertificateTechnicalTable documentId={documentId}/>
      :
        parentCollection === 'skills' ?
          <SkillTechnicalTable documentId={documentId}/>
        :
          <DefaultTechnicalTable skills={skills}/>
  )
}

TechnicalTable.propTypes = {
  parentCollection: propTypes.string.isRequired,
  documentId: propTypes.string,
  skills: propTypes.object
}

export default TechnicalTable;