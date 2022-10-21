import React from 'react';
import PropTypes from 'prop-types';
import styles from './ThreadResultComponent.module.css';
import ThreadResultReply from '../ThreadResultReply/ThreadResultReply';
import moment from 'moment';
import RatingStars from '../RatingStars/RatingStars';
import { Image } from 'react-bootstrap';

const ThreadResultComponent = (props) => {
  return (
    <div class="container">
      <div className={styles.documentResultLayout}>
        <div class="row">
          <div class="col-sm-12">
            <div className={styles.resultCompononentInnerDiv}>
              <div className={styles.midContainer}>
                <Image roundedCircle={true} src={require('../../images/bot_icon.png')} style={{ width: "40px", height: "40px", float: "left" }} />
                <div className={styles.userInfo}>
                  <span className={styles.userNameBot}>Vizerto Bot</span>
                  <span className={styles.clipboardPaste}><i class="fa fa-clipboard" aria-hidden="true"></i></span>
                  {/* <div>{props.data.docData.expertAnsweredTimestamp && <span>Answered {moment(props.data.docData.expertAnsweredTimestamp).format("LL")}</span>}</div> */}
                  <span className={styles.datestamp}>Answered {moment(props.data.expertAnsweredTimestamp).fromNow()}</span>
                </div>
              </div>
              <div className={styles.answerTextBlock}>
                {
                  <div className={styles.firstThreadLayout}>
                    <div className={styles.innerThreadDiv}>
                      <h4 className={styles.firstReply}>
                        {
                            props.data.answers.map((data,ind)=>{
                              return(
                                <div key={ind}>
                                  {data.threads[0]}
                                </div>
                              )
                            })
                        }
                      </h4>
                    </div>
                    {/* {
                      props.data.threads.map((thread) => {
                        return (
                          <ThreadResultReply thread={thread} />
                        )
                      })
                    } */}
                  </div>
                }
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
}

  ;

ThreadResultComponent.propTypes = {};

ThreadResultComponent.defaultProps = {};

export default ThreadResultComponent;
