import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBar.module.css';
import { Form, Col, InputGroup, Button, Container, Row } from 'react-bootstrap';

const SearchBar = (props) => (
  <div class="container">
    <div class="row">
      <InputGroup>
        <Form.Control
          placeholder="Ask a Question"
          aria-label="Ask a Question"
          aria-describedby="basic-addon2"
          id={styles.searchControl}
        />
        <Button variant="outline-secondary" id={styles.searchButton}>
          Get Answers
        </Button>
      </InputGroup>
    </div>
    <Row>
      <Col xs={12} className={styles.brandText}>
        {props.data.brandingText}
      </Col>
    </Row>
  </div>
);

SearchBar.propTypes = {};

SearchBar.defaultProps = {};

export default SearchBar;