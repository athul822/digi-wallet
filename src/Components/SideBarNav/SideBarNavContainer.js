import React from "react";
import "./SideBarNav.scss";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import GridViewIcon from '@mui/icons-material/GridView';
import AutorenewIcon from '@mui/icons-material/Autorenew';

import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const SideBarNavContainer = () => {
    return (
        <div className="side-nav-bar-container">
            <ul>
                <li><MailOutlineIcon color='disabled' /></li>
                <li><NotificationsNoneIcon color='disabled' /></li>
                <li><GridViewIcon color='disabled' /></li>
                <li><AutorenewIcon color='disabled' /></li>
                <li><TrendingUpIcon color='disabled' /></li>
                <li><SettingsOutlinedIcon color='disabled' /></li>           
            </ul>
        </div>
    );
};

export default SideBarNavContainer;
