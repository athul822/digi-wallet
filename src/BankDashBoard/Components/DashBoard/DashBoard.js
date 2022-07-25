import { Box, Paper } from "@mui/material";
import React from "react";
import { DrawerHeader } from "../SideNavBar/SideNavBar";
import CardBox, { ChartBox } from "./CardBox";
import "./DashBoard.scss";
import BasicTable from "./TableView";

const DashBoard = () => {
    return (
        <Box sx={{ backgroundColor: "#FAFAFA", width: 1 }}>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <div className="" style={{ display: "flex", flexWrap: "wrap" }}>
                    <div style={{ display: "flex", minWidth: "260px", maxWidth: "512px", flexWrap: "wrap" }}>
                        <CardBox count={1990} />
                        <CardBox count={455} />
                        <CardBox count={78899} />
                        <CardBox count={5777} />
                    </div>
                    <div className="chart-container">
                        <ChartBox />
                    </div>
                </div>
                <div style={{display:'flex'}}>
                    <div style={{ maxWidth:'40%',marginRight:'.8rem'}}>
                        <BasicTable tabName={'Bank Details'} />
                    </div>
                    <div>
                        <BasicTable tabName={'Users Details'} />
                    </div>
                </div>
            </Box>
        </Box>
    );
};

export default DashBoard;
