import React from "react";

const Dashboard = (props) => {
    return(
        <div>
            <h1>Dashboard</h1>
            <div className="buttons_div">
                <button onClick={props.ballCount}>Ball</button>
                <button onClick={props.strikeCount}>Strike</button>
                <button onClick={props.foulCount}>Foul</button>
                <button onClick={props.hitCount}>Hit</button>
            </div>
        </div>
    )
}

export default Dashboard;