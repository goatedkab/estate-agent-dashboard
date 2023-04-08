import React, { useState } from "react";
import "./Sidebar.css";
import { SidebarData } from "../Data/Data";
import Logo from "../Images/logo.png";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";


const Sidebar = ({selected, setSelected}) => {
  // const [selected, setSelected] = useState(1);
  const [expanded, setExpaned] = useState(true)

  // console.log(selected)

  const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '-60%'
    }
  }


  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };

  // console.log(window.innerWidth)
  return (
    <>

      <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
        <UilBars />
      </div>
    <motion.div className='sidebar'
    variants={sidebarVariants}
    animate={window.innerWidth<=768?`${expanded}`:''}
    >
      {/* logo */}
      <div className="logo">
        <img src={Logo} alt="logo" />
        <div className="titleContainer">
          <span>
            SIFT
          </span>
          <span>
            Admin Tool
          </span>
        </div>
      </div>

      <div className="menu">




        {SidebarData.map((item, index) => {
          if(item.type === 'menuItem') {
            return (
              <div style={item.chunk === 2 ? {top: "1.2rem" }: {top: "0rem"}}
                className={selected === index ? "menuItem activated" : "menuItem"}
                key={index}
                onClick={() => setSelected(index)}
              >
                <item.icon />
                <span>{item.heading}</span>
              </div>
            );
          }
          else
          {
            return(
            <div className="menuTitle" style={item.chunk === 2 ? {top: "1.2rem" }: {top: "0rem"}}>
              {item.heading}
            </div>
            )
          }
          
          })}

      <div className="profileBar" onClick={userSignOut}>
            <div className="profilePic">
              <img src="https://www.getillustrations.com/photos/pack/3d-avatar-male_lg.png"></img>
            </div>
            <div className="profileDescriptor">
              <h4>Morris Gruely</h4>
              <p>estate agent</p>
            </div>
        </div>

          
      </div>
    </motion.div>

    </>
  );
};

export default Sidebar;
