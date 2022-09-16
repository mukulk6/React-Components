import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchTab.module.css';
import Multiselectdropdowndomain from '../Multiselectdropdowndomain/Multiselectdropdowndomain';
import SeekerData from '../Multiselectdropdowndomain/getprofileSeeker.json';
import SearchResult from '../SearchResult/SearchResult';
import SearchBar from '../SearchBar/SearchBar';
import NavigationBar from '../NavigationBar/NavigationBar';
import SearchResultData from '../SearchResult/SearchData.json';
import SearchResultDemo from '../RenderSearchResult/SearchResultDemo';


const SearchTab = () => {
  const [basicActive, setBasicActive] = useState('tab1');

  const handleBasicClick = (value: string) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };

  return (
    <>
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
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink className={styles.tabItems} onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
              Document Sourced
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem className='mr-auto'>
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
        </MDBTabs>
        <MDBTabsContent>
          <MDBTabsPane show={basicActive === 'tab1'}>{SearchResultData.map((data,ind)=>{return(<div key={ind}><SearchResultDemo data={data} /></div>)})}</MDBTabsPane>
          <MDBTabsPane show={basicActive === 'tab2'}>Tab 2 content</MDBTabsPane>
        </MDBTabsContent>
      </div>
    </>
  );
}

SearchTab.propTypes = {};

SearchTab.defaultProps = {};

export default SearchTab;
