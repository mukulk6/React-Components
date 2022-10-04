import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './RenderKeyTerms.module.css';
import KeyTerms from '../KeyTerms/KeyTerms';
import { MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane } from 'mdb-react-ui-kit';
import Multiselectdropdowndomain from '../Multiselectdropdowndomain/Multiselectdropdowndomain';
import KeyTermsData from '../KeyTerms/KeyTermsData.json';
import AiToggleButton from '../AiToggle/AiToggle';
import SeekerData from '../Elements/getprofileSeeker.json';
import NavigationBar from '../NavigationBar/NavigationBar';
import TabSearch from '../TabSearch/TabSearch';
import SearchBar from '../SearchBar/SearchBar';

const RenderKeyTerms = () => {
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
      <section>
        <div class="row" id={styles.bottomRow}>
          <div class="col-md-4">
            <h3 className={styles.seekerKeyTerms}>Key Terms  </h3><span className={styles.keyTermsHeadingCount}>{KeyTermsData[0].totalCount}</span>
           
          </div>
          <TabSearch />
          {/* {
            SeekerData.map((postData, index) => {
              return (
                <div key={index} class="col-md-3">
                  <span id={styles.domainTextMultiselect}>Domain:</span>
                  <Multiselectdropdowndomain data={postData} />
                </div>
              )
            })
          } */}
        </div>
      <MDBTabs>
        <MDBTabsItem >
          {/* <MDBTabsLink className={styles.keyTermsHeading} onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
       Key Terms
        <div className={styles.keyTermsHeadingCount}>
          {KeyTermsData[0].totalCount}
        </div>
      </MDBTabsLink> */}
        </MDBTabsItem>
      </MDBTabs>
      <MDBTabsContent>
        <MDBTabsPane className={styles.tabPane} show={basicActive === 'tab1'}><div className={styles.keyTermsWrapper}>{KeyTermsData.map((data, ind) => { return (<div key={ind} className={styles.keyTermMapDiv}>{<KeyTerms data={data} />}</div>) })}</div></MDBTabsPane>
      </MDBTabsContent>
      </section>
    </div>
  )
};

RenderKeyTerms.propTypes = {};

RenderKeyTerms.defaultProps = {};

export default RenderKeyTerms;
