import logo from './logo.svg';
import styles from'./App.css';
import SeekerData from '../src/components/Elements/getprofileSeeker.json';
import Elements from './components/Elements/Elements';
import TabSearch from './components/TabSearch/TabSearch';
import Multiselectdropdowndomain from './components/Multiselectdropdowndomain/Multiselectdropdowndomain';
import SearchBar from './components/SearchBar/SearchBar';
import AskanExpertlogo from './components/AskanExpertlogo/AskanExpertlogo';
import AiToggle from './components/AiToggle/AiToggle';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Wrappersearchbar from './components/Wrappersearchbar/Wrappersearchbar';
import SearchResult from './components/SearchResult/SearchResult';
import OpentabSeeker from './components/OpentabSeeker/OpentabSeeker';
import React from 'react';
import RenderOpenTabComponent from './components/RenderOpenTabComponent/RenderOpenTabComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchResultData from './components/SearchResult/SearchData.json';
import AwardsModal from './components/AwardsModal/AwardsModal';
import AutoSuggestions from './components/AutoSuggest/AutoSuggestions';

function App() {
  return (
    <div className="App">
        <div className={styles.pageTopContainer}>
        <AskanExpertlogo />
        <NavigationBar />
        <Wrappersearchbar />
        <AwardsModal />
        {SeekerData.map((postData, index) => {
          return (
            <div key={index} class="container">
              <SearchBar data={postData} />
            </div>
          )
        })}
        <AutoSuggestions />
        </div>      
    </div>
  );
}

export default App;
