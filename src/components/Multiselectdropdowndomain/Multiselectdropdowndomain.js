import React, { useState } from 'react';
import { Form, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import styles from './Multiselectdropdowndomain.module.css';
import SeekerData from './getprofileSeeker.json';

function Multiselectdropdowndomain(props) {
  const [field, setField] = useState([]);

  return (
    <div class="col-md-3">
      <Form.Group as={Col} controlId="my_multiselect_field">
        <Form.Label>My multiselect</Form.Label>
        <Form.Control as="select" multiple value={field} onChange={e => setField([].slice.call(e.target.selectedOptions).map(item => item.value))}>
          {props.data.visibleTopics.map((opt) => {return<option value={opt.name}>{opt.name}</option>
          })}
        </Form.Control>
      </Form.Group>
    </div >
  );
}

Multiselectdropdowndomain.propTypes = {};

Multiselectdropdowndomain.defaultProps = {};

export default Multiselectdropdowndomain;
