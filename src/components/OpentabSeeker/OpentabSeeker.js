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
      <div class="row">
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
    </section>
    <div>
    </div>
  </div>
);

OpentabSeeker.propTypes = {};

OpentabSeeker.defaultProps = {};

export default OpentabSeeker;
