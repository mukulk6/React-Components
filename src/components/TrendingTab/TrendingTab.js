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
    </section>
  </div>
);

TrendingTab.propTypes = {};

TrendingTab.defaultProps = {};

export default TrendingTab;
