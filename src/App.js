import logo from './logo.svg';
import './App.css';
import SeekerData from '../src/components/Elements/getprofileSeeker.json';
import Elements from './components/Elements/Elements';
import TabSearch from './components/TabSearch/TabSearch';
import Multiselectdropdowndomain from './components/Multiselectdropdowndomain/Multiselectdropdowndomain';
import SearchBar from './components/SearchBar/SearchBar';
import AskanExpertlogo from './components/AskanExpertlogo/AskanExpertlogo';
import AiToggle from './components/AiToggle/AiToggle';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Wrappersearchbar from './components/Wrappersearchbar/Wrappersearchbar';
import OpentabSeekerData from './components/OpentabSeeker/opentabseeker.json';
import OpentabSeeker from './components/OpentabSeeker/OpentabSeeker';
import React from 'react';

function App() {
  return (
    <div className="App">
        <div class="row">
          <Elements />
          <TabSearch />
          <AskanExpertlogo />
          <AiToggle />
          <NavigationBar />
          <Wrappersearchbar />
          {SeekerData.map((postData, index) => {
            return (
              <div key={index}>
                <Multiselectdropdowndomain data={postData} />
                <SearchBar data={postData} />
              </div>
            )
          })}
        </div>
    </div>
  );
}

export default App;
