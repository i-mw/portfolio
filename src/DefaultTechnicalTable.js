import React from 'react';
import propTypes from 'prop-types';
import SkillsPoint from './SkillsPoint';

function DefaultTechnicalTable(props) {
  return (
    <section className="wrap-out points">
      <div className="wrap-in">
        <table>
          <tbody>
            <SkillsPoint skills={props.skills}/>
          </tbody>
        </table>
      </div>
    </section>
  )
}

DefaultTechnicalTable.propTypes = {
  skills: propTypes.object.isRequired
}

export default DefaultTechnicalTable;