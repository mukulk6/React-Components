import React from 'react';
import PropTypes from 'prop-types';
import styles from './RatingStars.module.css';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

// const useStyles = makeStyles({
//   root: {
//     width: 200,
//     display: "flex",
//     alignItems: "center"
//   },
//   iconFilled: {},
//   iconFilled1: { color: "red" },
//   iconFilled2: { color: "orange" },
//   iconFilled3: { color: "yellow" },
//   iconFilled4: { color: "blue" },
//   iconFilled5: { color: "green" },
//   iconHover: {},
//   iconHover1: { color: "red" },
//   iconHover2: { color: "orange" },
//   iconHover3: { color: "yellow" },
//   iconHover4: { color: "blue" },
//   iconHover5: { color: "green" }
// });

const RatingStars = () => {
  // const classes = useStyles();
  const [value, setValue] = React.useState(2);
  // const [iconFilledVar, setIconFilled] = React.useState(classes.iconFilled);
  // const [iconHoverVar, setIconHover] = React.useState(classes.iconHover);


  return (
  <div className={styles.ratingStarsInput}>
    <Rating
      name="simple-controlled"
      value={value}
      size='small'
      sx={{marginBottom:'5px',fontSize:'16px'}}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    />
  </div>
)
    };

RatingStars.propTypes = {};

RatingStars.defaultProps = {};

export default RatingStars;
