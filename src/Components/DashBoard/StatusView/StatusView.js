import React, { useState } from "react";
import styled from "@emotion/styled";
import './StatusView.scss'

const StatusView = ({ progress }) => {
    const [status, setStatus] = useState(progress);

    const handleStyle = (stat) => {
        switch (stat) {
            case "Sent":
                return `color: #FFFFFF; background-color: #09B66D `;
                break;
            case "Received":
                return `color: #FF8A48; border: solid 1px #FF8A48`;
                break;
            case "Pending":
                return `color: #0081FF; border: solid 1px #0081FF`;
                break;
            default:
                break;
        }
    };

    const Span = styled.span`
        font-weight: 700;
        font-size: 12.13px;
        line-height: 14.93px;
        padding: 4px 14px;
        border-radius: 12px;
        ${handleStyle(progress)}
    `;

    return (
        <div className="status-view-cont">
            <Span className="status-text">{status}</Span>
        </div>
    );
};

export default StatusView;
