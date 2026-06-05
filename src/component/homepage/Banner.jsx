import React from "react";
import { FaPlus } from "react-icons/fa";

const Banner = () => {
    return(
        <div className="text-center container mx-auto my-20 space-y-10">
            <h2 className="font-bold text-2xl">Friends to keep close in your life</h2>
            <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
            <span> relationships that matter most.</span></p>
            <button className="btn bg-green-700 text-white">
                <FaPlus/> Add A friend
            </button>
            <div className="container mx-auto grid grid-cols-4 gap-5
            ">
                <div className="flex flex-col justify-center items-center px-5 py-10 shadow-lg">
                    <h2>10</h2>
                    <p>Total friends</p>
                </div>
                <div className="flex flex-col justify-center items-center px-5 py-10 shadow-lg">
                    <h2>5</h2>
                    <p>On Track</p>
                </div>
                <div className="flex flex-col justify-center items-center px-5 py-10 shadow-lg">
                    <h2>5</h2>
                    <p>needs Attention</p>
                </div>
                <div className="flex flex-col justify-center items-center px-5 py-10 shadow-lg">
                    <h2>10</h2>
                    <p>Interactions This month</p>
                </div>
            </div>
        </div>
    )
}

export default Banner;