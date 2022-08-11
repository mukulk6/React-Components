import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBar.module.css';
import { Form, Col, InputGroup, Button } from 'react-bootstrap';

const SearchBar = () => (
  <InputGroup className="mb-3">
    <Form.Control
      placeholder="Ask a Question"
      aria-label="Ask a Question"
      aria-describedby="basic-addon2"
      id="searchControl"
    />
    <Button variant="outline-secondary" id="searchButton">
      Get Answers
    </Button>
  </InputGroup>
);

SearchBar.propTypes = {};

SearchBar.defaultProps = {};

export default SearchBar;
