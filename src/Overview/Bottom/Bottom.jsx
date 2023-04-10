import React from "react";
import Table from "./Table/Table";
import ContinuousGraph from "./ContinuousGraph/ContinuousGraph";
import "./Bottom.css";

const Bottom = () => {
  return (
    <div className="Bottom">
        <Table />
        <ContinuousGraph />
    </div>
  );
};

export default Bottom;
