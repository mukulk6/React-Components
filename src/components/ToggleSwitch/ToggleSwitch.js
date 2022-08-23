import React from 'react';
import PropTypes from 'prop-types';
import styles from './ToggleSwitch.module.css';

const ToggleSwitch = ({ label }) => {
  return (
    <div className="container">
      {label}{" "}
      <div className={styles.toggleswitch}>
        <input type="checkbox" className={styles.checkbox}
          name={label} id={label} />
        <label className={styles.label} htmlFor={label}>
          <span className={styles.inner} />
          <span className={styles.switch} />
        </label>
      </div>
    </div>
  )
};

ToggleSwitch.propTypes = {};

ToggleSwitch.defaultProps = {};

export default ToggleSwitch;
