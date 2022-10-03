import React from 'react';
import PropTypes from 'prop-types';
import styles from './ReusableCardComponent.module.css';
import moment from 'moment';
import Card from 'react-bootstrap/Card';
import RatingStars from '../RatingStars/RatingStars';

const ReusableCardComponent = (props) => {
  const myComponentStyle = {
    float: 'right',
    fontSize: 14,
    color: "#777"
  }
  return (
    <div>
      <Card className={styles.answeredQuestionsCard}>
        <Card.Header as="h5" style={{ "width": "89%" }} class="col-md-9" className={styles.questionText}>{props.data.express == true && <i class="fa-solid fa-fire" id={styles.expressQuestion}></i>}{props.data.text}</Card.Header>
        <div className={styles.actionButtonDiv}>
        {props.data.sharing === true || (props.data.sharedWith).length > 0 ? <i class="fa fa-share-alt-square" style={{"color":"green"}}></i> : <i class="fa fa-share-alt" style={{"color":"#d3d3d3"}}></i>}
        {props.data.favourite===true ? <i class="fa-solid fa-heart" style={{"color":"#FFA600", "paddingLeft":"5px"}}></i> : <i class="fa-solid fa-heart" style={{"color":"#d3d3d3","paddingLeft":"5px"}}></i>}
        </div>
        <Card.Body className={styles.spacer}>
          <Card.Title>                  {props.data.additionalContext &&
            <span class="input-group-text" id={styles.additionalContext}>{props.data.additionalContext}</span>
          }</Card.Title>
          <div class="col-sm-12">
            <span className={styles.domainHeading}>Domain: </span><span className={styles.domainText}>{props.data.domain}</span><span className={styles.askedText}>Asked: {moment(props.data.postedTimestamp).format("MMM DD, YYYY")} </span>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <div className={styles.tagsinQue}>
                {(props.data.tags).length > 0 && <h3>Tags: {props.data.tags.map((tag) => { return (<span className={styles.tagLabel}>{tag}</span>) })}</h3>}
              </div>
            </div>
          </div>
          <div class="row">
            {props.data.answersList && props.data.answersList.map((ans) => {
              return (
                <div class="row">
                  <Card.Text className={styles.answerTextBorder}>
                    <div class="col-sm-12">
                      <div className={styles.profilePicDiv}>
                        <img class="rounded-circle" src={require('../../images/profile.jpg')} className={styles.userPic} />
                      </div>
                      <div className={styles.userInfo}>
                        <span className={styles.expertName}>{ans.expertFirstName}&nbsp;{ans.expertLastName}</span>
                        <span className={styles.userScore}><i id={styles.starIconScore} class="fa-solid fa-star"></i><span style={{ fontWeight: "bold", fontSize: 14, color: "#444" }}>{Math.round(ans.expertScore)}</span>/10</span>
                         {ans.answeredTimestamp < ans.answerUpdatedTimestamp ? <span className={styles.answeredDate}>Last Updated: {moment(ans.answerUpdatedTimestamp).fromNow()}</span> : <span className={styles.answeredDate}>Answered: {moment(ans.answeredTimeStamp).format("MMM DD, YYYY")}</span>}                      
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div className={styles.answerBlockText}>
                        <Card.Text>{<div dangerouslySetInnerHTML={{ __html: ans.answer }}></div>}</Card.Text>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-12">
                        <span id={styles.ratingText}>Rating: </span>
                        <RatingStars />
                      </div>
                    </div>
                  </Card.Text>
                </div>)
            })}
          </div>
        </Card.Body>
      </Card>
    </div>
  )
};

ReusableCardComponent.propTypes = {};

ReusableCardComponent.defaultProps = {};

export default ReusableCardComponent;
