import React, {Component} from 'react';
import Header from './Header';
import propTypes from 'prop-types';

class NotFound extends Component {
  componentDidMount() {
    this.props.setIsExternalLoading && (this.props.setIsExternalLoading(false));
  }

  render() {
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
}

NotFound.propTypes = {
  setIsExternalLoading: propTypes.func
}

export default NotFound;