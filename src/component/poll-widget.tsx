import * as React from 'react';
import {useEffect, useState} from 'react';
import {getLocalStorage, setLocalStorage} from "../utils";

interface PollWidget {
    mainQuestion: string;
    answers: string[];
}

const PollWidget = ({mainQuestion, answers}: PollWidget): JSX.Element => {
    const [votes, setVotes] = useState(Array(answers.length).fill(0));
    const totalVotes = votes.reduce((acc: number, curr: number) => acc + curr);

    useEffect(() => {
        const localStorageVotes = getLocalStorage(mainQuestion);

        if (localStorageVotes && localStorageVotes.reduce((acc: number, curr: number) => acc + curr) !== 0) {
            setVotes(localStorageVotes)
        } else {
            setLocalStorage(mainQuestion, votes)
        }
    }, [mainQuestion])


    useEffect(() => {
        setLocalStorage(mainQuestion, votes)
    }, [totalVotes])

    const getPercentage = (answerIndex: number): number => {
        return votes?.[answerIndex] ? Math.round((votes[answerIndex] / totalVotes) * 100) : 0;
    };


    const handleOnClick = (index: number) => () =>
        setVotes(prev => {
            const el = prev[index] += 1;
            return [...prev.slice(0, index), el, ...prev.slice(index + 1)];
        });

    return (
        <div className="container">
            <h1>{mainQuestion}</h1>

            {votes.map((answer: string, index: number): JSX.Element =>
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