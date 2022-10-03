import React,{useState} from 'react';
import PropTypes from 'prop-types';
import styles from './BestResultComponent.module.css';
import RatingStars from '../RatingStars/RatingStars';

const BestResultComponent = (props) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div class="container">
      {/* <div class="row">
        <div class="col-md-12">
          <span id={styles.bestResultText}><i class="fa-regular fa-lightbulb" id={styles.resultBulbIcon}></i>Best Result<span>{props.data.length > 1}s</span></span>
          <hr></hr>
        </div>
      </div> */}
      <div class="row">
        <div className={styles.searchOutline}>
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
            <div class="col-md-2">
              <div className={styles.tagDomain}>
                <h3>Domain: <span className={styles.label}>{props.data.domain}</span></h3>
              </div>
            </div>
            <div class="col-md-2">
              <div className={styles.tagsinQue}>
                {(props.data.tags).length > 0 && <h3>Tags: {props.data.tags.map((tag) => { return (<span className={styles.tagLabel}>{tag}</span>) })}</h3>}
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
                        <span className='answeredBy'>Answered</span>
                        <span className='datestamp'></span>
                      </div>
                    </div>
                    <span className={styles.userScore}>

                    </span>
                    <div class='row'>
                      <div className={styles.answerBlock}>
                        {/* {(answer.answerText).length >= 550 && showMore ? <div dangerouslySetInnerHTML={{ __html: answer.answerText }}></div> : `${answer.answerText.substring(0, 250)}` && <span className={styles.showMore} onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "Show more" + showMore ? <span className={styles.showMore}><i class="fa-solid fa-angle-down"></i>Show More</span> : <i class="fa-solid fa-angle-up"></i>}</span>} */}
                        {/* {(answer.answerText).length >=550 && showMore ? answer.answerText : `${<><div dangerouslySetInnerHTML={{__html:answer.answerText.substring(0, 250)}}></div><span className={styles.showMore} onClick={()=>setShowMore{!showMore}}>{showMore ? <i class="fa-solid fa-angle-down"></i> : <i class="fa-solid fa-angle-up"></i>}</span></>}`} */}
                        {/* {(answer.answerText).length >= 550 && showMore ? <div dangerouslySetInnerHTML={{ __html: answer.answerText}}></div> : `${answer.answerText.substring(0.250)}` && <span className={styles.showMore} onClick={()=>setShowMore(!showMore)}>{showMore ?<span className={styles.showMore}><i class="fa fa-angle fa-angle-up"></i>show less</span>: <span className={styles.showMore}><i class="fa fa-angle fa-angle-down"></i>show more</span>}</span>} */}
                        {/* {(answer.answerText).length < 550 && <div dangerouslySetInnerHTML={{__html:answer.answerText}}></div>} */}
                        {/* <span className={styles.showMore} onClick={() => setShowMore(!showMore)}>{(answer.answerText).length >=550 && showMore ? <span className={styles.showMore}><i class="fa-solid fa-angle-down"></i>Show Less</span> : <span className={styles.showMore}><i class="fa-solid fa-angle-up"></i>Show More</span>}</span> */}
                        {/* {(answer.answerText).length >= 550 && <span className={styles.showMore} onClick={() => setShowMore(!showMore)}>{(answer.answerText).length >= 550 && showMore ? <span className={styles.showMore}><i class="fa-solid fa-angle-down"></i>Show Less</span> : <span className={styles.showMore}><i class="fa-solid fa-angle-up"></i>Show More</span>}</span> && <div className={styles.variheightdiv}><div className={styles.fader}><div dangerouslySetInnerHTML={{ __html: answer.answerText }}></div></div></div>} */}
                        {/* {(answer.answerText).length <= 550 && <p>{answer.answerText}</p>} */}
                        {/* {showMore ? (answer.answerText).length >=550 && <div dangerouslySetInnerHTML={{__html:answer.text}}></div> :`${(answer.answerText)<=550 && answer.answerText.substring(0,250)}`} */}
                        {/* <span className={styles.showMore} onClick={()=>setShowMore(!showMore)}>{showMore ? <span><i class="fa fa-angle-up"></i>show less</span> : <span><i class="fa fa-angle-down"></i>show more</span> }</span> */}
                        {/* {(answer.answerText).length >=550  && showMore ? <div dangerouslySetInnerHTML={{__html:answer.answerText}}></div> : `${<div className={styles.vatiheightdiv}><div class={styles.fader}><div dangerouslySetInnerHTML={{__html:(answer.answerText).substring(0,250)}}></div></div></div>}` && <span className={styles.showMore} onClick={()=>setShowMore(!showMore)}>{showMore ? <span><i class="fa fa-angle-up"></i>show less</span> : <span><i class="fa fa-angle-down"></i>show more</span>}</span>} */}
                        {answer.answerText.length >= 550 ? showMore ? <div dangerouslySetInnerHtml={{ __html: answer.answerText.substring(0, 250) }}></div> : `${<div dangerouslySetInnerHTML={{ __html: answer.answerText }}></div>}` && <span className={styles.showMore} onClick>{() => setShowMore(!showMore)}{showMore ? <span><i class="fa fa-angle-up"></i>show less</span> : <span><i class="fa fa-angle-down"></i>show more</span>}</span> : <div dangerouslySetInnerHTML={{ __html: answer.answerText }}></div>}
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
                        <span>
                          <ul className={styles.ratingStars}>
                            <RatingStars />
                          </ul>
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
    </div>
  )
};

BestResultComponent.propTypes = {};

BestResultComponent.defaultProps = {};

export default BestResultComponent;
