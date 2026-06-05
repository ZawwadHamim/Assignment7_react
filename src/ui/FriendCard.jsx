import React from "react";

const FriendCard = ({friend}) => {
    return(
        <div className="text-center shadow py-8 px-6 space-y-2">
            <img src={friend.picture} alt="" className="h-15 mx-auto rounded-full" />
            <h3 className="text-xl font-semibold">{friend.name}</h3>
            <p className="text-sm">{friend.days_since_contact}d ago</p>
            <div className="flex md:flex-col lg:flex-row gap-2 justify-center items-center">
                {friend.tags.map((tag)=>{
                return <button className="bg-green-200 p-2 text-xs rounded-xl ">{tag}</button>
            })}
            </div>
            <button className={`btn ${friend.status==="ok"?'btn-success':'btn-error'}`}>{friend.status}</button>

        </div>
    )
}

export default FriendCard;