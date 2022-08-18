import React from 'react';
import PropTypes from 'prop-types';
import styles from './TrendingTab.module.css';
import NavigationBar from '../NavigationBar/NavigationBar';
import SearchBar from '../SearchBar/SearchBar';

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
  </div>
);

TrendingTab.propTypes = {};

TrendingTab.defaultProps = {};

export default TrendingTab;
