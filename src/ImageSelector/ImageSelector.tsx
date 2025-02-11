import React, { useState } from "react"
import { PhotoViewer } from "../PhotoViewer/PhotoViewer"
import './ImageSelector.css'
import { imageUrls } from "./GetImageFunction"


export function ImageSelector() {

    const imageList = imageUrls.map(url => <button key={url} onClick={() => changeImage(url)}><PhotoViewer src={url}/></button>);

    const [selectImage, setSelectImage] = useState('https://picsum.photos/200/300?random=2');

    const changeImage = (url) => {
        setSelectImage(url);
        };
    return (
        <div>
            {selectImage && (
            <div className="selected-image">
                <img src={selectImage} alt="Selected" />
            </div>
             )}

        <h2>Select your photo</h2>
            <div>
                <ul className='pictures-container'>
                    {imageList}
                </ul>
            </div>
      </div>
    )          
}
