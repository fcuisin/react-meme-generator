import React, { useState, useEffect } from 'react';
import Thumb from './Thumbnail.js';

function ApiFetch() {

  const [images, setImages] = useState([]);

  const apiEndPoint = "https://api.imgflip.com/get_memes";

  useEffect(() => {

    async function fetchImages() {
      const res = await fetch(apiEndPoint);
      const data = await res.json();
      setImages(data.data.memes);
    };
    fetchImages();

  }, []);

  return (
    <div className="App-right-container">
      {images.length > 0 ? images.map((img) =>
        <Thumb
          key={img.id}
          name={img.name}
          url={img.url}
        />
      ) : <p>Loading...</p>}
    </div>
  )
}

export default ApiFetch
