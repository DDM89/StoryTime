import React from 'react';
import axios from 'axios';




export function Test() {

        function apiCall() {
            axios.get('/api/users').then(res => {
                console.log(res.data)
                console.log(res.data[0].comments)
            })
        }


    return (
        <div>
            <button onClick={apiCall}>Test API</button>
            
            
        </div>
    )
}