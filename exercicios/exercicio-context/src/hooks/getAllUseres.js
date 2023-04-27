import axios from "axios";
import { BASE_URL } from "../constants/BASE_URL";
import { useEffect, useState } from "react";

export const useGetAllUseres = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const getAllUsers = async () => {

        try {
            const resulte = await axios.get(BASE_URL, { headers: { Authorization: "wesllei-brito-ozemela" } })
            const response = resulte.data
            setUsers(response)
        } catch (error) {
            console.log(error)
            setError(true)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getAllUsers()
    }, [])

    return {
        users,
        loading,
        error
    }
}