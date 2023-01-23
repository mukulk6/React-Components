import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBar.module.css';
import { Form, Col, InputGroup, Button, Container, Row } from 'react-bootstrap';
import SeekerData from '../Elements/getprofileSeeker.json';
import { Grid } from '@mui/material';
import Autosuggest from 'react-autosuggest';

// const SearchBar = ({ brandingText }) => {

//   return (
//     <Grid>
//       <Row className="text-center">
//         <InputGroup style={{'width':"80%",'margin':'0 auto'}}>
//           <Form.Control
//             placeholder="Ask a Question"
//             aria-label="Ask a Question"
//             aria-describedby="basic-addon2"
//             id={styles.searchControl}
//           />
//           <Button variant="outline-secondary" id={styles.searchButton}>
//             Get Answers
//           </Button>
//         </InputGroup>
//       </Row>
//       <Row>
//         <Col md={{ span: 8, offset: 1 }} className={styles.brandText}>
//           {SeekerData[0].brandingText}
//         </Col>
//         <Col xs={2} className={styles.characterLengthDiv}>
//           {/* <span className={styles.Characters}>Characters:</span>
//           <span className={styles.CharactersLength}>200/200</span> */}
//         </Col>
//       </Row>
//     </Grid>
//   )
// };

const languages = [
  {
    name: 'C',
    year: 1972
  },
  {
    name: 'C#',
    year: 2000
  },
  {
    name: 'C++',
    year: 1983
  },
  {
    name: 'Clojure',
    year: 2007
  },
  {
    name: 'Elm',
    year: 2012
  },
  {
    name: 'Go',
    year: 2009
  },
  {
    name: 'Haskell',
    year: 1990
  },
  {
    name: 'Java',
    year: 1995
  },
  {
    name: 'Javascript',
    year: 1995
  },
  {
    name: 'Perl',
    year: 1987
  },
  {
    name: 'PHP',
    year: 1995
  },
  {
    name: 'Python',
    year: 1991
  },
  {
    name: 'Ruby',
    year: 1995
  },
  {
    name: 'Scala',
    year: 2003
  }
];

function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('^' + escapedValue, 'i');

  return languages.filter(language => regex.test(language.name));
}

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  return (
    <span>{suggestion.name}</span>
  )
}

class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: [],
      content: '',
      charLimit: 200
    };
  }

  handleOnChange = (e) => {
    this.setState({[e.target.name]:e.target.value})
  }

  // handleOnSubmit = (e) => {
  //   e.preventDefault()
  //   if(this.state.content.length <= this.state.charLimit){
  //    <span>Count:</span>
  //   }else{
  //     <span>Character count increased</span>
  //   }
  // }

  
  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value),
    })
  ;
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };
  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Ask a Question",
      value:this.state.content,
      onChange: this.handleOnChange,
      'width:':'100%'
    };
    return (
      <Grid>
        <Row className="text-center">
          <InputGroup style={{ 'width':'auto','margin': '0 auto' }}>
            <Autosuggest
              suggestions={suggestions}
              onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
              onSuggestionsClearRequested={this.onSuggestionsClearRequested}
              getSuggestionValue={getSuggestionValue}
              renderSuggestion={renderSuggestion}
              inputProps={inputProps}
              highlightFirstSuggestion={true}
              id={styles.searchControl}
              value={this.state.content}
              onChange = {this.handleOnChange}
              />
            <Button variant="outline-secondary" id={styles.searchButton}>
              Get Answers
            </Button>
          </InputGroup>
        </Row>
        <Row className='text-right'>
          <Col md={12}>
            <span>Characters: </span><span>{this.state.charLimit - this.state.content.length}/200</span>
          </Col>
        </Row>
        </Grid>
    )
  }
}

SearchBar.propTypes = {};

SearchBar.defaultProps = {};

export default SearchBar;
