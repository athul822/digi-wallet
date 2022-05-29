import React from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import GridViewIcon from "@mui/icons-material/GridView";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
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
