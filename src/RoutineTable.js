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
    <section className="wrap-out points">
      <div className="wrap-in">
        <table>
          <tbody>
            {primaryLanguage && 
              <PrimaryLanguagePoint primaryLanguage={primaryLanguage}/>}
            {categories && <CategoriesPoint categories={categories}/>}
            {dates && <DatesPoint dates={dates}/>}
            {duration && <DurationPoint duration={duration}/>}
            {provider && <ProviderPoint provider={provider}/>}
            {author && <AuthorPoint author={author}/>}
            {publisher && <PublisherPoint publisher={publisher}/>}
            {partOf && <PartOfPoint partOf={partOf}/>}
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