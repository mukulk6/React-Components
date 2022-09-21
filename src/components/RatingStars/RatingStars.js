import React from 'react';
import PropTypes from 'prop-types';
import styles from './RatingStars.module.css';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const RatingStars = () => { 
  const [value, setValue] = React.useState(2);
  return (
  <div className={styles.ratingStarsInput}>
    <Rating
      name="simple-controlled"
      value={value}
      size='small'
      sx={{marginBottom:'15px',}}
      onChange={(event, newValue) => {
        setValue(newValue);
      }
    }
    />
  </div>
)
    };

RatingStars.propTypes = {};

RatingStars.defaultProps = {};

export default RatingStars;
