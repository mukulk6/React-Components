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
        <div class="col-md-4">
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
        </div>
  );
}

Multiselectdropdowndomain.propTypes = {};

Multiselectdropdowndomain.defaultProps = {};

export default Multiselectdropdowndomain;
