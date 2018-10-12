import React from 'react';
import propTypes from 'prop-types';
import PostSection from './PostSection';

function Post(props) {
  return (
    <section className="wrap-out details">
      <div className="wrap-in">
      {
        props.postContent.map((sectionContent, index) => (
          <PostSection sectionContent={sectionContent} key={index}/>
        ))
      }
      </div>
    </section>
  );
}

Post.propTypes = {
  postContent: propTypes.array.isRequired
}

export default Post;