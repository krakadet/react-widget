import React from 'react';
import ReactDOM from 'react-dom';
import PollWidget from "./component/poll-widget";
import "./style.scss";

const config={
    mainQuestion: "What is your favorite color?",
    answers: ['Red', 'Green', 'Blue']
}

if (process.env.NODE_ENV === 'development') {
    ReactDOM.render(<PollWidget {...config}   />, document.getElementById('app'))
}


export const init = (config: any) => {
    ReactDOM.render(<PollWidget {...config}   />, document.getElementById('app'));
}