import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import OpenTabSeekerData from './components/RenderOpenTabComponent/opentabseeker.json'
import RenderOpenTabComponent from './components/RenderOpenTabComponent/RenderOpenTabComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OpentabSeeker from './components/OpentabSeeker/OpentabSeeker';
import OpenTabData from './components/OpentabSeeker/OpenTabData.json';
import TrendingTab from './components/TrendingTab/TrendingTab';
import SearchResult from './components/SearchResult/SearchResult';
import SearchResultData from './components/SearchResult/SearchData.json';
import SeekerAnswered from './components/SeekerAnswered/SeekerAnswered';
import SearchTab from './components/SearchTab/SearchTab';
import Favorite from './components/Favorite/Favorite';
import SharedComponent from './components/SharedComponent/SharedComponent';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/openseeker" element={<OpentabSeeker />} />
        <Route path="/trending" element={<TrendingTab />} />
        <Route path="/search" element={<SearchResult />} />
        <Route path="/seekerans" element={<SeekerAnswered />} />
        <Route path="/searchtab" element={<SearchTab />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/sharedwithme" element={<SharedComponent />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
