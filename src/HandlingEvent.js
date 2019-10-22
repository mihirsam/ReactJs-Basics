import React from 'react'


function handleMouseOver() {
    console.log("Mouse is over me!")
}

class HandlingEvent extends React.Component {
    render() {
        return (
            <div>
                <img src="https://picsum.photos/200/300"/>
                <br />
                <br />
                <button onClick={() => {console.log("Hello World")}}>Click me</button>
                <br />
                <button onMouseOver={handleMouseOver}>Over Me</button>
            </div>
        )
    }
}

export default HandlingEvent