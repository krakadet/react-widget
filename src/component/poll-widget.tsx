import * as React from 'react';
import {useEffect, useState} from 'react';
import {getLocalStorage, setLocalStorage} from "../utils";

interface PollWidget {
    mainQuestion: string;
    answers: string[];
}

const PollWidget = ({mainQuestion, answers}: PollWidget): JSX.Element => {
    const [pollWidgetState, setPollWidgetState] = useState(Array(answers.length).fill(0));
    const totalVotes = pollWidgetState.reduce((acc: number, curr: number) => acc + curr);

    useEffect(() => {
        const currentVotes = getLocalStorage(mainQuestion);
        const totalVotes = currentVotes.reduce((acc: number, curr: number) => acc + curr);
        if (totalVotes !== 0) {
            setPollWidgetState(currentVotes)
        } else {
            setLocalStorage(mainQuestion, pollWidgetState)
        }
    }, [mainQuestion])


    useEffect(() => {
        setLocalStorage(mainQuestion, pollWidgetState)
    }, [totalVotes])

    const getPercentage = (answerIndex: number): number => {
        return pollWidgetState?.[answerIndex] ? Math.round((pollWidgetState[answerIndex] / totalVotes) * 100) : 0;
    };


    const handleOnClick = (index: number) => () =>
        setPollWidgetState(prev => {
            const el = prev[index] += 1;
            return [...prev.slice(0, index), el, ...prev.slice(index + 1)];
        });

    return (
        <div className="container">
            <h1>{mainQuestion}</h1>

            {pollWidgetState.map((answer: string, index: number): JSX.Element =>
                (
                    <div className="progressbar-container" key={index} onClick={handleOnClick(index)}>
                        <div className='progressbar-complete' key={index}
                             style={{width: `${getPercentage(index)}%`}}>
                            <div className='progressbar-liquid'>
                            </div>
                        </div>
                        <span className="progress">{answers[index]} {answer}%</span>
                    </div>
                ))}
        </div>
    );
};

export default PollWidget;