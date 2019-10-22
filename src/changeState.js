import React from 'react'

class ChangeState extends React.Component {
    constructor() {
        super()

        this.state = {
            count: 0
        }

        this.handleClickPos = this.handleClickPos.bind(this)
        this.handleClickNeg = this.handleClickNeg.bind(this)
    }

    handleClickPos() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }

    handleClickNeg() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClickPos}>+1</button>
                <button onClick={this.handleClickNeg}>-1</button>
            </div>
        )
    }
}

export default ChangeState