import React from 'react'
import StatePrac from './stateClassPrac'

class StatePracTwo extends React.Component {
    constructor() {
        super()
        this.isLoggedIn = true
    }

    render() {
        this.res = ""
        if (this.isLoggedIn){
            this.res = "in"
        } else {
            this.res = "out"
        }

        return (
            <div>
                <h1>You're currently logged-{this.res}</h1>
            </div>
        )
    }
}

export default StatePracTwo