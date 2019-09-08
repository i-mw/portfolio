import React from 'react';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom'

function SkillsPoint(props) {
  let skills = [];
  for (let skill in props.skills) skills.push(props.skills[skill]);

  return (
    skills.length > 0 && (
      <div className="pointSection">
        <h2>Skills</h2>
        <ul>
          {
          skills.map(skill => (
            <li key={skill.id} className="wrap-out">
              <Link to={'/skills/' + skill.id}
              className="wrap-in">{skill.title}</Link>
            </li>
          ))
          }
        </ul>
      </div>
    )
  )
}

SkillsPoint.propTypes = {
  skills: propTypes.object.isRequired
}

export default SkillsPoint;