import React from 'react'

class StateClass extends React.Component {
    constructor() {
        super()
        this.state = {
            answer: "Yes"
        }
    }

    render() {
        return (
            <div>
                <h1>Is state important to us? {this.state.answer}</h1>
            </div>
        )
    }
}

export default StateClass