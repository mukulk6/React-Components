import logo from './logo.svg';
import './App.css';
import SeekerData from '../src/components/Elements/getprofileSeeker.json';
import Elements from './components/Elements/Elements';
import TabSearch from './components/TabSearch/TabSearch';
import Multiselectdropdowndomain from './components/Multiselectdropdowndomain/Multiselectdropdowndomain';

function App() {
  return (
    <div className="App">
      <Elements />
      <TabSearch />
      {SeekerData.map((postData, index) => {
        return (
          <div key={index}>
            <Multiselectdropdowndomain data={postData} />
          </div>
        )
      })}
    </div>
  );
}

export default App;
