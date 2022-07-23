import React from "react";
import { Badge } from "@mui/material";
import { Colorize } from "@mui/icons-material";

const SideBarIcon = ({ iconName, badge, color}) => {
    console.log(iconName);

    return (
        <div>
            <Badge color={color} variant="dot" invisible={!badge}>
                {iconName}
            </Badge>  
        </div>
    );
};

export default SideBarIcon;
