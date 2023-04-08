import React from "react";
import Middle from "./Bottom/Bottom";
import Bottom from "./Middle/Middle";
import Top from "./Top/Top";
import TopTop from "./TopTop/TopTop";
import {AnimatePresence} from "framer-motion";

import "./Overview.css";
const MainDash = () => {
  return (
    <div className="Overview">
        <TopTop/>
        <Top />
        <Bottom/>
        <Middle />
    </div>
  );
};

export default MainDash;
