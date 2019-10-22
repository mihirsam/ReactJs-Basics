import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ClassApp from './classApp'
import ClassAppPrac from './classAppPrac'

import * as serviceWorker from './serviceWorker';
import StateClass from './stateClass';
import StatePrac from './stateClassPrac';
import StatePracTwo from './statePracTwo';
import HandlingEvent from './HandlingEvent';
import ChangeState from './changeState';

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
ReactDOM.render(<ClassApp />, document.getElementById("class"));
ReactDOM.render(<ClassAppPrac />, document.getElementById("classPrac"))
ReactDOM.render(<StateClass />, document.getElementById("state"))
ReactDOM.render(<StatePrac />, document.getElementById("stateprac"))
ReactDOM.render(<StatePracTwo />, document.getElementById("statepractwo"))
ReactDOM.render(<HandlingEvent />, document.getElementById("event"))
ReactDOM.render(<ChangeState />, document.getElementById("changeState"))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
