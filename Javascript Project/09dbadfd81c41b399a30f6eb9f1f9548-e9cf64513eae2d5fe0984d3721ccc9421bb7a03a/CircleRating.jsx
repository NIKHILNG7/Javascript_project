import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import "./style.scss";

const CircleRating = ({ rating }) => {
    return (
        <div className="circleRating">
            <CircularProgressbar
                value={rating}
                maxValue={10}
                text={rating}
                styles={buildStyles({
                    pathColor:
                        rating < 5 ? "red" : rating < 7 ? "orange" : "green",
                })}
            />
        </div>
    );
};

export default CircleRating;


// CSS
.circleRating {
    background-color: var(--black);
    border-radius: 50%;
    padding: 2px;
    .CircularProgressbar-text {
        font-size: 34px;
        font-weight: 700;
        fill: var(--black);
    }
    .CircularProgressbar-trail {
        stroke: transparent;
    }
}
