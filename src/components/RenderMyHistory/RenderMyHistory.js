import React from 'react';
import PropTypes from 'prop-types';
import styles from './RenderMyHistory.module.css';
import moment from 'moment';

const RenderMyHistory = (props) => {

  return (
    <div className={styles.RenderMyHistory}>
      <h2 className={styles.historyHeading}>{moment(props.data.timestamp).format("ddd MMM DD, YYYY")}</h2>
    <div class="d-flex">
      <p className={styles.timestamp}>{moment(props.data.timestamp).format("HH:mm")}</p><p className={styles.historyContent}>{props.data.question}</p>
    </div>
    </div>
  )
};

RenderMyHistory.propTypes = {};

RenderMyHistory.defaultProps = {};

export default RenderMyHistory;
