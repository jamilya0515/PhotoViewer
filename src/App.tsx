import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PhotoViewer } from './PhotoViewer/PhotoViewer'
import { ImageSelector } from './ImageSelector/ImageSelector'


function App() {
  // const [count, setCount] = useState(0)
  // const imgUrls = ["https://picsum.photos/id/600/600/400.jpg", "https://picsum.photos/600/400?random=1","https://picsum.photos/600/400?random=2", "https://picsum.photos/600/400?random=3","https://picsum.photos/600/400?random=4" ]
  // const imageList = imgUrls.map(url => `<li><PhotoViewer src=${url}/></li>`);
  // const items = []
  // for (let i=0; i<imageList.length; i++) {
  //   items.push(<li key={i}>{imageList[i]}</li>);
  // }

  return (
  
    <>
    <div>
          <h1>React Photo Viewer</h1>
          <ul className="pictures-container">
            {/* <ul>{items}</ul>; */}
            
            <li><PhotoViewer src={"https://picsum.photos/id/600/600/400.jpg"}/></li>
            <li><PhotoViewer src={"https://picsum.photos/600/400?random=1"}/></li>
            <li><PhotoViewer src={"https://picsum.photos/600/400?random=2"}/></li>
            <li><PhotoViewer src={"https://picsum.photos/600/400?random=3"}/></li>
            <li><PhotoViewer src={"https://picsum.photos/600/400?random=4"}/></li> 
          </ul>

          <div>
            <h2>Select your photo</h2>
           <ImageSelector/>
          </div>

    </div>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
