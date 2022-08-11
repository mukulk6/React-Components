import React from 'react';
import PropTypes from 'prop-types';
import styles from './AskanExpertlogo.module.css';
import { Row, Col } from 'react-bootstrap';

const AskanExpertlogo = () => (
  <Row>
    <Col md={12}>
      <h1 id={styles.askanexpertlogo}>
        Ask
      <span id={styles.anExpertText}> an Expert</span>
      </h1>
    </Col>
  </Row>
);

AskanExpertlogo.propTypes = {};

AskanExpertlogo.defaultProps = {};

export default AskanExpertlogo;
