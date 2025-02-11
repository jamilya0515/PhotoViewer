import React, { useState } from "react"
import { PhotoViewer } from "../PhotoViewer/PhotoViewer"
import './ImageSelector.css'


export function ImageSelector() {
    const brokenImages = [
        1, 24, 32, 36, 44, 47
      ];
      function getImageUrls() {
          const urls = [];
          for (let i = 0; i < 50; i++) {
              if (!brokenImages.includes(i)) {
                  const imageNumberString = i.toString().padStart(2, '0');
                  urls.push(`https://picsum.photos/id/6${imageNumberString}/1600/900.jpg`)
              }
          }
          return urls;
      }
    
      const imageUrls = getImageUrls();

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
