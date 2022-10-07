import React from 'react';
import PropTypes from 'prop-types';
import styles from './KeyTerms.module.css';

const KeyTerms = (props) => {
  return (
    <div className={styles.keyTermDiv}>
      <div class="row">
        <div class="col-sm-12">
          <h3 className={styles.keyTermsHeading}>{props.data.tag}</h3>
        </div>
      </div>
      <div class="container">
      <div class="row">
          <div class="col-md-8">
            <span className={styles.domainKeyTerms}>Domain: </span>
            {(props.data.domains).length > 0 ? <span className={styles.domainName}>&nbsp;{props.data.domains}&nbsp;</span> : <span className={styles.domainName}>Unclassified</span>}
          </div>
          <div class="col-md-4">
            <span className={styles.countQuestions}>{props.data.count} Questions</span>
          </div>
        </div>
      </div>
    </div>
  )
};

KeyTerms.propTypes = {};

KeyTerms.defaultProps = {};

export default KeyTerms;
