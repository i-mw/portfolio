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
import NetworkError from './NetworkError'

class Document extends Component {
  state = {
    doc: null
  }

  _isMounted = false;

  retrieveData = _ => {
    if (this._isMounted) {
      dbAPI.getDoc(this.props.parentCollection + '-heavy', this.props.documentId)
      .then(data => {
        this.props.setIsExternalLoading(false);
        this.props.setIsOnline(true);
        if (this._isMounted) {
          this.setState({doc: data ? data : '404'})
        }
      })
      .catch(error => {
        if (error.message.indexOf('offline') > -1) {
          this.props.setIsOnline(false);
        }
      })
    }
  }

  componentDidMount() {
    this._isMounted = true;
    this.props.setIsExternalLoading(true);
    this.retrieveData()
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const {doc} = this.state;

    if (doc === '404') {
      return(<NotFound />)
    }
    else if (!doc && !this.props.isOnline){
      return(
        <section>
          <NetworkError placement="network-error-inline"/>
        </section>
      )
    }
    else if (doc) {
      return(
        <section>
          <Header type="doc" headline={doc.title}
            primaryLang={doc.primaryLanguage}
            parentCollection={this.props.parentCollection}/>
          <main className={this.props.parentCollection === 'skills' ? 'doc skills' : 'doc'}>
            <div className="container" tabIndex="-1">
              <Jumbo summary={doc.summary}
                colType={this.props.parentCollection}
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
                setIsInternalLoading={this.props.setIsInternalLoading}
                setIsOnline={this.props.setIsOnline}/>
              {(this.props.isInternalLoading && this.props.isOnline) && <InternalLoading/>}
              {doc.details && <Post postContent={doc.details}/>}
              {!this.props.isOnline && <NetworkError placement="network-error-inline"/>}
            </div>
          </main>
        </section>
      );        
    }
    else {
      return('')
    }
  }
}

Document.propTypes = {
  parentCollection: propTypes.string.isRequired,
  documentId: propTypes.string.isRequired,
  setIsExternalLoading: propTypes.func.isRequired,
  setIsInternalLoading: propTypes.func.isRequired,
  isInternalLoading: propTypes.bool.isRequired,
  setIsOnline: propTypes.func.isRequired,
  isOnline: propTypes.bool.isRequired
}

export default Document;