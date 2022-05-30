import React, { useState } from "react";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import "./CostAndTrend.scss";
import styled from "@emotion/styled";

const CostAndTrend = ({ costAmount, trend }) => {
    const [cost, setCost] = useState(costAmount);
    const Span = styled.span`
        color: ${trend ? "#09B66D" : "#FF3D57"};
        margin-right: 6px;
    `;
    return (
        <div className="cost-trend-container">
            <Span>
                {trend ? (
                    <span className="trend">
                        <TrendingUpIcon fontSize="small" />
                    </span>
                ) : (
                    <span className="trend">
                        <TrendingDownIcon />
                    </span>
                )}
            </Span>
            <p className="cost-text">${costAmount}</p>
        </div>
    );
};

export default CostAndTrend;
