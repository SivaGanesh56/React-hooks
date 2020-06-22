import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

const initialState = {
    loading: true,
    post: {},
    error: ''
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SUCCESS':
            return {
                loading: false,
                post: action.payload,
                error: ''
            }
        case 'FAILURE':
            return {
                loading: false,
                post: {},
                error: action.payload
            }
    }
}

function DataFetchingTwo() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
            .then(res => {
                dispatch({ type: 'SUCCESS', payload: res.data })
            })
            .catch(error => {
                dispatch({ type: 'FAILURE', payload: "Something went wrong" })
            })
    }, [])

    return (
        <div>
            {state.loading ? "loading" : state.post.title}
            {state.error ? state.error : null}
        </div>
    )
}

export default DataFetchingTwo;
