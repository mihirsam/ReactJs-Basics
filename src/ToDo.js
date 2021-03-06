import React from 'react'
import texts from './ToDoData.js'

function ToDo() {
    const date = new Date()
    const hour = date.getHours()
    let timeOfDay

    const fstyle = {
        color : "#ffff00",
        fontSize : "20px",
        textAlign  : "center"
    }

    const styles = {
        color : "#ffff00",
        fontSize : "20px",
        textAlign  : "center"
    }
    if (hour < 12)
    {
        timeOfDay = "Good Morning"
        fstyle.color = "#79ccdb"
    }
    else if (hour > 12 && hour < 15)
    {
        timeOfDay = "Good Afternoon"
        fstyle.color = "#FFD700"
    } else if (hour > 15)
    {
        timeOfDay = "Good Night"
        fstyle.color = "#0000A0"
    }

    return (
        <div style = {{backgroundColor : "#FF0000"}}>
            <header>
                <h1>To-Do List : </h1>
            </header>
            <body style = {styles}>
                <ol>
                    {texts}
                </ol>
            </body>
            <footer style = {fstyle}>
                <h3>This is footer for todo list. {timeOfDay}</h3>
            </footer>
        </div>
    )
}
export default ToDo