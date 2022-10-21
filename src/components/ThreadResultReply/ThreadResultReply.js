import React from 'react';
import PropTypes from 'prop-types';
import styles from './ThreadResultReply.module.css';

const ThreadResultReply = (props) => {
  return (
    <div className={styles.ThreadReply}>
    {props.thr}
    </div>
  )
};

ThreadResultReply.propTypes = {};

ThreadResultReply.defaultProps = {};

export default ThreadResultReply;
