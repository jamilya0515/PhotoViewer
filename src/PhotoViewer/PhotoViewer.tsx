import React from "react"; 
import './PhotoViewer.css';

export function PhotoViewer(props) {
    if (!props.src) {
        return <div> No Images </div>
    }
    return (                
        <div className="picture-container">               
            <img src={props.src}></img>
        </div>
    );
}


// function HelloWorld(props) {
//     if (!props.name) {
//     return <div>Hello World!</div>
//     }
//     return <div>Hello {props.name}</div>
//    }

// function App() {
//     return (
//     <main>
//     <h1>Welcome to my App</h1>
//     <HelloWorld name="Mike"/>
//     </main>
//     );
//    }
   