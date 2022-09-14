import React from 'react';
import PropTypes from 'prop-types';
import styles from './SeekerAnswered.module.css';
import NavigationBar from '../NavigationBar/NavigationBar';
import SearchBar from '../SearchBar/SearchBar';
import SeekerData from '../Elements/getprofileSeeker.json';
import TabSearch from '../TabSearch/TabSearch';
import Multiselectdropdowndomain from '../Multiselectdropdowndomain/Multiselectdropdowndomain';
import SeekerAnsweredData from './SeekerAnsweredData.json';
import Elements from '../Elements/Elements';
import RenderSeekerAnswered, { TextContext, TotalCountSeekerAnswered } from './RenderSeekerAnswered';

const SeekerAnsweredTotalCount = () => {
  return SeekerAnsweredData.map((count, ind) => { const data = count; return (<div key={ind}><h3>{data.totalCount}</h3></div>) })
}

const SeekerAnswered = () => (
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
          <h3 className={styles.seekerAnsweredQuestions}>Answered Questions
            {/* <TextContext.Provider value={"Domain covered: VSP 5000, E Series (E990,E790,E590), Ops Center, HNAS 5000"}>
              <div>
                <TextContext.Consumer>
                  {value => <div class="row"><div class="col-sm-12" >{value}</div></div>}
                </TextContext.Consumer>
              </div>
            </TextContext.Provider> */}
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
        SeekerAnsweredData.map((data, ind) => { return (<div key={ind} className={styles.cardSeperator}><RenderSeekerAnswered data={data} totalCount={data.totalCount} /></div>) })
      }
    </section >
  </div >
);

SeekerAnswered.propTypes = {};

SeekerAnswered.defaultProps = {};

export default SeekerAnswered;
