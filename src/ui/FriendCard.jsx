import React from "react";

const FriendCard = ({friend}) => {
    return(
        <div>
            <img src={friend.picture} alt="" />
        </div>
    )
}

export default FriendCard;