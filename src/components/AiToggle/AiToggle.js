import React from 'react';
import PropTypes from 'prop-types';
import styles from './AiToggle.module.css';

const AiToggle = () => (
  <div class="row">
    <div class="col-md-2">
      <span id={styles.aisearchtext}>
        AI Search
      </span>
      <span class="form-check form-switch">
        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked></input>
        <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
      </span>
    </div>
  </div>
);

AiToggle.propTypes = {};

AiToggle.defaultProps = {};

export default AiToggle;
