import React, {Component} from 'react';
import propTypes from 'prop-types';
import * as dbAPI from './dbAPI.js';
import Header from './Header';

class Document extends Component {
  state = {
    doc: null
  }

  retrieveData = _ => {
    /* TODO: retrieve data here */
    dbAPI.getDoc(this.props.parentCollection + '-heavy', this.props.documentId)
    .then(data => {
      this.setState({doc: data});
    })

  }

  /**
   * @description componentWillMount used instead of componentDidMount
   * because this component (Document component) will be called asynchronously
   * via 'react-loadable' module, thus there already will be content on user
   * screen before this component loads
   */
  componentWillMount() {
    this.retrieveData()
  }

  render() {
    const {doc} = this.state;

    return(
      doc && (
        <section>
          <Header type="doc" headline={doc.title}
            primaryLang={doc.primaryLanguage}
            parentCollection={this.props.parentCollection}/>
        </section>
      )
    );
  }
}

Document.propTypes = {
  parentCollection: propTypes.string.isRequired,
  documentId: propTypes.string.isRequired
}

export default Document;