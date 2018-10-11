import React from 'react';
import propTypes from 'prop-types';

function AboutSection(props) {
  return (
    <li className="details wrap-out">
      <div className="wrap-in thick-border">
        {props.sectionContent.content.map((paragraph, index) => {
          return <p key={index} dangerouslySetInnerHTML={{__html: paragraph.i}}></p>
        })}
      </div>
    </li>
  );
}

AboutSection.propTypes = {
  sectionContent: propTypes.object.isRequired
}

export default AboutSection;