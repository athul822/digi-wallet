import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import "./NavBarStyle.scss";
import { AccountBalance, AddBusiness, ExpandLess, ExpandMore, Person, PersonAddAlt } from "@mui/icons-material";
import { Collapse } from "@mui/material";
import AddBank from "../AddBank/AddBank";
import { Route, Routes, BrowserRouter, useNavigate } from "react-router-dom";


const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

export const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));

const SideNavBar = () => {
    const nav = useNavigate()
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const [openSubBank, setOpenSubBank] = React.useState(true);
    const [openSubUser, setOpenSubUser] = React.useState(true);

    const handleClickBank = () => {
        setOpenSubBank(!openSubBank);
    };
    const handleClickUser = () => {
        setOpenSubUser(!openSubUser);
    };
    const handleSubClick = (i) => {
        if(i=='ab'){
            nav('/add_bank')
        } else if (i=='au'){
            nav('/add_user')
        }   
    };
    
    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: "none" }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                   
                  <li>
                    <ListItemButton sx={!openSubBank ? {backgroundColor:"#384c6d"} : {}} onClick={handleClickBank}>
                        <ListItemIcon>
                            <AccountBalance />
                        </ListItemIcon>
                        <ListItemText primary="Bank" sx={{fontSize:25}} />
                        {openSubBank ? <ExpandMore /> : <ExpandLess />}
                    </ListItemButton>
                    <Collapse in={!openSubBank} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }} onClick={()=>handleSubClick('ab')}>
                                <ListItemIcon>
                                    <AddBusiness />
                                </ListItemIcon>
                                <ListItemText primary="Add Bank" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }} onClick={()=>handleSubClick('ab')}>
                                <ListItemIcon>
                                    <AccountBalance />
                                </ListItemIcon>
                                <ListItemText primary="Bank" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                    </li>

                    <li>
                    <ListItemButton onClick={handleClickUser}>
                        <ListItemIcon>
                            <Person />
                        </ListItemIcon>
                        <ListItemText primary="User" />
                        {openSubUser ? <ExpandMore /> : <ExpandLess />}
                    </ListItemButton>
                    <Collapse in={!openSubUser} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }} onClick={()=>handleSubClick('au')}>
                                <ListItemIcon>
                                    <PersonAddAlt />
                                </ListItemIcon>
                                <ListItemText primary="Add User" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }} onClick={handleSubClick}>
                                <ListItemIcon>
                                    <Person />
                                </ListItemIcon>
                                <ListItemText primary="User" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                    </li>
                </List>
                <Divider />
            </Drawer>
        </Box>

    );
};

export default SideNavBar;
