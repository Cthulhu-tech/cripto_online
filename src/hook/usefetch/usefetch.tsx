import { UseFetch, ErrorData } from './type'
import { useState } from "react"

export const useFetch = <T, U = any>(method: string = 'POST'): UseFetch<T, U> => {

    const [load, setLoad] = useState(true)
    const [data, setData] = useState<T>()
    const [error, setError] = useState<ErrorData>()

    const fetchData = (url: string, body?: U) => {

        const headers: HeadersInit = {
            'Content-type': 'application/json',
            'Accept': 'application/json',
        }

        const options: RequestInit = {
            method,
            mode: 'cors',
            redirect: 'follow',
            credentials: "include",
            headers
        }

        if(body)options.body = JSON.stringify(body);
        
        fetch(url, options)
        .then(response => response.json())
        .then((json) => {
            setLoad(false)
            setData(json)
        })
        .catch(err => {
            setLoad(false)
            setError(err.message)
        })

    }
    
    return [load, data, error, fetchData]
}