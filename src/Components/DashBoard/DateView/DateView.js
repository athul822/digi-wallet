import React, { useState } from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import './DateView.scss'



const DateView = ({ date }) => {
    console.log(date);
    const formatDate = (dateParm) => {
        dateParm = new Date(dateParm)
        return (
            dateParm.toLocaleDateString("en-US", { day: "numeric" }) +
            " " +
            dateParm.toLocaleDateString("en-US", { month: "short" }).toUpperCase() +
            "," +
            dateParm.toLocaleDateString("en-US", { year: "numeric" })
        );
    };

    const [dateToShow, setDateToShow] = useState(formatDate(date));
    return (
        <div className="date-view-container">
            <span className="date-icon">
                <CalendarTodayIcon fontSize="small" />
            </span>
            <span className="date-text">{dateToShow}</span>
        </div>
    );
};

export default DateView;
