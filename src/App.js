import React from "react";
import { Route, Routes, BrowserRouter, useNavigate } from "react-router-dom";
import SideBarNavContainer from "./Components/SideBarNav/SideBarNavContainer";
import HeaderBar from "./Components/HeaderBar/HeaderBar";
import "./App.scss";
import DashBoardPage from "./Pages/DashBoardPage";
import MessagesPage from "./Pages/MessagesPage";
import NotificationPage from "./Pages/NotificationPage";
import TransactionsPage from "./Pages/TransactionsPage";
import CostPage from "./Pages/CostPage";
import SettingsPage from "./Pages/SettingsPage";
import SideNavBar from "./BankDashBoard/Components/SideNavBar/SideNavBar";
import AddBank from "./BankDashBoard/Components/AddBank/AddBank";
import AddUser from "./BankDashBoard/Components/AddUser/AddUser";
import UsresList from "./BankDashBoard/Components/UsersList/UsresList";
import EnhancedTable from "./BankDashBoard/Components/UsersList/UsresList";
import DashBoard from "./BankDashBoard/Components/DashBoard/DashBoard";

const App = () => {

   
    return (
       
       
        <div className="layout" style={{width:'100%',height:'100%'}}>
          
          <SideNavBar />
         <div className="routes" style={{width:'100%'}}>
            <Routes>
            <Route path="/add_bank" element={<AddBank />} /> 
            <Route path="/add_user" element={<AddUser />} />
            <Route path="/users" element={<EnhancedTable />} /> 
            <Route path="/" element={<DashBoard />} />

            </Routes>
         </div>
         






            
       
        {/* <div className="layout">
            <div className="container">
                <BrowserRouter>
                    <SideBarNavContainer />
                    <div className="header-page-container">
                        <div className="header-bar-container">
                            <HeaderBar />
                        </div>
                        <div className="page-view-container">
                            <Routes>
                                <Route path="/" element={<DashBoardPage />} />
                                <Route path="/messages" element={<MessagesPage />} />
                                <Route path="/notifications" element={<NotificationPage />} />
                                <Route path="/transactions" element={<TransactionsPage />} />
                                <Route path="/cost" element={<CostPage />} />
                                <Route path="/settings" element={<SettingsPage />} />                          
                            </Routes>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        </div> */}

        </div>
      
    );
};

export default App;
