import React from "react";
import TabHeader from "../TabHeader/TabHeader";
import BankCard from "./BankCard/BankCard";
import ChartView from "./ChartView/ChartView";
import "./DashBoardContainer.scss";
import TransChartHeader from "./TransChartHeader/TransChartHeader";
import TransTable from "./TransTable/TransTable";
const DashBoardContainer = () => {
    return (
        <div className="dash-board-page-container">
            <div className="tab-header">
                <TabHeader header="Dashboard" />
            </div>
            <div className="bank-cards-container">
                <BankCard color={{ color1: "#1A7579", color2: "#151515" }} header={"DEBIT CARD"} popUp debitCard/>
                <BankCard color={{ color1: "#1A7579", color2: "#151515" }} header={"Spent"} amount={23250} />
                <BankCard color={{ color1: "#791A1A", color2: "#151515" }} header={"Balance"} amount={125610} />
            </div>
            <div className="trans-chart-container">
                <div className="trans-container">
                    <div className="trans-header-container">
                        <TransChartHeader header={"Transaction History"} isTransaction />
                    </div>
                    <div className="trans-table-container">
                        <TransTable />
                    </div>
                </div>
                <div className="chart-container">
                    <div className="trans-header-container">
                        <TransChartHeader header={"Savings Chart"} />
                    </div>
                    <div className="chart-view-container">
                        <ChartView />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoardContainer;
