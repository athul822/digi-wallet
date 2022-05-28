import React from "react";
import SideBarNavContainer from "./Components/SideBarNav/SideBarNavContainer";
import HeaderBar from "./Components/HeaderBar/HeaderBar";
import "./App.scss";

const App = () => {
    return (
        <div className="container">
            <SideBarNavContainer />
            <div className="header-page-container">
                <div className="header-bar-container">
                    <HeaderBar />
                </div>
                <div className="page-view-container">
                    
                </div>
            </div>
        </div>
    );
};

export default App;
