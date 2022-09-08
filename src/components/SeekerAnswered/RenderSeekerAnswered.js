import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './SeekerAnswered.module.css';
import NavigationBar from '../NavigationBar/NavigationBar';
import SearchBar from '../SearchBar/SearchBar';
import SeekerData from '../Elements/getprofileSeeker.json';
import TabSearch from '../TabSearch/TabSearch';
import Multiselectdropdowndomain from '../Multiselectdropdowndomain/Multiselectdropdowndomain';
import SeekerAnsweredData from './SeekerAnsweredData.json';
import Elements from '../Elements/Elements';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const myComponentStyle = {
    float: 'right',
    fontSize: 14,
    color: "#777"
}

const RenderSeekerAnswered = (props) => {
    const SeekerAnsweredCount = () => {
        return (
            <span>{props.data.totalCount}</span>
        )
    }
    const [variheightdiv, variheightdivexpanded] = useState(styles.variheightdiv);

    function expanddivContent() {

    }

    return (
        <Card className={styles.answeredQuestionsCard}>
            <Card.Header as="h5" class="col-md-9" className={styles.questionText}>{props.data.express == true && <i class="fa-solid fa-fire" id={styles.expressQuestion}></i>}{props.data.text}</Card.Header>
            <Card.Body className={styles.spacer}>
                <Card.Title>                  {props.data.additionalContext &&
                    <span class="input-group-text" id={styles.additionalContext}>{props.data.additionalContext}</span>
                }</Card.Title>
                <div class="col-sm-12">
                    <span className={styles.domainHeading}>Domain: </span><span className={styles.domainText}>{props.data.domain}</span><span className={styles.askedText}>Asked: </span>
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
                                        <div style={myComponentStyle}>
                                            <i class="fa fa-star-o ng-scope" aria-hidden="true">
                                            </i>
                                        </div>
                                        <div className={styles.profilePicDiv}>
                                            <img class="rounded-circle" src={require('../../images/profile.jpg')} className={styles.userPic} />
                                        </div>
                                        <div className={styles.userInfo}>
                                            <span className={styles.expertName}>{ans.expertFirstName}&nbsp;{ans.expertLastName}</span>
                                            <span className={styles.userScore}><i id={styles.starIconScore} class="fa-solid fa-star"></i><span style={{ fontWeight: "bold", fontSize: 14, color: "#444" }}>{Math.round(ans.expertScore)}</span>/10</span>
                                             <span className={styles.answeredDate}>Answered</span>                                           
                                        </div>
                                    </div>
                                    
                                        <div class="col-sm-12">
                                            <div className={styles.answerBlockText}>
                                                <Card.Text className={styles.variheightdiv}><div dangerouslySetInnerHTML={{__html: ans.answer}}></div><div className={styles.fader}></div></Card.Text>
                                            </div>
                                        </div>
                                    
                                </Card.Text>
                            </div>)
                    })}
                </div>
                <Button variant="primary" className={styles.viewAndRateButton}><i class="fa-regular fa-square-check" id={styles.squareCheck}></i>View & Rate Answers { }</Button>
            </Card.Body>
        </Card>
    )
}


RenderSeekerAnswered.propTypes = {};

RenderSeekerAnswered.defaultProps = {};

export default RenderSeekerAnswered;