import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Login = (props) => {
    const Container = {
        textAlign: 'center',
        marginTop: 10
    }
    const History = useHistory();
    const [user, setUser] = useState({
        name: "",
        password: ""
    })

    const loginHandler = () => {
        History.push(`/userDetail/${user.name}`)
    }

    const inputHandler = (event) => {
        setUser({
            ...user,
            [event.target.id]: event.target.value
        })
    }
    //console.log("Data:", props);
    return (
        <div style={Container}>
            <h1>Login</h1>
            Enter Username: <input type="text" id="name" onChange={inputHandler}></input><br /><br />
            Enter Password: <input type="text" id="password" onChange={inputHandler}></input> <br /><br />
            <input type="submit" value="submit" id="btnLogin" onClick={loginHandler}></input>

        </div>
    )
}
export default Login