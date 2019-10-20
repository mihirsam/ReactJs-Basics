import React from 'react'

function ContactCard(props){
    return (
        <div className="contactCard">
            <img src={props.contact.url}/>
            <h3>name : {props.contact.name}</h3>
            <h4>Phone Number : {props.contact.phone}</h4>
        </div>
    )
}

export default ContactCard