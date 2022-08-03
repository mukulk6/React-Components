import React from 'react';
import PropTypes from 'prop-types';
import styles from './Elements.module.css';
import SeekerProfile from './getprofileSeeker.json';

const Elements = () => (
  <div class="col-md-3">
  <span id={styles.sortBy}>Sort by:</span>
  <select class="form-select" className={styles.sortDropbox} aria-label="Default select example">
    <option selected>Recently Answered</option>
    <option value="1">Oldest (Answered)</option>
    <option value="2">Recently Asked</option>
    <option value="3">Oldest asked</option>
    <option value="4">Most Viewed</option>
  </select>
</div>
);

Elements.propTypes = {};

Elements.defaultProps = {};

export default Elements;
