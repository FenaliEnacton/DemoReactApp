import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetail = () => {
    const params = useParams();
    return (
        <div>
            <h1>UserDetails</h1>
            {params.uname !== undefined && params.uname?.trim() !== "" ? <h1>Hello {params.uname}</h1> : null}
        </div>
    )
}

export default UserDetail
