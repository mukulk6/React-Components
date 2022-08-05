import React, { useState } from 'react';
import CreatableSelect from 'react-select/creatable';
import makeAnimated from 'react-select/animated';
import { Form, Col, InputGroup,Button } from 'react-bootstrap';
import Select from 'react-select';
import PropTypes from 'prop-types';
import styles from './Multiselectdropdowndomain.module.css';
import SeekerData from './getprofileSeeker.json';


const animatedComponents = makeAnimated();
function Multiselectdropdowndomain(props) {
  const [field, setField] = useState([]);
  return (
    <div class="col-md-8">
      <span>Domain: </span>
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti
        options={props.data.visibleTopics.map((opt) => { return { value: opt, label: opt } })}
        className={styles.domainSelect}
        maxMenuHeight={250}
        placeholder="Select Domain"
        container={300}
      />
      
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Ask a Question"
          aria-label="Ask a Question"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          Get Answers
        </Button>
      </InputGroup>
    </div>
  );
}

Multiselectdropdowndomain.propTypes = {};

Multiselectdropdowndomain.defaultProps = {};

export default Multiselectdropdowndomain;
