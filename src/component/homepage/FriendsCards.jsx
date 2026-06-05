import React from "react";
import { useFriends } from "../../context/FriendContext";
import FriendCard from "../../ui/FriendCard";

const FriendsCards = () => {
    const {friends,loading} = useFriends();
    if (loading) return <span className="loading loading-spinner loading-xl"></span>
    return(
        <div className="grid grid-cols-4">
            {friends.map((friend)=>(
                <FriendCard key={friend.id} friend={friend}/>
            ))}
        </div>
    )
}

export default FriendsCards;