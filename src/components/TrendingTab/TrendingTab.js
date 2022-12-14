import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './TrendingTab.module.css';
import NavigationBar from '../NavigationBar/NavigationBar';
import SearchBar from '../SearchBar/SearchBar';
import SeekerData from '../Elements/getprofileSeeker.json';
import TabSearch from '../TabSearch/TabSearch';
import Elements from '../Elements/Elements';
import Multiselectdropdowndomain from '../Multiselectdropdowndomain/Multiselectdropdowndomain';
import Trend from './TrendingTab.json';
import moment from 'moment';
import { style } from '@mui/system';

function trendingTab() {
  return Trend;
}

const TrendingTab = () => {
  const [showMore,setShowMore] = useState(false);
  const trending = trendingTab();
  return (
    <div class="container">
      <NavigationBar />
      <div className={styles.Wrappersearchbar}>
        <div className={styles.midContainer}>
          <div class="container">
            {
              SeekerData.map((postData, index) => {
                return (
                  <div key={index}>
                    <SearchBar data={postData} />
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <section>
        <div class="row" id={styles.bottomRow}>
          <div class="col-md-3">
            <h3 className={styles.openQuestions}>Trending Questions</h3>
          </div>
          <div class="col-md-3">
          <TabSearch />
          </div>
          <Elements />
          {
            SeekerData.map((postData, index) => {
              return (
                <div key={index} class="col-md-3">
                  <span id={styles.domainTextMultiselect}>Domain:</span>
                  <Multiselectdropdowndomain data={postData} />
                </div>
              )
            })
          }
        </div>
        <div class="row">
          {trending.map((tre) =>
            <div class="row">
              <div class="col-md-12" className={styles.questionList}>
                <div className={styles.innerDiv}>
                  <span className={styles.sharingButton}>
                    <i class="fa-solid fa-share-nodes"></i>
                  </span>
                  <span className={styles.heartButton}>
                    <i class="fa-solid fa-heart"></i>
                  </span>
                  <h2 className={styles.headTitle}>{tre.text}</h2>
                  <div class="row">
                    <div class="input-group-prepend" className={styles.additionalCont}>
                      {tre.additionalContext && <span class="input-group-text" id="basic-addon3">{tre.additionalContext}</span>}
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-3">
                      <div className={styles.tagDomain}>
                        <h3>Domain: <span className={styles.label}>{tre.domain}</span></h3>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div className={styles.tagDomain}>
                        {tre.relatedCount > 0 && <h3 className={styles.relatedQuestions}>Related Questions: <span className={styles.relatedCountNumber}>{tre.relatedCount}</span></h3>}
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-10">
                      <div className={styles.tagsinQue}>
                        {(tre.tags).length > 0 && <h3>Tags: {tre.tags.map((tag)=>{return(tag.clickable === true ? <span id={styles.clickabletag}>{tag.term}</span> : <span className={styles.tagLabel}>{tag.term}</span>)})}</h3>  }
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      {tre.answersList && tre.answersList.map((ans) => {
                        // const result = tre.answer.replace(regex, ''); 
                        return (
                          <div className={styles.answerDiv}>
                            <div className={styles.expertInfo}>
                              <img class="rounded-circle" alt="40x40" id={styles.expertProfilePicture} src={require('../../images/sample.jpg')}
                                data-holder-rendered="true"></img>
                              <div class="row">
                                <div class={styles.userInfo}>
                                  <span className={styles.userName}>
                                    {ans.expertFirstName}&nbsp;{ans.expertLastName}
                                  
                                  </span>
                                  <div className={styles.paste}>
                                    <span className={styles.reqImg}>
                                      <img src={require('../../images/help-support.jpg')} className={styles.updateIconimg}></img>
                                    </span>
                                    <span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div className={styles.answeredInfo}>
                                  <span className='answeredBy'>Answered</span>
                                  <span className='datestamp'>{(moment(ans.answeredTimestamp).format("MMM DD, YYYY"))}</span>
                                </div>
                              </div>
                              <span className={styles.userScore}>
                                {/* /* <FontAwesomeIcon icon="fa-solid fa-award" /> */}
                              </span>
                              <div class='row'>
                                <div className={styles.answerBlock}>
                                  {/* <p>{((ans.answer).length >= 550 && <div className={styles.fader} ><div className={styles.contentVar} ><p></p></div></div>)}{(ans.answer).length < 550 && <p>{ans.answer}</p>}</p> */}
                                  <p>{(ans.answer).length >=550 ? <div dangerouslySetInnerHTML={{__html:ans.answer.substring(0,250)}}></div> : <div dangerouslySetInnerHTML={{__html:ans.answer}}></div>}</p>
                                  
                                  {/* <div class="row">
                                    {(ans.answer).length >= 550 && <span className={styles.showMore} role="button" type="button"><i class="fa-solid fa-angle-down"></i>Show More</span>}
                                  </div> */}
                                  <span className='datestamp'></span>
                                </div>
                              </div>
                              <span className={styles.userScore}>
                                {/* /* <FontAwesomeIcon icon="fa-solid fa-award" /> */}
                              </span>
                              <div class="row">
                                <div class="col-md-3 pull-left">
                                {ans.popularityScore == 0 ? <span className={styles.viewScore}><i  class="fa fa-eye" aria-hidden="true" style={{display:'none'}}></i></span>: <span className={styles.viewScore}><i class="fa fa-eye" aria-hidden="true"></i></span>}
                                  <span className={styles.viewScore}>
                                    {ans.popularityScore}
                                  </span>                      
                                </div>
                                <div class="col-md-9 float-right">
                                  {/* <div class="pull-right">
                                    <div>
                                      {ans.voteInfo.upvoteCount > 0 ? <span className={styles.upvoteButton} style={{"color":"#009ff1"}}><i class="fa-solid fa-thumbs-up" style={{"fontSize":"18px"}}><span style={{"fontSize":"12px","paddingLeft":"5px"}}>{ans.voteInfo.upvoteCount}</span></i></span> : <span className={styles.upvoteButton}><i class="fa-solid fa-thumbs-up" style={{"fontSize":"20px"}}></i><span className={styles.upvoteLikeText}>Like</span></span>}
                                    </div>
                                  </div> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })}

                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
};

TrendingTab.propTypes = {};

TrendingTab.defaultProps = {};

export default TrendingTab;
