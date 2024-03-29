import React, { useState } from "react";

const TransTableProfile = ({ name, mail }) => {
    const [userName, setUserName] = useState(name);
    const [userEmail, setUserEmail] = useState(mail);
    return (
        <div className="trans-table-profile">
            <div className="profile-image">
                <img src="" alt="" />
            </div>
            <div className="profile-name-mail-container">
                <p className="profile-name">{name}</p>
                <p className="profile-mail">{mail}</p>
            </div>
        </div>
    );
};

export default TransTableProfile;
