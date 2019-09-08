import React from 'react';
import propTypes from 'prop-types';
import SkillsPoint from './SkillsPoint';

function DefaultTechnicalTable(props) {
  return (
    <section className="technical">
      <SkillsPoint skills={props.skills}/>
    </section>
  )
}

DefaultTechnicalTable.propTypes = {
  skills: propTypes.object.isRequired
}

export default DefaultTechnicalTable;