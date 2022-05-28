import React from "react";
import "./SideBarNav.scss";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import GridViewIcon from '@mui/icons-material/GridView';
import AutorenewIcon from '@mui/icons-material/Autorenew';

import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SideBarIcon from "./SideBarIcon";

const SideBarNavContainer = () => {
    return (
        <div className="side-nav-bar-container">
            <ul> <SideBarIcon iconName={<MailOutlineIcon/>} badge={false}/>
                <li><MailOutlineIcon color='disabled' fontSize="medium" /></li>
                <li><NotificationsNoneIcon color='disabled' fontSize="medium"/></li>
                <li><GridViewIcon color='disabled' fontSize="medium"/></li>
                <li><AutorenewIcon color='disabled' fontSize="medium" /></li>
                <li><TrendingUpIcon color='disabled' fontSize="medium" /></li>
                <li><SettingsOutlinedIcon color='disabled' fontSize="medium" /></li>           
            </ul>
        </div>
    );
};

export default SideBarNavContainer;
