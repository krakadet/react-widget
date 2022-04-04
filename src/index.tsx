import React from 'react';
import ReactDOM from 'react-dom';
import PollWidget from "./component/poll-widget";
import "./style.scss";

const config=[
    {
    mainQuestion: "What is your favorite color?",
    answers: ['Red', 'Green', 'Blue'],
},
{
    mainQuestion: "What is your favorite car?",
    answers: ['audi', 'kia', 'bmw'],
}
]
//
// if (process.env.NODE_ENV === 'development') {
//     ReactDOM.render(<PollWidget {...config}   />, document.getElementById(config.elementId))
// }
//
//
// export const init = (config: any) => {
//     ReactDOM.render(<PollWidget {...config}   />, document.getElementById(config.elementId));
// }

// Find all widget divs
const widgetDivs = document.querySelectorAll('.poll-widget');

console.log(widgetDivs)
// Inject our React App into each class

export const init = (config: any) => {
    // ReactDOM.render(<PollWidget {...config}   />, document.getElementById(config.elementId));

    widgetDivs.forEach((div, index) => {
        ReactDOM.render(
            <React.StrictMode>
                <PollWidget {...config[index]}   />
            </React.StrictMode>,
            div
        );
    });
}
