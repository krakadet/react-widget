import React from 'react';
import ReactDOM from 'react-dom';
import PollWidget from "./component/poll-widget";
import "./style.scss";

const data = {
    mainQuestion: "What is your favorite color?",
    answers: ['Red', 'Green', 'Blue']

}

// export const init = (data: JSX.IntrinsicAttributes & PollWidget) => {
//     ReactDOM.render(<PollWidget {...data}   /> , document.getElementById('app'));
// }

ReactDOM.render(
    <div>
        <PollWidget {...data}   />
    </div>,
    document.getElementById('app')
);