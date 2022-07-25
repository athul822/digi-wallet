import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import './DashBoard.scss'
import { AccountBalance } from "@mui/icons-material";
import { style } from "@mui/system";

const CardBox = ({ count }) => {
    return (
        <Box
            sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                    m: 1,
                    width: 240,
                    height: 100,
                },
            }}
        >
            <Paper elevation={1}>
                <div style={{ color:'#404e67',paddingLeft:'2rem',paddingRight:'2rem', height: "100%", display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                    <div>
                        <AccountBalance />
                    </div>
                    <div className="paper-text-cont" >

                        <span >
                        {count}
                        </span>
                        <p>
                            Total bank
                        </p>
                    </div>
                </div>
            </Paper>
        </Box>
    );
};

export const ChartBox = () =>{
   return(
    <Box
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      '& > :not(style)': {
        m: 1,
        width: 1,
        height: 1,
      },
    }}
  >
    <Paper elevation={2} />.
  </Box>
   )
} 

export default CardBox;
