import axios from 'axios';
import React, {useEffect} from 'react'


export function Stories() {
    
    const storyDiv = document.getElementsByClassName("render_stories")

    useEffect(() => {
        axios.get('/api/users').then(res => {
            
            
            
            for (const info of res.data) {
                const author = document.createElement("h1")
                author.innerText = info.author
                storyDiv[0].append(author)
                const title = document.createElement("h3")
                title.innerText = info.title
                storyDiv[0].append(title)
                const story = document.createElement("div")
                story.innerHTML = info.story
                storyDiv[0].append(story)
                
            }
            
        })
    }, )

    


    
    


    return (
        
        <div className="content-area">
            <h1>Story Page</h1>
            <div className="render_stories">

            </div>     
        </div>
    )
}

