import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function DataFetcher() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, [])
    // it will run only on first render
    return (
        <>
            {loading ? (<h1>Loading...</h1>) : (
                <ul>
                    {data.map((post) => {
                        return (
                            <li key={post.id}>{post.title}</li>
                        )
                    })}
                </ul>
            )}
        </>
    )
}

export default DataFetcher