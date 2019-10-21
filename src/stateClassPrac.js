import React from 'react'
import StateClass from './stateClass'

class StatePrac extends React.Component {
    constructor() {
        super()
        this.person = {
            name: "Mihir",
            age: 21
        }
    }

    render() {
        return (
            <div>
                <h1>Helllo, My name is {this.person.name}</h1>
                <h2>I am {this.person.age} years old!</h2>
            </div>
        )
    }
}

export default StatePrac