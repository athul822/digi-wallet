import React, { useState } from "react";
import "./BankCard.scss";

const ShowAmount = ({amount}) => {
    const commaSeparateAmount = (amount) =>{
        return (Math.round(amount*100)/100).toLocaleString()

    } 
    const [amountD , setAmountD] = useState(commaSeparateAmount(amount))
    return (
        <div className="show-amount-container">
            <p className="amount-text">$ {amountD} </p>
            <p className="amount-sub-text">25% from total balance</p>
        </div>
    );
};

export default ShowAmount;
