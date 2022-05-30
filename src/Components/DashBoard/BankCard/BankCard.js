import React, { useState } from "react";
import styled from "styled-components";
import BankCardChipSvg from "./BankCardChipSvg";
import BankCardHeader from "./BankCardHeader";
import ShowAmount from "./ShowAmount";
import "./BankCard.scss";
import BrandLogo from "../../HeaderBar/BrandLogo";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
   
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

const BankCard = ({ color, header, amount, debitCard,popUp }) => {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        popUp ? 
        !open &&  setOpen(true)
        : setOpen(false)
       
    }

    const handleOpen = () => {
        setOpen(true);
        console.log('opening');
    }
    const handleClose = () => {
        setOpen(false);
        console.log(open);
    };

    const CardView = styled.div`
        display: flex;
        width: 25vw;
        height: 24.5vh;
       
        ${
            !debitCard
                ? ` background: linear-gradient(230deg, ${color.color1} 10%, ${color.color2} 50%);`
                : ` background: linear-gradient(230deg, #404040 46%, #070707 63%);cursor:pointer`
        }
        }
       
    `;
    return (
        <CardView className="bank-card-container" onClick={handleClick}>
            {debitCard ? (
                <>
                    <BankCardHeader header={header} debitCard />
                    <div>
                        <div className="chip"></div>
                        <div>
                            <p>1234 5678 9012 3456</p>
                            <p>0123</p>
                        </div>
                    </div>
                    <div>
                        <p>MOHSIN JAVED</p>
                    </div>
                </>
            ) : (
                <>
                    <BankCardHeader header={header} />
                    <ShowAmount amount={amount} />
                </>
            )}

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <BankCard color={{ color1: "#1A7579", color2: "#151515" }} header={"DEBIT CARD"} debitCard />
                </Box>
            </Modal>
        </CardView>
    );
};

export default BankCard;
