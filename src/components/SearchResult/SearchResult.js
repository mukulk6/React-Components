import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchResult.module.css';
import NavigationBar from '../NavigationBar/NavigationBar';
import SearchBar from '../SearchBar/SearchBar';
import SeekerData from '../Elements/getprofileSeeker.json';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import SearchResultData from './SearchData.json';
import BestResult from '../BestResult/BestResult';
import SearchResult2 from '../RenderSearchResult/SearchResultDemo';
import SearchResultDemo from '../RenderSearchResult/SearchResultDemo';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';
import Multiselectdropdowndomain from '../Multiselectdropdowndomain/Multiselectdropdowndomain';
import AiToggleButton from 'bootstrap-switch-button-react';

const SearchResult = () => {
  const [basicActive, setBasicActive] = useState('tab1');

  const handleBasicClick = (value: string) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };

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
      <MDBTabs className='mb-3'>
        <MDBTabsItem >
          <MDBTabsLink className={styles.tabItems} onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
            Expert Sourced
            <div className={styles.tabHeadingCount}>
              10
            </div>
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink className={styles.tabItems} onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
            Document Sourced
            <div className={styles.tabHeadingCount}>
              0
            </div>
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          {
            SeekerData.map((postData, index) => {
              return (
                <div key={index} class="col-md-3" className={styles.multiselectdropdown}>
                  <Multiselectdropdowndomain data={postData} />
                </div>
              )
            })
          }
        </MDBTabsItem>
        <MDBTabsItem className={styles.AiSearch}>
          <div className={styles.searchToggleDiv}>
          <span className={styles.AiSearchText}>AI Search</span>
          <AiToggleButton checked={false}
            onlabel='On'
            offlabel='Off'
            onstyle='primary'
            onChange={(checked: boolean) => {
              this.setState({ isUserAdmin: checked })
            }} />
            </div>
        </MDBTabsItem>
      </MDBTabs>
      <MDBTabsContent>
        <MDBTabsPane className={styles.tabPane} show={basicActive === 'tab1'}>{SearchResultData.map((data, ind) => { return (<div key={ind}><SearchResultDemo data={data} /></div>) })}</MDBTabsPane>
        <MDBTabsPane show={basicActive === 'tab2'}>Tab 2 content</MDBTabsPane>
      </MDBTabsContent>
    </div>
  )
};

SearchResult.propTypes = {};

SearchResult.defaultProps = {};

export default SearchResult;
