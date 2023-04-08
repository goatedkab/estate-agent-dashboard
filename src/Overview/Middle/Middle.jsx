import React from "react";
import CustomerReview from "./PieChart/PieChart";
import Updates from "./Updates/Updates";
import BarGraph from "./BarGraph/BarGraph";
import "./Middle.css";

const Bottom = () => {
  return (
    <div className="Bottom">
        <CustomerReview />
        <Updates />
        <BarGraph/>
    </div>
  );
};

export default Bottom;
