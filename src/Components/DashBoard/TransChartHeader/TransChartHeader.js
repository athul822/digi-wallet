import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import React, { useState } from "react";
import './TransChartHeader.scss'

const TransChartHeader = ({header}) => {
    const [filterValue, setFilterValue] = useState("");
    const handleChange = (e) =>{
        setFilterValue(e.target.value)
    }
    return (
        <div className="trans-header">
            <p>{header}</p>
            <div>
                <select name="trans-header-filter" id="cars" value={filterValue} onChange={handleChange}>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="yearly">Yearly</option>
                </select>
            </div>
        </div>
    );
};

export default TransChartHeader;
