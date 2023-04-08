import React from "react";
import Table from "./Table/Table";
import "./Bottom.css";
import PieChart from "./ContinuousGraph/ContinuousGraph";

const Middle = () => {
  return (
    <div className="Middle">
        <Table />
        <PieChart />
    </div>
  );
};

export default Middle;
