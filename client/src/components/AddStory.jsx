import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import axios from 'axios';



function AddStory() {

    const editor = useRef(null);
  const [content, setContent] = useState(null);
  
  
  const config = {
    removeButtons: ["source"],
    readonly: false // all options from https://xdsoft.net/jodit/doc/
  };

  function sendStory(event){
      event.preventDefault()
      console.log(content)
      const story = {story: content}
      axios.post('/api/users/addStory', story).then((res) => {
                
            })
  }

  return (
      <div className="content-area">
          <div className="add-story">
                    <JoditEditor
                ref={editor}
                value={content}
                config={config}
                tabIndex={1} // tabIndex of textarea
                onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={(newContent) => {}}/>
                <button onClick={sendStory}>send story</button>
          </div>
    </div>
  );
};


export default AddStory;