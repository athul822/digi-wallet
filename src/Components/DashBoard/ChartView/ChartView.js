import React from "react";
import "./ChartView.scss";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
const ChartView = () => {
    const chartData = {
        labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"],
        datasets: [
            {
                tension: 0.4,
                label: "Savings",
                data: [0, 20, 10, 30, 50, 40],
                strokeColor : "#ff6c23",
                pointColor : "#fff",
                pointStrokeColor : "#ff6c23",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#ff6c23",
                borderColor: ["#EF90D3"],
                borderWidth: 1.5,
                backgroundColor: ["rgba(239, 144, 211, 01)"],
                fillColor:["rgba(239, 144, 211, 01)"],
                //pointBackgroundColor:["rgba(239, 148, 100, 01)"]
            },
            {
                tension: 0.4,
                label: "Expense",
                data: [30, 10, 20, 20, 30,40],
                borderColor: ["#CD77FF"],
                borderWidth: 1.5,
                backgroundColor: ["rgba(239, 144, 211, 0.5)"],
            },
        ],
    };
    return (
        <div className="chart-view">
            <Line data={chartData} />
        </div>
    );
};

export default ChartView;
