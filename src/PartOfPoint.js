import React from 'react';
import propTypes from 'prop-types';

function PartOfPoint(props) {
  let partOf = [];
  for (let program in props.partOf) partOf.push(props.partOf[program]);
  return (
        <tr>
          <td>Part Of:</td>
          {
            partOf.map(program => (
              <td key={program.id}><a href={'./' + program.type + 's/' + program.id}>{program.title}</a></td>
            ))
          }
        </tr>
  )
}

PartOfPoint.propTypes = {
  partOf: propTypes.object.isRequired
}

export default PartOfPoint;