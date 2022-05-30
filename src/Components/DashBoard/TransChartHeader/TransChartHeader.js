import { MoreVert } from "@mui/icons-material";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import React, { useState } from "react";
import './TransChartHeader.scss'

const TransChartHeader = ({header}) => {
    const [filterValue, setFilterValue] = useState("daily");
    const handleChange = (e) =>{
        setFilterValue(e.target.value)
    }
    return (
        <div className="trans-header">
            <p>{header}</p>
            <div className="select-vert-container">
                <select name="trans-header-filter" id="cars" value={filterValue} onChange={handleChange}>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                </select>
                <span className="vert-icon">
                    <MoreVert />
                </span>
            </div>
        </div>
    );
};

export default TransChartHeader;
