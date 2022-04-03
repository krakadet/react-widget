import React from 'react';
import ReactDOM from 'react-dom';
import PollWidget from "./component/poll-widget";
import "./style.scss";

export const init = (config: any) => {
    ReactDOM.render(<PollWidget {...config}   />, document.getElementById('app'));
}