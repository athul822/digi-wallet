import { MoreVert } from "@mui/icons-material";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import React, { useState } from "react";
import { TransactionDataState } from "../../../Context/Context";
import "./TransChartHeader.scss";




const TransChartHeader = ({ header, isTransaction }) => {

    
  const { state, dispatch } = TransactionDataState();
  const [filterValue, setFilterValue] = useState("DAILY");
  
  const handleChange = (e) => {
    //console.log(e.value);
    setFilterValue(e.target.value);
    isTransaction &&
      dispatch({
        type: e.target.value,
        payload: state.userData,
      });
    
  };
  return (
    <div className="trans-header">
      <p>{header}</p>
      <div className="select-vert-container">
        <select
          name="trans-header-filter"
          id="cars"
          value={filterValue}
          onChange={handleChange}
        >
          <option value="DAILY">Daily</option>
          <option value="WEEKLY">Weekly</option>
          <option value="MONTHLY">Monthly</option>
        </select>
        <span className="vert-icon">
          <MoreVert />
        </span>
      </div>
    </div>
  );
};

export default TransChartHeader;
