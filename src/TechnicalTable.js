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
      <CourseTechnicalTable skills={skills} documentId={documentId}
        setIsInternalLoading={props.setIsInternalLoading}/>
    :
      parentCollection === 'certificates' ?
        <CertificateTechnicalTable documentId={documentId}
          setIsInternalLoading={props.setIsInternalLoading}/>
      :
        parentCollection === 'skills' ?
          <SkillTechnicalTable documentId={documentId}
          setIsInternalLoading={props.setIsInternalLoading}/>
        :
          <DefaultTechnicalTable skills={skills}/>
  )
}

TechnicalTable.propTypes = {
  parentCollection: propTypes.string.isRequired,
  documentId: propTypes.string,
  skills: propTypes.object,
  setIsInternalLoading: propTypes.func.isRequired
}

export default TechnicalTable;