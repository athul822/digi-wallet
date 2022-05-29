import React from "react";
import styled from "styled-components";
import "./BankCard.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const BankCardHeader = ({ header, debitCard }) => {
    const CardHeader = styled.div`
        display: flex;
        width: 100%;
        color: #ffff;
    `;
    const HeaderText = styled.p`
        ${debitCard && "font-family: 'Bebas Neue', cursive;font-weight:400; font-size:22.4px;"}
    `;
    return (
        <CardHeader className="card-header">
            <HeaderText className="card-header-text">{header}</HeaderText>
            {debitCard ? (
                <HeaderText className="card-header-text">HBT</HeaderText>
            ) : (
                <span>
                    <MoreVertIcon />
                </span>
            )}
        </CardHeader>
    );
};

export default BankCardHeader;
