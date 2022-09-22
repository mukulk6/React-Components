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
      sx={{marginBottom:'15px',}}
      onChange={(event, newValue) => {
        setValue(newValue);
        // switch (true) {
        //   case newValue <= 1: {
        //     setIconFilled(classes.iconFilled1);
        //     break;
        //   }
        //   case newValue <= 2 && newValue > 1: {
        //     setIconFilled(classes.iconFilled2);
        //     break;
        //   }
        //   case newValue <= 3 && newValue > 2: {
        //     setIconFilled(classes.iconFilled3);
        //     break;
        //   }
        //   case newValue <= 4 && newValue > 3: {
        //     setIconFilled(classes.iconFilled4);
        //     break;
        //   }
        //   case newValue > 4: {
        //     setIconFilled(classes.iconFilled5);
        //     break;
        //   }
        // }
      }}
      // onChangeActive={(event, newHover) => {
      //   switch (true) {
      //     case newHover <= 1: {
      //       setIconHover(classes.iconHover1);
      //       break;
      //     }
      //     case newHover <= 2 && newHover > 1: {
      //       setIconHover(classes.iconHover2);
      //       break;
      //     }
      //     case newHover <= 3 && newHover > 2: {
      //       setIconHover(classes.iconHover3);
      //       break;
      //     }
      //     case newHover <= 4 && newHover > 3: {
      //       setIconHover(classes.iconHover4);
      //       break;
      //     }
      //     case newHover > 4: {
      //       setIconHover(classes.iconHover5);
      //       break;
      //     }
      //   }
      // }}
      // classes={{
      //   iconFilled: iconFilledVar,
      //   iconHover: iconHoverVar
      // }}
    />
  </div>
)
    };

RatingStars.propTypes = {};

RatingStars.defaultProps = {};

export default RatingStars;
