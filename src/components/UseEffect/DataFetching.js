import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetching() {
    const [post, setPost] = useState([]);
    const [id, setId] = useState(1);
    const [buttonId, setButtonId] = useState(1);

    const buttonHandler = (id) => {
        setButtonId(id);
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonId}`)
            .then(res => {
                console.log(res);
                setPost(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [buttonId])

    return (
        <div>
            <input type="number" onChange={e => setId(e.target.value)} />
            <button onClick={() => buttonHandler(id)}>GET POST</button>
            <h2>{post.title}</h2>
        </div>
    )
}

export default DataFetching;
