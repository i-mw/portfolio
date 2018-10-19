import React, {Component} from 'react';
import propTypes from 'prop-types';
import * as dbAPI from './dbAPI.js';
import Header from './Header';
import Jumbo from './Jumbo';
import RoutineTable from './RoutineTable';
import LinksTable from './LinksTable';
import TechnicalTable from './TechnicalTable'

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
          <main className="doc">
            <div className="container" tabIndex="-1">
              <Jumbo summary={doc.summary}
                jumboImage={doc.images.find(image => image.placing === 'jumbo')}/>
              <RoutineTable
                primaryLanguage={doc.primaryLanguage}
                categories={doc.categories}
                dates={doc.dates}
                duration={doc.duration}
                provider={doc.provider}
                author={doc.author}
                publisher={doc.publisher}
                partOf={doc.partOf}/>
              <LinksTable
                preview={doc.links.preview}
                source={doc.links.source}
                certificate={doc.links.certificate}
                syllabus={doc.links.syllabus}/>
              <TechnicalTable
                parentCollection={this.props.parentCollection}
                documentId={this.props.documentId}
                skills={doc.skills}
                />
            </div>
          </main>
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