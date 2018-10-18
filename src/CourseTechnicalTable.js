import React from 'react';
import propTypes from 'prop-types';
import SkillsPoint from './SkillsPoint'
import RemoteDatPoint from './RemoteDataPoint'

function CourseTechnicalTable(props) {
  return (
    <section className="wrap-out points">
      <div className="wrap-in">
        <table>
          <tbody>
            <SkillsPoint skills={props.skills}/>
            <RemoteDataPoint
              parentCollection='courses'
              searchCollection='projects'
              searchProperty={'partOf.' + documentId + '.id'}
              searchValue={documentId}
            />
            <RemoteDataPoint
              parentCollection='courses'
              searchCollection='snippets'
              searchProperty={'partOf.' + documentId + '.id'}
              searchValue={documentId}
            />
          </tbody>
        </table>
      </div>
    </section>
  )
}

CourseTechnicalTable.propTypes = {
  skills: propTypes.object.isRequired,
  documentId: propTypes.string.isRequired
}

export default CourseTechnicalTable;