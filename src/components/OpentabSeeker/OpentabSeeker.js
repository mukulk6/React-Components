import React from 'react';
import PropTypes from 'prop-types';
import styles from './OpentabSeeker.module.css';
import NavigationBar from '../NavigationBar/NavigationBar';
import Wrappersearchbar from '../Wrappersearchbar/Wrappersearchbar';
import SeekerData from '../Elements/getprofileSeeker.json';
import SearchBar from '../SearchBar/SearchBar';
import TabSearch from '../TabSearch/TabSearch';
import Elements from '../Elements/Elements';
import Multiselectdropdowndomain from '../Multiselectdropdowndomain/Multiselectdropdowndomain';
import Form from 'react-bootstrap/Form';

const OpentabSeeker = (props) => (
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
          <h3 className={styles.openQuestions}>Open Questions</h3>
          <span className={styles.openQuestionCount}>
            61
          </span>
        </div>
        <TabSearch />
        <Elements />
        {
          SeekerData.map((postData, index) => {
            return (
              <div key={index} class="col-md-3">
                <Multiselectdropdowndomain data={postData} />
              </div>
            )
          })
        }
      </div>
      <div class="row">
        <div className={styles.questionsList}>
          <div class="row">
            <div class="col-md-6">
              <h2 id={styles.openQuestionsHeader}>
                What is cross browser testing?
              </h2>
            </div>
            <div class="col-md-6 text-end">
              <div className={styles.openTabIcons}>
                <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                <i class="fa fa-trash" aria-hidden="true"></i>
                <i class="fa-solid fa-heart"></i>
                <i class="fa fa-users" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          <div class="row">
            <Form>
              <Form.Group className="mb-3" controlId={styles.additionalContext}>
                <Form.Control type="text" />
              </Form.Group>
            </Form>
            <div class="row">
              <div class="col-md-2">
                <div className={styles.tagDomain}>
                  <h3>Domain: <span className={styles.label}>Collaterals</span></h3>
                </div>
              </div>
              <div class="col-md-2">
                <div className={styles.tagsinQue}>
                  <h3>Asked: </h3>
                </div>
              </div>
              <div class="col-md-12">
                <div className={styles.tagsinQue}>
                  <h3>Tags: <span id={styles.tagsInQuestion}>Testing</span></h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div>
    </div>
  </div>
);

OpentabSeeker.propTypes = {};

OpentabSeeker.defaultProps = {};

export default OpentabSeeker;
