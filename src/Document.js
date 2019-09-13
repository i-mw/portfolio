import React, {Component} from 'react';
import propTypes from 'prop-types';
import * as dbAPI from './dbAPI.js';
import Header from './Header';
import Jumbo from './Jumbo';
import RoutineTable from './RoutineTable';
import LinksTable from './LinksTable';
import TechnicalTable from './TechnicalTable'
import Post from './Post'
import NotFound from './NotFound';
import InternalLoading from './InternalLoading'

class Document extends Component {
  state = {
    doc: null
  }

  retrieveData = _ => {
    dbAPI.getDoc(this.props.parentCollection + '-heavy', this.props.documentId)
    .then(data => {
      this.props.setIsExternalLoading(false);
      this.setState({doc: data ? data : '404'})
    })

  }

  /**
   * @description componentWillMount used instead of componentDidMount
   * because this component (Document component) will be called asynchronously
   * via 'react-loadable' module, thus there already will be content on user
   * screen before this component loads
   */
  componentWillMount() {
    this.props.setIsExternalLoading(true);
    this.retrieveData()
  }

  render() {
    const {doc} = this.state;

    return(
      doc === '404' ? <NotFound />
      :
      doc && (
        <section>
          <Header type="doc" headline={doc.title}
            primaryLang={doc.primaryLanguage}
            parentCollection={this.props.parentCollection}/>
          <main className="doc">
            <div className="container" tabIndex="-1">
              <Jumbo summary={doc.summary}
                jumboImage={doc.images.find(image => image.placing === 'jumbo')}/>
              {((doc.links && doc.links.preview) || 
                (doc.links && doc.links.source) ||
                (doc.links && doc.links.certificate) ||
                (doc.links && doc.links.syllabus)) && 
                <LinksTable
                preview={doc.links && doc.links.preview}
                source={doc.links && doc.links.source}
                certificate={doc.links && doc.links.certificate}
                syllabus={doc.links && doc.links.syllabus}/>}
              {(doc.primaryLang || doc.categories || doc.dates ||
                doc.duration || doc.provider || doc.author || doc.publisher ||
                doc.partOf) && 
                <RoutineTable
                primaryLanguage={doc.primaryLanguage}
                categories={doc.categories}
                dates={doc.dates}
                duration={doc.duration}
                provider={doc.provider}
                author={doc.author}
                publisher={doc.publisher}
                partOf={doc.partOf}/>}
              <TechnicalTable
                parentCollection={this.props.parentCollection}
                documentId={this.props.documentId}
                skills={doc.skills}
                setIsInternalLoading={this.props.setIsInternalLoading}/>
              {doc.details && <Post postContent={doc.details}/>}
              {this.props.isInternalLoading && <InternalLoading/>}
            </div>
          </main>
        </section>
      )
    );
  }
}

Document.propTypes = {
  parentCollection: propTypes.string.isRequired,
  documentId: propTypes.string.isRequired,
  setIsExternalLoading: propTypes.func.isRequired,
  setIsInternalLoading: propTypes.func.isRequired,
  isInternalLoading: propTypes.bool.isRequired
}

export default Document;