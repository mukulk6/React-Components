import React from 'react';
import PropTypes from 'prop-types';
import styles from './KeyTermsInnerSection.module.css';
import NavigationBar from '../NavigationBar/NavigationBar';
import SearchBar from '../SearchBar/SearchBar';
import SeekerData from '../Elements/getprofileSeeker.json';
import TabSearch from '../TabSearch/TabSearch';
import Multiselectdropdowndomain from '../Multiselectdropdowndomain/Multiselectdropdowndomain';
import Elements from '../Elements/Elements';
import Form from 'react-bootstrap/Form';
import KeyTermData from './keytermdata.json';
import ReusableCardComponent from '../ReusableCardComponent/ReusableCardComponent';

const KeyTermsInnerSection = () => {
  return (
    <>
      <NavigationBar />
      <div class="container">
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
          <div class="row" id={styles.bottomRow}>
            <div class="col-md-4">
              <p className={styles.keytermheading}><span><img className={styles.backIconKeyTerm} src={require('../../images/back.png')}></img>Key Terms</span></p>
              <h3 className={styles.keyTermName}>standard lead time</h3>
              <div className={styles.keyTermCount}>1/1</div>
            </div>
            <div class="col-md-8">
              <div class="row justify-content-end" style={{ paddingTop: '12px' }}>
                <div class="col-md-4">
                  <TabSearch />
                </div>
                <div class="col-md-4">
                  <span className={styles.viewByText}>View By:</span>
                  <Form.Select aria-label="Default select example" size='sm' className={styles.selectKeyTerm}>
                    <option value="1">Expert Q/A</option>
                    <option value="2">User Queries</option>
                  </Form.Select>
                </div>
              </div>
            </div>
          </div >
          {
            KeyTermData.map((data, index) => {
              return (
                <div key={index} style={{ paddingTop: '20px' }}>
                  <ReusableCardComponent data={data} />
                </div>
              )
            })
          }
        </section>
      </div>
    </>
  )
};

KeyTermsInnerSection.propTypes = {};

KeyTermsInnerSection.defaultProps = {};

export default KeyTermsInnerSection;
