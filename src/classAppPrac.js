import React from 'react'
import Greeting from './greeting'
import Header from './header'


class ClassAppPrac extends React.Component {

    test = {
        'username': "Mihir"
    }
    
    render() {
        return (
            <div>
                <Header test={this.test} />
                <Greeting />
            </div>
        )
    }
}

export default ClassAppPrac