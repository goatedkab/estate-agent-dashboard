import React, { useState } from "react";
import MainDash from '../../Overview/Overview';
import Sidebar from '../../Sidebar/Sidebar';
import Listings from '../../Listings/Listings';
import './AppBody.css'
import { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";


const AppBody = (authUser) => {

  const [selected, setSelected] = useState(1)

  const renderMainScreen = () => {
    if (selected === 1) {
      return <MainDash/>;
    } else if (selected === 2){
      return <Listings/>;
    }
  }

  return (
      <div className="AppBody">
        <Sidebar selected={selected} setSelected = {setSelected}/>
        {renderMainScreen()}
      </div>
  );
}

export default AppBody
