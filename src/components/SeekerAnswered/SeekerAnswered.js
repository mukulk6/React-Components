import React from 'react';
import PropTypes from 'prop-types';
import styles from './SeekerAnswered.module.css';
import NavigationBar from '../NavigationBar/NavigationBar';
import SearchBar from '../SearchBar/SearchBar';

const SeekerAnswered = () => (
  <div class="container">
    <NavigationBar />
    <div className={styles.Wrappersearchbar}>
      <div className={styles.midContainer}>
        <div class="container">
          {
            SeekerData.map((postData, id) => {
              return (
                <div key={id}>
                  <SearchBar brandingText={postData.brandingText} />
                </div>
              )
            })
          }
        </div>
      </div>
    </div>

  </div>
);

SeekerAnswered.propTypes = {};

SeekerAnswered.defaultProps = {};

export default SeekerAnswered;
