import React from "react";
import { Badge } from "@mui/material";

const SideBarIcon = ({ iconName, badge }) => {
    console.log(iconName);

    return (
        <div>
            <Badge color="secondary" variant="dot" invisible={!badge}>
                {iconName}
            </Badge>
           
        </div>
    );
};

export default SideBarIcon;
