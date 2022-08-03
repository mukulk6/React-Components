import logo from './logo.svg';
import './App.css';
import SeekerData from '../src/components/Elements/getprofileSeeker.json';
import Elements from './components/Elements/Elements';
import TabSearch from './components/TabSearch/TabSearch';

function App() {
  return (
    <div className="App">
      <Elements />
      <TabSearch />
    </div>
  );
}

export default App;
