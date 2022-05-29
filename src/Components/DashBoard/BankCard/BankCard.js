import React from "react";
import styled from "styled-components";
import BankCardHeader from "./BankCardHeader";
import ShowAmount from "./ShowAmount";

const BankCard = ({ color, header, amount }) => {
    const CardView = styled.div`
        display: flex;
        width: 25vw;
        height: 24.5vh;
        background: linear-gradient(230deg, ${color.color1} 10%, ${color.color2} 50%);
    `;
    return (
        <CardView className="bank-card-container">
            <BankCardHeader header={header} />
            <ShowAmount amount={amount} />
        </CardView>
    );
};

export default BankCard;
