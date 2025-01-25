import React, { useEffect, useState } from 'react'

const Profile = () => {
    const [user, setUser] = useState()

    useEffect(() => {
        const getUser = async () => {
            const response = await fetch('https://fb-auth-mern-app-api.vercel.app/api/auth/get-user', {
                method: 'get',
                credentials: 'include',
            })
            const data = await response.json()
            if (data.success) {
                setUser(data.user)
            }
        }
        getUser()
    }, [])

    return (
        <div>
            <h1>User Data</h1>
            <p>Name: {user?.name}</p>
            <p>Email: {user?.email}</p>
            <p>Fb Id: {user?.fbId}</p>
        </div>

    )
}

export default Profile
