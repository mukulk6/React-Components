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

function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="row">
          <Elements />
          <TabSearch />
          <AskanExpertlogo />
          <AiToggle />
          <NavigationBar />
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
    </div>
  );
}

export default App;
