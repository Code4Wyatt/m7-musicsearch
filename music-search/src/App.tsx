import React from 'react';
import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import SearchComponent from "../src/components/SearchComponent";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<SearchComponent />}/>
      </Routes>
     
    </div>
    </BrowserRouter>
  );
}

export default App;
