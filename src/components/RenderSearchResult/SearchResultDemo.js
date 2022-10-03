import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './RenderSearchResult.module.css';
import SearchResultData from '../SearchResult/SearchData.json';
import BestResult from '../BestResult/BestResult';
import SearchResult from '../SearchResult/SearchResult';
import { Rating } from '@mui/material';
import RatingStars from '../RatingStars/RatingStars';
import BestResultComponent from '../BestResultComponent/BestResultComponent';
import SimilarResultComponent from '../SimilarResultComponent/SimilarResultComponent';

const SearchData = () => {
    return SearchResultData
}

// const ToggleButton ({ isExpanded, onClick }) => {
//     return (
//       <span className={styles.showMore} onClick={onClick}>
//         {isExpanded ? <i class="fa fa-angle-up"></i> : <i class="fa fa-angle-down"></i>}
//       </button>
//     );
//   };

const SearchResultDemo = (props) => {
    if (props.data.confidence == true) {
        return (
            <>
                {SearchResultData.map((data, ind) => { return (<div key={ind} class="col-sm-12"><h5>Best Results</h5><BestResultComponent data={data} /></div>) })}
            </>
        )
    }
    else {
        return (
            <>
                {SearchResultData.map((data, ind) => { return (<div key={ind} class="col-sm-12"><h5>Similar Results</h5><SimilarResultComponent data={data} /></div>) })}
            </>
        )
    }
}

export default SearchResultDemo;
