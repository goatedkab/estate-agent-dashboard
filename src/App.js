import './App.css'
import Sidebar from './Sidebar/Sidebar';
import Listings from './Listings/Listings';
import MainDash from './Overview/Overview';
import React, { useState } from "react";
import AuthDetails from './AuthComponents/AuthDetails';
function App() {


  return (
    <div className="App">
      <AuthDetails/>
    </div>
  );
}


export default App;
