import React from 'react';
import PropTypes from 'prop-types';
import styles from './KeyTerms.module.css';

const KeyTerms = (props) => {
  return (
    <div className={styles.keyTermDiv}>
      <div class="row">
        <div class="col-sm-12">
          <h3 className={styles.keyTermsHeading}>{props.data.tagsData.tag}</h3>
        </div>
      </div>
      <div class="row">
        <span className={styles.domainKeyTerms}>Domain: </span>
        <span className={styles.domainName}>{props.data.tagsData.domains}</span>
        <span className={styles.countQuestions}>{props.data.tagsData.count} Questions</span>
      </div>
    </div>
 )
};

KeyTerms.propTypes = {};

KeyTerms.defaultProps = {};

export default KeyTerms;
