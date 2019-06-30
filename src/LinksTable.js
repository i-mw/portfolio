import React from 'react';
import propTypes from 'prop-types';
import PreviewPoint from './PreviewPoint'
import SourcePoint from './SourcePoint'
import CertificatePoint from './CertificatePoint'
import SyllabusPoint from './SyllabusPoint'

function LinksTable(props) {
  const {
    preview,
    source,
    certificate,
    syllabus
  } = props;

  return (
    <section className="links">
        <ul>
            {preview && <PreviewPoint preview={preview}/>}
            {source && <SourcePoint source={source}/>}
            {certificate && <CertificatePoint certificate={certificate}/>}
            {syllabus && <SyllabusPoint syllabus={syllabus}/>}
        </ul>
    </section>
  )
}

LinksTable.propTypes = {
  preview: propTypes.string,
  source: propTypes.string,
  certificate: propTypes.string,
  syllabus: propTypes.string,
}

export default LinksTable;