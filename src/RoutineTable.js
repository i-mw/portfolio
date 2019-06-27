import React from 'react';
import propTypes from 'prop-types';
import PrimaryLanguagePoint from './PrimaryLanguagePoint'
import CategoriesPoint from './CategoriesPoint'
import DatesPoint from './DatesPoint'
import DurationPoint from './DurationPoint'
import ProviderPoint from './ProviderPoint'
import AuthorPoint from './AuthorPoint'
import PublisherPoint from './PublisherPoint'
import PartOfPoint from './PartOfPoint'

function RoutineTable(props) {
  const {
    primaryLanguage,
    categories,
    dates,
    duration,
    provider,
    author,
    publisher,
    partOf
  } = props;
  
  return (
    <section className="wrap-out points routine">
      <div className="wrap-in">
        <table>
          <tbody>
            {primaryLanguage ? 
              <PrimaryLanguagePoint primaryLanguage={primaryLanguage}/> : null}
            {categories ? <CategoriesPoint categories={categories}/> : null}
            {dates ? <DatesPoint dates={dates}/> : null}
            {duration ? <DurationPoint duration={duration}/> : null}
            {provider ? <ProviderPoint provider={provider}/> : null}
            {author ? <AuthorPoint author={author}/> : null}
            {publisher ? <PublisherPoint publisher={publisher}/> : null}
            {partOf ? <PartOfPoint partOf={partOf}/> : null}
          </tbody>
        </table>
      </div>
    </section>
  )
}

RoutineTable.propTypes = {
  primaryLanguage: propTypes.string,
  categories: propTypes.array,
  dates: propTypes.object,
  duration: propTypes.string,
  provider: propTypes.object,
  author: propTypes.string,
  publisher: propTypes.string,
  partOf: propTypes.object,
}

export default RoutineTable;