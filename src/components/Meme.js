import React, {useState, useRef} from 'react';
import {saveSvgAsPng} from 'save-svg-as-png';

function Meme({img, textTop, textBottom}) {

    const ref = useRef();
    const imageRef = useRef();

    const [positionTop, setPositionTop] = useState({x: 100, y :200})

    const downloadMeme = () => {
      saveSvgAsPng(ref.current, `Meme Generator - ${img.name}.png`)
    }

    const getTextPosition = (e) => {

      let rect = imageRef.current.getBoundingClientRect();

      const xOffset = e.clientX - rect.left;
      const yOffset = e.clientY - rect.top;

      setPositionTop({x:xOffset, y:yOffset});
    }

    const handleMouseDown = (e) => {
      console.log("Down")
      document.addEventListener('mousemove', getTextPosition);
      document.addEventListener('mouseup', (e) => {
        console.log('Up')
        document.removeEventListener('mousemove', getTextPosition)
      })
    }

    return(
      <div className="App-meme-window">
        <button onClick={downloadMeme}>Download</button>
        <svg
        ref={ref}
        height="600px"
        viewBox="0 0 579 375"
        preserveAspectRatio="xMidYMid meet"
        >
          <image ref={imageRef} xlinkHref={img.url} x="0" y="0" width="100%" height="100%"></image>
          <text  x={positionTop.x} y={positionTop.y} onMouseDown={event => handleMouseDown(event)}>{textTop}</text>
          <text>{textBottom}</text>
        </svg>

      </div>
    )

}

export default Meme
