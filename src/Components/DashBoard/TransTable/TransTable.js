import axios from "axios";
import React, { useEffect, useState } from "react";
import "./TransTable.scss";
import TransTableItem from "./TransTableItem";


const TransTable = () => {
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        axios.get("https://mocki.io/v1/94bece71-5d3c-4a80-8fa4-39595d34b1b4").then((resp) => {
            setUserData(resp.data);
            //console.log(resp.data);
        });
    }, []);

    return (
        <div className="trans-table">
            {userData.map((item, index) => {
                return index < 5 ? <TransTableItem key={index} user={item} /> : <></>;
            })}
        </div>
    );
};

export default TransTable;
