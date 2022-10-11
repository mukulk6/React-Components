import React from 'react';
import PropTypes from 'prop-types';
import styles from './PdfDocumentSourcedResult.module.css';
import { style } from '@mui/system';
import Image from 'react-bootstrap/Image';
import RatingStars from '../RatingStars/RatingStars';
import moment from 'moment';

const PdfDocumentSourcedResult = (props) => {
  return(
    <div class="container">
      <div className={styles.documentResultLayout}>
        <div class="row">
          <div class="col-sm-12">
            <div className={styles.resultCompononentInnerDiv}>
            <div className={styles.midContainer}>
              <Image roundedCircle={true} />
              <div className={styles.userInfo}>
                <span className={styles.userNameBot}>Vizerto Bot</span>
                <div>{props.data.docData.expertAnsweredTimestamp && <span>Answered {moment(props.data.docData.expertAnsweredTimestamp).format("LL")}</span>}</div>
              </div>
            </div>
            <div className={styles.answerTextBlock}>
              {}
            </div>
            <div class="row">
              <div class="col-md-4">
                <span className={styles.ratingText}>Rating: </span>
                <span><RatingStars /></span>
                <div class="col-md-8">
                  <span>Verify with Experts</span>
                  <span className={styles.searchSuggestionVerifyButton}><span>Yes</span><img style={{width:"18px"}}src={require('../../images/verify_now.png')}></img></span>
                  <span className={styles.helpfulButton}>Helpful<img src={require('../../images/helpful.png')}></img></span>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )

};

PdfDocumentSourcedResult.propTypes = {};

PdfDocumentSourcedResult.defaultProps = {};

export default PdfDocumentSourcedResult;
