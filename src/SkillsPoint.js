import React from 'react';
import propTypes from 'prop-types';

function SkillsPoint(props) {
  let skills = [];
  for (let skill in props.skills) skills.push(props.skills[skill]);
  return (
        <tr>
          <td>Skills:</td>
          {
            skills.map(skill => (
              <td key={skill.id}><a href={'/skills/' + skill.id}>{skill.title}</a></td>
            ))
          }
        </tr>
  )
}

SkillsPoint.propTypes = {
  skills: propTypes.object.isRequired
}

export default SkillsPoint;