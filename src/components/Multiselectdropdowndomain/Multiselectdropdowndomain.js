import React, { useState } from 'react';
import CreatableSelect from 'react-select/creatable';
import makeAnimated from 'react-select/animated';
import { Form, Col } from 'react-bootstrap';
import Select from 'react-select';
import PropTypes from 'prop-types';
import styles from './Multiselectdropdowndomain.module.css';
import SeekerData from './getprofileSeeker.json';

const animatedComponents = makeAnimated();
function Multiselectdropdowndomain(props) {
  const [field, setField] = useState([]);
  return (
    <div class="col-md-3">
      <Form.Group as={Col} controlId="my_multiselect_field">
        <Form.Label>My multiselect</Form.Label>
        <Form.Control as="select" multiple={true} value={field} onChange={e => setField([].slice.call(e.target.props.data.visibleTopics).map(item => item.value))}>
          {props.data.visibleTopics.map((op) =>{return(<option>{op}</option>)})}
        </Form.Control>
      </Form.Group>
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti
        options={props.data.visibleTopics.map((opt) => { return {value: opt, label: opt } })}
        className={styles.domainSelect}
      />
    </div>
  );
}

Multiselectdropdowndomain.propTypes = {};

Multiselectdropdowndomain.defaultProps = {};

export default Multiselectdropdowndomain;
