import React from 'react';
import PropTypes from 'prop-types';
import styles from './TrendingTab.module.css';
import NavigationBar from '../NavigationBar/NavigationBar';
import SearchBar from '../SearchBar/SearchBar';
import SeekerData from '../Elements/getprofileSeeker.json';
import TabSearch from '../TabSearch/TabSearch';
import Elements from '../Elements/Elements';
import Multiselectdropdowndomain from '../Multiselectdropdowndomain/Multiselectdropdowndomain';


const TrendingTab = () => (

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
        <TabSearch />
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
        {Trend.slice(0, visibleQuestions).map((question) =>
          <div class="row">
            <div class="col-md-12" className={styles.questionList}>
              <div className={styles.innerDiv}>
                <span className={styles.sharingButton}>
                  <i class="fa-solid fa-share-nodes"></i>
                </span>
                <span className={styles.heartButton}>
                  <i class="fa-solid fa-heart"></i>
                </span>
                <h2 className={styles.headTitle}>{question.text}</h2>
                <div class="row">
                  <div class="input-group-prepend" className={styles.additionalCont}>
                    {question.additionalContext && <span class="input-group-text" id="basic-addon3">{question.additionalContext}</span>}
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-2">
                    <div className={styles.tagDomain}>
                      <h3>Domain<span className={styles.label}>{question.domain}</span></h3>
                    </div>
                  </div>
                  <div class="col-md-2">
                    <div className={styles.tagDomain}>
                      {question.relatedCount > 0 && <h3 className={styles.relatedQuestions}>Related Questions: <span className={styles.relatedCountNumber}>{question.relatedCount}</span></h3>}
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-10">
                    <div className={styles.tagsinQue}>
                      {(question.tags).length > 0 && <h3>Tags: {question.tags.map((tag) => { return (<span className={styles.tagLabel}>{tag}</span>) })}</h3>}
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-12">
                    {question.answersList && question.answersList.map((que) => {
                      const result = que.answer.replace(regex, ''); return (
                        <div className={styles.answerDiv}>
                          <div className={styles.expertInfo}>
                            <img class="rounded-circle" alt="40x40" src={require('../../images/sample.jpg')}
                              data-holder-rendered="true"></img>
                            <div class="row">
                              <div class={styles.userInfo}>
                                <span className={styles.userName}>
                                  {que.expertFirstName}&nbsp;{que.expertLastName}
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
                                <span className='datestamp'>{moment(que.answeredTimestamp).fromNow()}</span>

                              </div>
                            </div>
                            <span className={styles.userScore}>
                              {/* /* <FontAwesomeIcon icon="fa-solid fa-award" /> */}
                            </span>
                            <div class='row'>
                              <div className={styles.answerBlock}>
                                <p>{((que.answer).length >= 550 && <div className={styles.fader} show={showShow} ><div className={styles.contentVar} ><p>{result}</p></div></div>)}{(que.answer).length < 550 && <p>{que.answer}</p>}</p>
                                <div class="row">
                                  {(que.answer).length >= 550 && <span className={styles.showMore} role="button" type="button" onClick={toggleShow}><i class="fa-solid fa-angle-down"></i>Show More</span>}
                                </div>
                                <span className='datestamp'>{dateformat}</span>

                              </div>
                            </div>
                            <span className={styles.userScore}>
                              {/* /* <FontAwesomeIcon icon="fa-solid fa-award" /> */}
                            </span>
                            <div class='row'>
                              <div className={styles.answerBlock}>
                                <p>{(que.answer).length >= 550 && <div className={styles.fader}><div className={styles.contentVar}><p>{que.answer}</p></div></div>}</p>
                                <div class="row">
                                  {(que.answer).length >= 550 && <span className={styles.showMore} role="button" type="button"><i class="fa-solid fa-angle-down"></i>Show More</span>}
                                </div>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-md-3 pull-left">
                                <span className={styles.viewCount}>
                                  <i class="fa fa-eye" aria-hidden="true"></i>
                                </span>
                                <span className={styles.viewScore}>
                                  {que.popularityScore}
                                </span>
                              </div>
                              <div class="col-md-9 float-right">
                                <div class="pull-right">
                                  <div>
                                    {que.voteInfo.upvoteCount > 0 ? <span className={styles.upvoteButton}><i class="fa-solid fa-thumbs-up"></i><span className={styles.upvoteLikeText}> Like</span></span> : <span className={styles.upvoteButton}><i class="fa-solid fa-thumbs-up"></i><span className={styles.upvoteLikeText}>{que.voteInfo.upvoteCount}</span></span>}
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
            </div>
          </div>
        )}
      </div>
    </section>
  </div>
);

TrendingTab.propTypes = {};

TrendingTab.defaultProps = {};

export default TrendingTab;
