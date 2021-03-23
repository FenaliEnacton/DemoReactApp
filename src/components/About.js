import React from 'react'

const About = (props) => {
    const Container = {
        textAlign: 'center',
    }

    return (
        <div style={Container}>
            <h1>This is a {props.name} page</h1>
        </div>
    )
}
export default About;
