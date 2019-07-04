import React from 'react';
import propTypes from 'prop-types';

function PartOfPoint(props) {
  let partOf = [];
  for (let program in props.partOf) partOf.push(props.partOf[program]);
  return (
        <li>
          <p>Part Of:</p>
          <div className="answer">
            {
              partOf.map(program => (
                <p key={program.id}>
                  <a href={'/' + program.type + 's/' + program.id}>{program.title}</a>
                </p>
              ))
            }
          </div>
        </li>
  )
}

PartOfPoint.propTypes = {
  partOf: propTypes.object.isRequired
}

export default PartOfPoint;