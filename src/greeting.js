import React from 'react'

class Greeting extends React.Component {
    render() {
        const date = new Date()
        const hours = date.getHours()
        let timeOfDay

        if (hours >= 0 && hours < 12) {
            timeOfDay = "Good Morning"
        } else if (hours >= 12 && hours < 15) {
            timeOfDay = "Good Evening"
        } else if (hours > 15) {
            timeOfDay = "Good Night"
        } else {
            timeOfDay = "Error getting time"
        }
        return (
            <div>
                <h3>{timeOfDay}</h3>
            </div>
        )
    }
}

export default Greeting