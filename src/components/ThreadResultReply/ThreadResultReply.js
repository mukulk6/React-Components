import React from 'react';
import PropTypes from 'prop-types';
import styles from './ThreadResultReply.module.css';

const ThreadResultReply = (props) => {
  return (
    <div className={styles.ThreadReply}>
      <h4 className={styles.repliesDiv}>
    {props.thr}
    </h4>
    </div>
  )
};

ThreadResultReply.propTypes = {};

ThreadResultReply.defaultProps = {};

export default ThreadResultReply;
