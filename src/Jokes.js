import React from 'react';

function Jokes(props) {
	// ternary operator
	return (
		<jokes>
			<div>
				<h3 style={{ display: props.question ? 'block' : 'none' }}>Question : {props.question}</h3>
				<h4 style={{ color: !props.question && '#FF0000' }}>punch Line : {props.punch}</h4>
			</div>
		</jokes>
	);
	/*
    var ques = props.jokes.hasOwnProperty("question")
    

    if (ques){
        return (
            <jokes>
                <div>
                    <h3 style={{display: props.jokes.question ? "block": "none"}}>Question : {props.jokes.question}</h3>
                    <h4>punch Line : {props.jokes.punch}</h4>
                </div>
            </jokes>
        )
    } else {
        return (
            <jokes>
                <div>
                    <h4>punch Line : {props.jokes.punch}</h4>
                </div>
            </jokes>
        )
    }
    */
}

export default Jokes;
