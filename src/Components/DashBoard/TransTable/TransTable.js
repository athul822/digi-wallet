import axios from "axios";
import React, { useEffect, useState } from "react";
import { TransactionDataState } from "../../../Context/Context";
import "./TransTable.scss";
import TransTableItem from "./TransTableItem";

const TransTable = () => {
    const { state, dispatch } = TransactionDataState();
    //console.log(state.userData);
    //console.log(TransactionDataState());
    //const [userData, setUserData] = useState([]);
    useEffect(() => {
        axios.get("https://mocki.io/v1/94bece71-5d3c-4a80-8fa4-39595d34b1b4").then((resp) => {
            dispatch({
                type: "SET_USER_DATA",
                payload: resp.data,
            });
            //setUserData(resp.data);
            console.log(resp.data);
        });
    }, []);

    return (
        <div className="trans-table">
            {state.userData.length > 0 ? (
                state.userData.map((item, index) => {
                    console.log(item);
                    return index < 5 ? <TransTableItem key={index} user={item} /> : <></>;
                })
            ) : (
                <>No Transactions today</>
            )}
        </div>
    );
};

export default TransTable;
