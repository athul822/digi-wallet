import React from "react";
import "./TabHeader.scss";

const TabHeader = ({ header }) => {
    return (
        <div>
            <h3>{header}</h3>
        </div>
    );
};

export default TabHeader;
