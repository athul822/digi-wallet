import React from "react";
import styled from "styled-components";
import "./BankCard.scss";
import MoreVertIcon from '@mui/icons-material/MoreVert';

const BankCardHeader = ({header}) => {
    const CardHeader = styled.div`
        display: flex;

        width: 100%;
        color: #ffff;
    `;
    return (
        <CardHeader className="card-header">
            <p className="card-header-text">{header}</p>
            <span><MoreVertIcon/></span>
        </CardHeader>
    );
};

export default BankCardHeader;
