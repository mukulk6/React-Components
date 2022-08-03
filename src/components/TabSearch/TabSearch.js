import React from 'react';
import PropTypes from 'prop-types';
import styles from './TabSearch.module.css';

const hideSearchIcon = () => { return <i class="fa-solid fa-magnifying-glass" id={styles.searchIcon} style={{ display: 'none' }} ></i> }

const TabSearch = () => (  
  <div class="col-md-3">
    <label for="inputPassword2" class="visually-hidden">Password</label>
    <input class="form-control " id={styles.inputPassword2} placeholder="Search..." onKeyDown={hideSearchIcon} />
    <i class="fa-solid fa-magnifying-glass" id={styles.searchIcon}></i>
  </div>
);

TabSearch.propTypes = {};

TabSearch.defaultProps = {};

export default TabSearch;
