import React, { useState } from 'react';
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
import OpenTabData from './OpenTabData.json';

function questionsOpenTab() {
  return OpenTabData;
}

function OpentabSeeker() {
  const questionsOpen = questionsOpenTab();

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
                  <span>Domain:</span>
                  <Multiselectdropdowndomain data={postData} />
                </div>
              )
            })
          }
        </div>
        {questionsOpen.map((que) => {
          return (
            <div class="row">
              <div className={styles.questionsList}>
                <div class="row">
                  <div class="col-md-8">
                    <h2 id={styles.openQuestionsHeader}>
                      {que.userInitiatedCuration == true && <span className={styles.requestUpdateIcon}>Requested Update</span>}{que.text}
                    </h2>
                  </div>
                  <div class="col-md-4 text-end">
                    <div className={styles.openTabIcons}>
                      <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                      <i class="fa fa-trash" aria-hidden="true"></i>
                      <i class="fa-solid fa-heart"></i>
                      <i class="fa fa-users" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
                <div class="row">
                  {que.additionalContext &&
                    <span class="input-group-text" id={styles.additionalContext}>{que.additionalContext}</span>
                  }
                  <div class="row">
                    <div class="col-md-2">
                      <div className={styles.tagDomain}>
                        <h3>Domain: <span className={styles.label}>{que.domain}</span></h3>
                      </div>
                    </div>
                    <div class="col-md-2">
                      <div className={styles.tagsinQue}>
                        <h3>Asked: </h3>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div className={styles.tagsinQue}>
                        {(que.tags).length > 0 && <h3>Tags: {que.tags.map((tag) => { return (<span className={styles.tagLabel}>{tag}</span>) })}</h3>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }
        )}

      </section>
      <div>
      </div>
    </div>
  )
};

OpentabSeeker.propTypes = {};

OpentabSeeker.defaultProps = {};

export default OpentabSeeker;
