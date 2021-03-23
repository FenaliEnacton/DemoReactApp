import React from 'react';
import './greet.css'
const Greet = () => {
    const currdate = new Date().toLocaleDateString()
    const Container = {
        color: '#765479',
        fontWeight: 'bold'
    }

    return (
        <div className="root">
            <h1 style={Container}>Hello Sonu</h1>
            <p className="heading">List of 5 netflix series </p>
            <ol >
                <li>Dark</li>
                <li>Extra Curricular</li>
                <li>My Holo Love</li>
                <li>Mr.Robot</li>
                <li>Dark</li>
            </ol>
            <p>Current Date is : {currdate}</p>

        </div>
    )

}
export default Greet