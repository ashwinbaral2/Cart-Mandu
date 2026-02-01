'use client'
import axios from 'axios';
import { useEffect, useState } from 'react'
import CreateUser from './create-users'
import UsersTable from './users-table';

const page = () => {
    const [users, setUsers] = useState([]);

    const fetchData = async () => {
        try {
            const { data } = await axios.get("https://fakestoreapi.com/users");
            setUsers(data)
        } catch (error) {
            console.error("Error fetching products:", error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div>

            <CreateUser fetchData={fetchData} />

            <UsersTable users={users} fetchData={fetchData} />
        </div>
    )
}

export default page