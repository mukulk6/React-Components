import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchResult.module.css';
import NavigationBar from '../NavigationBar/NavigationBar';
import SearchBar from '../SearchBar/SearchBar';
import SeekerData from '../Elements/getprofileSeeker.json';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import SearchResultData from './SearchData.json';
import BestResult from '../BestResult/BestResult';
import SearchResult2, { confidence } from '../RenderSearchResult/SearchResultDemo';
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
import BestResultComponent from '../BestResultComponent/BestResultComponent';
import SimilarResultComponent from '../SimilarResultComponent/SimilarResultComponent';
import PdfDocumentSourcedResult from '../PdfDocumentSourcedResult/PdfDocumentSourcedResult';
import ThreadResultComponent from '../ThreadResultComponent/ThreadResultComponent';

function RenderComponent()
{
  return(
  SearchResultData.map((data,ind)=>{
    return(
      data.docData && data.docData.map((ans)=>{
          if(ans.docType=="Pdf" || ans.docType=="Image")
          {
            return <PdfDocumentSourcedResult ans={ans} />
          }
          else
          {
              return <ThreadResultComponent ans={ans}/>
          }
      })
    )
  })
)}

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
      <MDBTabs>
        <MDBTabsItem >
          <MDBTabsLink className={styles.tabItems} onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
            Expert Sourced
            <div className={styles.tabHeadingCount}>
              {SearchResultData.length}
            </div>
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink className={styles.tabItems} onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
            Document Sourced
            <div className={styles.tabHeadingCount}>
              {/* {SearchResultData.map((data,ind)=>{return(<div className={styles.tabHeadingCount} key={ind}>{data.docData.length}</div>)})} */}
              {SearchResultData.map((data, ind) => { return (data.docData && <div key={data.docData}><span>{(data.docData).length}</span></div>) })}
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
        <MDBTabsPane className={styles.tabPane} show={basicActive === 'tab1'}>{ }{SearchResultData.map((data, ind) => { return (<div key={ind} className={styles.suggestionsSpacer}>{data.confidence === true ? <BestResultComponent data={data} /> : <SimilarResultComponent data={data} />}</div>) })}</MDBTabsPane>
        {/* <MDBTabsPane show={basicActive === 'tab2'}>{SearchResultData.map((data,ind)=>{return(<div key={data.docData}>{data.docData && data.docData.map((ans)=><PdfDocumentSourcedResult ans={ans}/>)}</div>)})}</MDBTabsPane> */}
        {/* <MDBTabsPane show={basicActive === 'tab2'}>{SearchResultData.map((data, ind) => { return (<div key={data.docData}>{data.docData && data.docData.map((ans) => <PdfDocumentSourcedResult ans={ans} />)}</div>) })}</MDBTabsPane> */}
        <MDBTabsPane show={basicActive === 'tab2'}>{
          // SearchResultData.map((data,ind)=>{
          //   return(
          //     data.docData && data.docData.map((ans)=>{
          //         if(ans.docType=="Pdf" || ans.docType=="Image")
          //         {
          //           return <PdfDocumentSourcedResult ans={ans} />
          //         }
          //         else
          //         {
          //             return <ThreadResultComponent ans={ans}/>
          //         }
          //     })
          //   )
          // })
          RenderComponent
        }</MDBTabsPane>
      </MDBTabsContent>
    </div>
  )
};

SearchResult.propTypes = {};

SearchResult.defaultProps = {};

export default SearchResult;
