import axios from 'axios';
import React, {useEffect, useState} from 'react'


export function Stories() {
    const [story, setStory] = useState([])

    useEffect(() => {
        axios.get('/api/users').then(res => {
            setStory(res.data)
            console.log(res.data[0].story[0])
            const hope = document.getElementById("story")
            hope.innerHTML = res.data[0].story[0]
        })
    }, [])

    
    


    return (
        
        <div className="content-area">
            <h1>Story Page</h1>
                    {story.map((stor, index)=>
                    <div key={index}>
                        <p>{stor.name}</p>
                        <p>{stor.title}</p>
                        <p>{stor.genre}</p>
                        <div id="story"></div>
                    
                    </div>)}
        </div>
    )
}

