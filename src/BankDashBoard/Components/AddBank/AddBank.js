import { Box, Paper, TextField, Typography } from "@mui/material";

import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import React from "react";
import { DrawerHeader } from "../SideNavBar/SideNavBar";
import './AddBank.scss'

const AddBank = () => {
    const [values, setValues] = React.useState({
        amount: "",
        password: "",
        weight: "",
        weightRange: "",
        showPassword: false,
    });
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Box component="main" sx={{ backgroundColor: "#FAFAFA", width: 1, mt: 2, ml: 2 }}>
            <DrawerHeader />
            <div style={{ maxWidth: "50%" }}>
                <Paper elevation={1}>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <span>Add Bank Details</span>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                marginTop: "12px",
                            }}
                        >
                            <TextField
                                size="small"
                                className="text-field"
                                id="outlined-basic"
                                label="Bank Name"
                                variant="outlined"
                            />
                            <TextField
                                size="small"
                                className="text-field"
                                id="outlined-basic"
                                label="Address"
                                variant="outlined"
                                multiline
                                rows={4}
                            />
                            <TextField
                                size="small"
                                className="text-field"
                                id="outlined-basic"
                                label="Collection Manager"
                                variant="outlined"
                            />
                            <TextField
                                size="small"
                                className="text-field"
                                id="outlined-basic"
                                label="Username"
                                variant="outlined"
                            />
                           <FormControl variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    size="small"
                                    className="text-field"
                                    id="outlined-adornment-password"
                                    type={values.showPassword ? "text" : "password"}
                                    value={values.password}
                                    onChange={handleChange("password")}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl>
                            <TextField
                                size="small"
                                className="text-field"
                                id="outlined-basic"
                                label="Collection Manager"
                                variant="outlined"
                            />
                            <TextField
                                size="small"
                                className="text-field"
                                id="outlined-basic"
                                label="Username"
                                variant="outlined"
                            />
                          

                            <FormControl variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    size="small"
                                    className="text-field"
                                    id="outlined-adornment-password"
                                    type={values.showPassword ? "text" : "password"}
                                    value={values.password}
                                    onChange={handleChange("password")}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl>
                        </div>
                    </div>
                </Paper>
            </div>
        </Box>
    );
};

export default AddBank;
