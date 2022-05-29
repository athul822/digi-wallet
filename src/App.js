import React from "react";
import SideBarNavContainer from "./Components/SideBarNav/SideBarNavContainer";
import HeaderBar from "./Components/HeaderBar/HeaderBar";
import "./App.scss";
import DashBoardPage from "./Pages/DashBoardPage";

const App = () => {
    return (
        <div className="layout">
        <div className="container">
            <SideBarNavContainer />
            <div className="header-page-container">
                <div className="header-bar-container">
                    <HeaderBar />
                </div>
                <div className="page-view-container">
                    <DashBoardPage />
                </div>
            </div>
        </div>
        </div>
    );
};

export default App;
