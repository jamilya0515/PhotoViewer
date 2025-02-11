import React from "react"; 
import './PhotoViewer.css';

export function PhotoViewer(props) {
    if (!props.src) {
        return <div> No Images </div>
    }
    return (                
        <div>             
            <img src={props.src}></img>
        </div>
    );
}

   