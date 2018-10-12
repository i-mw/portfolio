import React from 'react';
import propTypes from 'prop-types';
import Summary from './Summary';

function PostSection(props) {
  return (
    <div className="writing-section">
      <h3>{props.sectionContent.title}</h3>
      <Summary summaryContent={props.sectionContent.content}/>
    </div>
  );
}

PostSection.propTypes = {
  sectionContent: propTypes.object.isRequired
}

export default PostSection;