import React from 'react';
import Header from './Header';

function NotFound(props) {
  const headline = "That's a 404 (not found)!";
  const headlinePoints = [
    {
      title: null,
      content: [
        {
          type: 'paragraph',
          i:  "Try using the navigation above."
        }
      ]
    }
  ];

  return(
    <section>
      <Header type='not-found' headline={headline} headlinePoints={headlinePoints}/>
    </section>
  );
}

export default NotFound;