import React from 'react';
import PropTypes from 'prop-types';
import styles from './SharedComponent.module.css';
import NavigationBar from '../NavigationBar/NavigationBar';
import SearchBar from '../SearchBar/SearchBar';
import TabSearch from '../TabSearch/TabSearch';
import Elements from '../Elements/Elements';
import Multiselectdropdowndomain from '../Multiselectdropdowndomain/Multiselectdropdowndomain';
import SharedWithMeData from './SharedWithMe.json'

const SharedComponent = () => {
  return (
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
        <div class="row" id={styles.bottomRow}>
          <div class="col-md-3">
            <h3 className={styles.seekerFavoriteQuestions}>Favorite Questions  </h3><span className={styles.tabHeadingCount}>{FavoriteData[0].count}</span>
           
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
        </div >
        {
          SharedWithMeData.map((data, ind) => { return (<div key={ind} className={styles.cardSeperator}><ReusableCardComponent data={data} totalCount={data.totalCount} /></div>) })
        }
      </section>
    </div>
  )
};

SharedComponent.propTypes = {};

SharedComponent.defaultProps = {};

export default SharedComponent;
