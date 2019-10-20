import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function MyApp()
{
    const firstname = "Mihir";
    const lastname = "Shrivastava";

    return (<ol>
        <li>First Name : {firstname}</li>
        <li>Last Name : {lastname}</li>
        <li>Full Name : {firstname + " " + lastname}</li>
        <li>Full Name : {'${firstname} ${lastname}'}</li>
    </ol>)
}

ReactDOM.render(<MyApp />, document.getElementById("order"));
ReactDOM.render(<div><ul><li>Eyes</li><li>Hair</li><li>Smile</li></ul></div>, document.getElementById("list"));
ReactDOM.render(<App />, document.getElementById('todo'));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
