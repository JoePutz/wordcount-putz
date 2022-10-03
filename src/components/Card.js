import React from "react";

function Card({ user, number }) {

    return (
        <div>
            <span>{user}: {number}</span>
        </div>
    )
}

export default Card