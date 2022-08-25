import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchResult.module.css';
import NavigationBar from '../NavigationBar/NavigationBar';
import SearchBar from '../SearchBar/SearchBar';
import SeekerData from '../Elements/getprofileSeeker.json';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import RenderSearchResult from '../RenderSearchResult/RenderSearchResult';
import SearchResultData from './SearchData.json';
const SearchResult = () => {
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
      {
        SearchResultData.map((pdata,ind)=>{return(<div key={ind}><RenderSearchResult data ={pdata}/></div>)})
      }
    </div>
  )
};

SearchResult.propTypes = {};

SearchResult.defaultProps = {};

export default SearchResult;
