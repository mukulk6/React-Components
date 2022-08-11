import React from 'react';
import PropTypes from 'prop-types';
import styles from './AiToggle.module.css';
import {Form, Button, FormLabel} from 'react-bootstrap';

const AiToggle = () => (
  <div class="row">
    <div class="col-md-2">
      <span>
        <Button as={FormLabel} size="sm" id={styles.btnToggle}>
        <Form>
          <Form.Check
            type="switch"
            id={styles.customswitch}
          />
        </Form>
        </Button>
      </span>
    </div>
  </div>
);

AiToggle.propTypes = {};

AiToggle.defaultProps = {};

export default AiToggle;
