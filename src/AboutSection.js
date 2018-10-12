import React from 'react';
import propTypes from 'prop-types';
import Summary from './Summary'

function AboutSection(props) {
  return (
    <li className="details wrap-out">
      <div className="wrap-in thick-border">
        <Summary summaryContent={props.sectionContent.content}/>
      </div>
    </li>
  );
}

AboutSection.propTypes = {
  sectionContent: propTypes.object.isRequired
}

export default AboutSection;