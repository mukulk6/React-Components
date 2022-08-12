import React from 'react';
import PropTypes from 'prop-types';
import styles from './RenderOpenTabComponent.module.css';
import SeekerOpenData from './opentabseeker.json';
import OpentabSeeker from '../OpentabSeeker/OpentabSeeker';

const RenderOpenTabComponent = () => (
  <div className={styles.RenderOpenTabComponent}>
    {
      SeekerOpenData.map((pdata,ind)=>{
        return(
          <div key={ind}>
            <OpentabSeeker data={pdata}/>
            </div>
        )
      })
    }
  </div>
);

RenderOpenTabComponent.propTypes = {};

RenderOpenTabComponent.defaultProps = {};

export default RenderOpenTabComponent;
