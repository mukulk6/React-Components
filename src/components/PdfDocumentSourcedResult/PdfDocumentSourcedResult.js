import React from 'react';
import PropTypes from 'prop-types';
import styles from './PdfDocumentSourcedResult.module.css';
import { style } from '@mui/system';
import Image from 'react-bootstrap/Image';
import RatingStars from '../RatingStars/RatingStars';
import moment from 'moment';

// $scope.highlightImpPara = function(para, start, end, summerized){
//   let startSpan = start.split(',').sort((a,b)=> parseInt(a) - parseInt(b));
//   let endSpan = end.split(',').sort((a,b)=> parseInt(a) - parseInt(b));
//   let indexOffset = 0;
//   for(let i =0; i< startSpan.length;++i){
//     if(startSpan[i] !== endSpan[i]){
//       para = para.substring(0, parseInt(startSpan[i])+indexOffset) + "<span style='font-weight:bold'>" + para.substring(parseInt(startSpan[i])+indexOffset, parseInt(endSpan[i])+indexOffset)+"</span>"+para.substring(parseInt(endSpan[i])+indexOffset, para.length-1);
//       indexOffset = indexOffset + 38;
//     }
//   }
// return para;
// }

const PdfDocumentSourcedResult = (props) => {
  return (
    <div class="container">
      <div className={styles.documentResultLayout}>
        <div class="row">
          <div class="col-sm-12">
            <div className={styles.resultCompononentInnerDiv}>
              <div className={styles.midContainer}>
                <Image roundedCircle={true} src={require('../../images/bot_icon.png')} style={{width:"40px",height:"40px",float:"left"}} />
                <div className={styles.userInfo}>
                  <span className={styles.userNameBot}>Vizerto Bot</span>
                  <span className={styles.clipboardPaste}><i class="fa fa-clipboard" aria-hidden="true"></i></span>
                  {/* <div>{props.data.docData.expertAnsweredTimestamp && <span>Answered {moment(props.data.docData.expertAnsweredTimestamp).format("LL")}</span>}</div> */}
                  <span className={styles.datestamp}>Answered {moment(props.ans.expertAnsweredTimestamp).fromNow()}</span>
                </div>
              </div>
              <div className={styles.answerTextBlock}>
                {props.ans.answers.map((answer) => { return (<p>{answer.answerText}</p>) })}
              </div>
              <div class="row">
                <div class="col-md-4">
                  <span className={styles.ratingText}>Rating: </span>
                  <span><RatingStars /></span>
                </div>
                <div class="col-md-8">
                  <span className={styles.helpfulButton}>Helpful<img src={require('../../images/helpful.png')}></img></span>
                  <div class="float-end">
                  <span className={styles.verifyWithExpert}>Verify with Experts?</span>
                  <span className={styles.searchSuggestionVerifyButton}><span className={styles.yesText}>Yes</span><img style={{ width: "18px" }} src={require('../../images/verify_now.png')}></img></span>
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
