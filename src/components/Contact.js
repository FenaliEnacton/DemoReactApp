import React from 'react'

const Contact = (props) => {
    const Container = {
        textAlign: 'center',

    }

    console.log("Data:", props);

    return (
        <div style={Container}>
            <h1>This is a {props.name} page</h1>
        </div>
    )
}
export default Contact;