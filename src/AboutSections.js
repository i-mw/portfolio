import React from 'react';
import propTypes from 'prop-types';
import AboutSection from './AboutSection.js'

function AboutSections(props) {
  return (
    <ul>
      {props.details.map((sectionContent, index) => {
        return <AboutSection key={index} sectionContent={sectionContent}/>
      })}
    </ul>
  );
}

AboutSections.propTypes = {
  details: propTypes.array.isRequired
}

export default AboutSections;