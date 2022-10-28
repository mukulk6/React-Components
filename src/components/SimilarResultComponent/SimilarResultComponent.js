import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './SimilarResultComponent.module.css';
import RatingStars from '../RatingStars/RatingStars';
import moment from 'moment';

const SimilarResultComponent = (props) => {
  const [showMore, setShowMore] = useState(false);

  return (
      <div className={styles.similarSearchResultOutline}>
        <div class="row">
          <div className={styles.innerDiv}>
            <span className={styles.sharingButton}>
              <i class="fa-solid fa-share-nodes"></i>
            </span>
            <span className={styles.heartButton}>
              <i class="fa-solid fa-heart"></i>
            </span>
            <h2 className={styles.headTitle}>{props.data.question}</h2>
            <div class="input-group-prepend" className={styles.additionalCont}>
              {props.data.additionalContext && <span class="input-group-text" id="additionalContextspan">{props.data.additionalContext}</span>}             </div>
          </div>
          <div class="row">
            {/* <div class="col-md-2">
                  <div className={styles.tagDomain}>
                      <h3>Domain: <span className={styles.label}>{props.data.domain}</span></h3>
                  </div>
              </div> */}
            <div class="col-sm-12">
              <span className={styles.tagDomain}>
                <h3>Domain: <span className={styles.label}>{props.data.domain}</span></h3>
              </span>
              {/* <div class="col-md-2">
                  <div className={styles.tagsinQue}>
                      {(props.data.tags).length > 0 && <h3>Tags: {props.data.tags.map((tag) => { return (<span className={styles.tagLabel}>{tag}</span>) })}</h3>}
                  </div>
              </div> */}
             
             <div className={styles.tagsinQue}>
             {(props.data.tags).length > 0 && <h3>Tags: {props.data.tags.map((tag)=>{return(tag.clickable === true ? <span id={styles.clickabletag}>{tag.term}</span> : <span className={styles.tagLabel}>{tag.term}</span>)})}</h3>  }
              </div>
            </div>
          </div>
          <div class="col-md-12">
            {props.data.answers && props.data.answers.map((answer) => {
              return (
                <div className={styles.answerDiv}>
                  <div className={styles.expertInfo}>
                    <img class="rounded-circle" alt="40x40" src={require('../../images/sample.jpg')} id={styles.expertProfilePicture}
                      data-holder-rendered="true"></img>
                    <div class="row">
                      <div class={styles.userInfo}>
                        <span className={styles.userName}>
                          {answer.expert.firstName}&nbsp;{answer.expert.lastName}
                        </span>
                        <div className={styles.paste}>
                          <span className={styles.reqImg}>
                            <img src={require('../../images/help-support.jpg')} className={styles.updateIconimg}></img>
                          </span>
                          <span>
                            <i class="fa-solid fa-paste" id="pasteIcon"></i>
                          </span>

                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div className={styles.answeredInfo}>
                        <span className={styles.answeredBy}>Answered {moment(answer.answeredTimestamp).format("MMM DD, YYYY")}</span>
                        <span className='datestamp'></span>
                      </div>
                    </div>
                    <span className={styles.userScore}>

                    </span>
                    <div class='row'>
                      <div className={styles.answerBlock}>
                        {answer.answerText.length >= 550 && showMore ? <div dangerouslySetInnerHTML={{ __html: answer.answerText }}></div> : `${answer.answerText.substring(0,250)}` && <span className={styles.showMore} onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "Show more" || showMore ? <span className={styles.showMore}><i class="fa-solid fa-angle-up"></i>Show More</span> : <i class="fa-solid fa-angle-down"></i>}</span>}

                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-3 pull-left">
                        <span className={styles.viewCount}>
                          <i class="fa fa-eye" aria-hidden="true"></i>
                        </span>
                        <span className={styles.viewScore}>
                          {answer.popularityScore}
                        </span>
                        <span className={styles.ratingTitle}>Rating:</span>
                        <span className={styles.ratingStars}>
                          <RatingStars />
                        </span>
                      </div>
                      <div class="col-md-9 float-right">
                        <div class="text-end">
                          <div className={styles.helpfulButton}>
                            <div class="btn" id={styles.btnHelpful}>Helpful<img src={require('../../images/helpful.png')}></img></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>   
  )
};

SimilarResultComponent.propTypes = {};

SimilarResultComponent.defaultProps = {};

export default SimilarResultComponent;
