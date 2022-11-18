import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBar.module.css';
import { Form, Col, InputGroup, Button, Container, Row } from 'react-bootstrap';
import SeekerData from '../Elements/getprofileSeeker.json';
import { Grid } from '@mui/material';

const SearchBar = ({ brandingText }) => {

  return (
    <div class="container">
    <Grid>
      <Row className="text-center">
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
      </Row>
      <Row>
        <Col xs={10} className={styles.brandText}>
          {SeekerData[0].brandingText}
        </Col>
        <Col xs={2} className={styles.characterLengthDiv}>
          {/* <span className={styles.Characters}>Characters:</span>
          <span className={styles.CharactersLength}>200/200</span> */}
        </Col>
      </Row>
    </Grid>
    </div>
  )
};

SearchBar.propTypes = {};

SearchBar.defaultProps = {};

export default SearchBar;
