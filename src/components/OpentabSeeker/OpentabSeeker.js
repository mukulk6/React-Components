import React from 'react';
import PropTypes from 'prop-types';
import styles from './OpentabSeeker.module.css';
import NavigationBar from '../NavigationBar/NavigationBar';
import Wrappersearchbar from '../Wrappersearchbar/Wrappersearchbar';
import SeekerData from '../Elements/getprofileSeeker.json';
import SearchBar from '../SearchBar/SearchBar';

const OpentabSeeker = (props) => (
  <div class="container">
    <NavigationBar />
    <div className={styles.Wrappersearchbar}>
      <div className={styles.midContainer}>
        <div class="container">
          <SearchBar data />
          <section>
            <div class="row">
              <div class="col-md-3">
                <h3>Open Questions</h3>
                <div className={styles.openQuestionCount}>
                  {
                    props.data.count
                  }
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
    <div>
    </div>
  </div>
);

OpentabSeeker.propTypes = {};

OpentabSeeker.defaultProps = {};

export default OpentabSeeker;
