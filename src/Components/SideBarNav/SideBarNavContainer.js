import React from "react";
import "./SideBarNav.scss";
import { Link } from "react-router-dom";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import GridViewIcon from "@mui/icons-material/GridView";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SideBarIcon from "./SideBarIcon";

const SideBarNavContainer = () => {
    const icons = {
        mail: <MailOutlineIcon color="disabled" fontSize="medium" />,
        notification: <NotificationsNoneIcon color="disabled" fontSize="medium" />,
        grid: <GridViewIcon color="disabled" fontSize="medium" />,
        renew: <AutorenewIcon color="disabled" fontSize="medium" />,
        trend: <TrendingUpIcon color="disabled" fontSize="medium" />,
        settings: <SettingsOutlinedIcon color="disabled" fontSize="medium" />,
    };
    return (
        <div className="side-nav-bar-container">
            <ul>
                <Link to="/messages">
                    <li>
                        <SideBarIcon iconName={icons.mail} badge={true} />
                    </li>
                </Link>
                <Link to="/notifications">
                    <li>
                        <SideBarIcon iconName={icons.notification} badge={true} />
                    </li>
                </Link>

                <Link to="/">
                    <div className="active">
                        <li>
                            <SideBarIcon iconName={icons.grid} badge={false} />
                        </li>
                    </div>
                </Link>
                <Link to="/transactions">
                    <li>
                        <SideBarIcon iconName={icons.renew} badge={false} />
                    </li>
                </Link>
                <Link to="/cost">
                    <li>
                        <SideBarIcon iconName={icons.trend} badge={false} />
                    </li>
                </Link>
                <Link to="/settings">
                    <li>
                        <SideBarIcon iconName={icons.settings} badge={false} />
                    </li>
                </Link>
            </ul>
        </div>
    );
};

export default SideBarNavContainer;
