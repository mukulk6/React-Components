import React from 'react';
import PropTypes from 'prop-types';
import styles from './MyHistory.module.css';
import SeekerData from '../Elements/getprofileSeeker.json';
import NavigationBar from '../NavigationBar/NavigationBar';
import SearchBar from '../SearchBar/SearchBar';
import { Form } from 'react-bootstrap';
import RenderMyHistory from '../RenderMyHistory/RenderMyHistory';
import HistoryData from './myhistory.json';
import moment from 'moment';

const MyHistory = () => (
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
    <section>
      <div class="row align-items-center" id={styles.bottomRow}>
        <div class="col-md-4">
          <h3 className={styles.myHistoryHeading}>My Searches</h3>
          <div className={styles.historyCount}>{HistoryData[0].count}</div>
        </div>
        <div class="col-md-8">
          <div class="row justify-content-end" style={{ paddingTop: '12px' }}>
            <div class="col-md-4">
              <span className={styles.viewByText}>Sort By:</span>
              <Form.Select aria-label="Default select example" size='sm' className={styles.selectHistory}>
                <option value="1">Asked(Recently)</option>
                <option value="2">Asked(Oldest)</option>
              </Form.Select>
            </div>
          </div>
        </div>
      </div >
      {
        HistoryData.slice(1).map((data,index)=>{
          return(
            <div key={index}>
              <RenderMyHistory data={data} />
            </div>
          )
        })
      }
    </section>
  </div>
);

MyHistory.propTypes = {};

MyHistory.defaultProps = {};

export default MyHistory;
