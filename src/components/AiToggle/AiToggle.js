import React from 'react';
import PropTypes from 'prop-types';
import styles from './AiToggle.module.css';
import {Form} from 'react-bootstrap';

const AiToggle = () => (
  <div class="row">
    <div class="col-md-2">
      <span>
        <Form>
          <Form.Check
            type="switch"
            id="custom-switch"
            label="ON"
            title="ON"
          />
        </Form>
      </span>
    </div>
  </div>
);

AiToggle.propTypes = {};

AiToggle.defaultProps = {};

export default AiToggle;
