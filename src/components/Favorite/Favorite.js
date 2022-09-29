import React from 'react';
import PropTypes from 'prop-types';
import styles from './Favorite.module.css';
import NavigationBar from '../NavigationBar/NavigationBar';
import SearchBar from '../SearchBar/SearchBar';
import SeekerData from '../Elements/getprofileSeeker.json';
import Multiselectdropdowndomain from '../Multiselectdropdowndomain/Multiselectdropdowndomain';
import TabSearch from '../TabSearch/TabSearch';
import Elements from '../Elements/Elements';
import FavoriteData from './Favorite.json';
import ReusableCardComponent from '../ReusableCardComponent/ReusableCardComponent';

const Favorite = () => {
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
            <h3 className={styles.seekerFavoriteQuestions}>Favorite Questions
            </h3>
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
          FavoriteData.map((data, ind) => { return (<div key={ind} className={styles.cardSeperator}><ReusableCardComponent data={data} totalCount={data.totalCount} /></div>) })
        }
      </section>
    </div>
  )
};

Favorite.propTypes = {};

Favorite.defaultProps = {};

export default Favorite;
