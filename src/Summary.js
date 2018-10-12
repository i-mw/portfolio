import React from 'react';
import propTypes from 'prop-types';

function Summary(props) {
  return (
    <div className="summary">
        {props.summaryContent.map((paragraph, index) => {
          return <p key={index} dangerouslySetInnerHTML={{__html: paragraph.i}}></p>
        })}
    </div>   
  );
}

Summary.propTypes = {
  summaryContent: propTypes.array.isRequired
}

export default Summary;