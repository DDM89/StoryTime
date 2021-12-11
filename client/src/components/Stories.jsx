import axios from 'axios';
import React, {useEffect, useState} from 'react'


export function Stories() {
    const [story, setStory] = useState([])

    useEffect(() => {
        axios.get('/api/users').then(res => {
            setStory(res.data)
            console.log(res.data)
            
        })
    }, [])

    
    


    return (
        
        <div className="content-area">
            <h1>Story Page</h1>
                    {story.map((stor, index)=>
                    <div key={index}>
                        <p>{stor.name}</p>
                    {stor.stories.map((s, index)=> {
                       return <div key={index}>
                            <p>{s.title}</p>
                            <p>{s.body}</p>
                        </div>
                    })}    
                    </div>)}
        </div>
    )
}

