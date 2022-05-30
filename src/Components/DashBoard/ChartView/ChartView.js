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
                label: "Saved",
                data: [0, 20, 10, 30, 50, 40],
                strokeColor : "#ff6c23",
                pointColor : "rgba(239, 148, 100, 0)",
                pointStrokeColor : "#ff6c23",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#ff6c23",
                borderColor: ["#EF90D3"],
                borderWidth: 1.5,
                backgroundColor: ['#B516FF66'],
                fill:true,
                //fillColor:["linear-gradient(230deg, #404040 46%, #070707 63%)"],
                //pointBackgroundColor:["rgba(239, 148, 100, 01)"]
            },
            {
                tension: 0.4,
                label: "Expense",
                data: [30, 10, 20, 0, 30,40],
                pointColor : "rgba(239, 148, 100, 0)",
                pointStrokeColor : "#ff6c23",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#ff6c23",
                borderColor: ["#CD77FF"],
                borderWidth: 1.5,
                backgroundColor: ["#FFDDF5"],
                fill:true,
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
