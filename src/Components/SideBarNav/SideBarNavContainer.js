import React, { useState } from "react";
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
    const [clickedItem, setClickedItem] = useState(3);
    const clickHandle =  (value) =>{
        setClickedItem(value)
    }
    return (
        <div className="side-nav-bar-container">
            <ul>
                <Link to="/messages">
                    <div className={`${clickedItem == 1 ? "active" : ""}`}>
                        <li onClick={()=>clickHandle(1)}>
                            <SideBarIcon iconName={icons.mail} badge={true} color={"warning"} />
                        </li>
                    </div>
                </Link>
                <Link to="/notifications">
                    <div className={`${clickedItem == 2 ? "active" : ""}`}>
                        <li onClick={()=>clickHandle(2)}>
                            <SideBarIcon iconName={icons.notification} badge={true} color={"success"} />
                        </li>
                    </div>
                </Link>

                <Link to="/">
                    <div className={`${clickedItem == 3 ? "active" : ""}`}>
                        <li onClick={()=>clickHandle(3)}>
                            <SideBarIcon iconName={icons.grid} badge={false} />
                        </li>
                    </div>
                </Link>
                <Link to="/transactions">
                    <div className={`${clickedItem == 4 ? "active" : ""}`}>
                        <li onClick={()=>clickHandle(4)}>
                            <SideBarIcon iconName={icons.renew} badge={false} />
                        </li>
                    </div>
                </Link>
                <Link to="/cost">
                    <div className={`${clickedItem == 5 ? "active" : ""}`}>
                        <li onClick={()=>clickHandle(5)}>
                            <SideBarIcon iconName={icons.trend} badge={false} />
                        </li>
                    </div>
                </Link>
                <Link to="/settings">
                    <div className={`${clickedItem == 6 ? "active" : ""}`}>
                        <li onClick={()=>clickHandle(6)}>
                            <SideBarIcon iconName={icons.settings} badge={false} />
                        </li>
                    </div>
                </Link>
            </ul>
        </div>
    );
};

export default SideBarNavContainer;
