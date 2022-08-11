import logo from './logo.svg';
import './App.css';
import SeekerData from '../src/components/Elements/getprofileSeeker.json';
import Elements from './components/Elements/Elements';
import TabSearch from './components/TabSearch/TabSearch';
import Multiselectdropdowndomain from './components/Multiselectdropdowndomain/Multiselectdropdowndomain';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <div class="row">
        <Elements />
        <TabSearch />
        {SeekerData.map((postData, index) => {
          return (
            <div key={index}>
              <Multiselectdropdowndomain data={postData} />
              <SearchBar data={postData}/>
            </div>
          )
        })}
        
      </div>
      </div>
  );
}

export default App;
