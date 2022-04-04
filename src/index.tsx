import React from 'react';
import ReactDOM from 'react-dom';
import PollWidget from "./component/poll-widget";
import "./style.scss";

// Find all widget divs
const widgetDivs = document.querySelectorAll('.poll-widget');

export const init = (config: any) => {
    widgetDivs.forEach((div, index) => {
        ReactDOM.render(
            <React.StrictMode>
                <PollWidget {...config[index]}   />
            </React.StrictMode>,
            div
        );
    });
}
