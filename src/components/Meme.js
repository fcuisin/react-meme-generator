import React, {useState, useRef} from 'react';
import {saveSvgAsPng} from 'save-svg-as-png';

function Meme({img, textTop, textBottom}) {

    const ref = useRef();
    const imageRef = useRef();

    const [positionTop, setPositionTop] = useState({x: 250, y :50})
    const [positionBottom, setPositionBottom] = useState({x: 250, y :350})

    const downloadMeme = () => {
      saveSvgAsPng(ref.current, `Meme Generator - ${img.name}.png`)
    }

    const textStyles = {
      cursor: 'pointer',
      fontSize: '36px',
      textTransform: 'uppercase',
      fontFamily: 'sans-serif',
      fontWeight: 'bold'
    }

    const getTextPositionTop = (e, type) => {

      let rect = imageRef.current.getBoundingClientRect();

      const xOffset = e.clientX - rect.left - 70;
      const yOffset = e.clientY - rect.top;

      setPositionTop({x:xOffset, y:yOffset});

    }

    const getTextPositionBottom = (e, type) => {

      let rect = imageRef.current.getBoundingClientRect();

      const xOffset = e.clientX - rect.left - 60;
      const yOffset = e.clientY - rect.top;

      setPositionBottom({x:xOffset, y:yOffset});

    }

    const handleMouseDown = (e, type) => {

      if (type === "top") {
        document.addEventListener('mousemove', getTextPositionTop);
        document.addEventListener('mouseup', (e) => {
          document.removeEventListener('mousemove', getTextPositionTop)
        })
      }

      if (type === "bottom") {
        document.addEventListener('mousemove', getTextPositionBottom);
        document.addEventListener('mouseup', (e) => {
          document.removeEventListener('mousemove', getTextPositionBottom)
        })
      }
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
          <text x={positionTop.x} y={positionTop.y} onMouseDown={event => handleMouseDown(event, "top")}  style={{...textStyles}}>{textTop}</text>
          <text x={positionBottom.x} y={positionBottom.y} onMouseDown={event => handleMouseDown(event, "bottom")}  style={{...textStyles}}>{textBottom}</text>
        </svg>

      </div>
    )

}

export default Meme
