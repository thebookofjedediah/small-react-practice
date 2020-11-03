import React, {useState} from 'react';
import './EightBall.css';

// find random answer
function getRandom(arr) {
    const randomIdx = Math.floor(Math.random() * arr.length)
    return arr[randomIdx]
};

const EightBall = (props) => {
    // set the state 
    const [ answer, setAnswer ] = useState("Ask a Question");
    const [ color, setColor ] = useState("grey")

    // on click set the new state
    function handleClick() {
        const {msg, color} = getRandom(props.answers);
        setAnswer(msg);
        setColor(color);
    }

    return (
        <>
            <div className="EightBall" style={{backgroundColor: color}} onClick={handleClick} >
                <p className="EightBall-message">
                    {answer}
                </p>
            </div>
        </>
    )
}

EightBall.defaultProps = {
    answers: [
        { msg: "It is certain.", color: "green" },
        { msg: "It is decidedly so.", color: "green" },
        { msg: "Without a doubt.", color: "green" },
        { msg: "Yes - definitely.", color: "green" },
        { msg: "You may rely on it.", color: "green" },
        { msg: "As I see it, yes.", color: "green" },
        { msg: "Most likely.", color: "green" },
        { msg: "Outlook good.", color: "green" },
        { msg: "Yes.", color: "green" },
        { msg: "Signs point to yes.", color: "goldenrod" },
        { msg: "Reply hazy, try again.", color: "goldenrod" },
        { msg: "Ask again later.", color: "goldenrod" },
        { msg: "Better not tell you now.", color: "goldenrod" },
        { msg: "Cannot predict now.", color: "goldenrod" },
        { msg: "Concentrate and ask again.", color: "goldenrod" },
        { msg: "Don't count on it.", color: "red" },
        { msg: "My reply is no.", color: "red" },
        { msg: "My sources say no.", color: "red" },
        { msg: "Outlook not so good.", color: "red" },
        { msg: "Very doubtful.", color: "red" },
    ]
}

export default EightBall;