import React from 'react'

class Header extends React.Component {
    render(props) {
        return (
            <div>
                <p>Welcome, {this.props.test.username}</p>
            </div>
        )
    }
}

export default Header