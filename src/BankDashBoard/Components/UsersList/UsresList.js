import { Box } from "@mui/material";
import React from "react";
import { DrawerHeader } from "../SideNavBar/SideNavBar";
import EnhancedTable from "./UsersTable";

const UsresList = () => {
    return (
        <div>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
               <EnhancedTable />
            </Box>
        </div>
    );
};

export default UsresList;
