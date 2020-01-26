import React from "react";

const Display = (props) => {
    return(
        <div>
            <h1>Display</h1>
            <div className="balls">
                    <h2 className="balls_score">Balls: {props.balls}</h2>
                </div>
                <div className="strikes">
                    <h2 className="strikes_score">Strikes: {props.strikes}</h2>
                </div>
        </div>
    )
}

export default Display;