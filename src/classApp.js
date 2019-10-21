import React from 'react'

class ClassApp extends React.Component {
    sum(a, b)
    {
        return a + b
    }
    
    name = "Mihir";

    render() {
        const data = new Date();
        console.log(data)
        var sm = this.sum(10, 20)

        return (
            <div>
                <h1>Today Month : {data.getMonth()}</h1>
                <h2>sum : {sm}</h2>
                <h2>Name : {this.name}</h2>
            </div>
        )
    }
}

export default ClassApp