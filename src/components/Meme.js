import React, {useRef} from 'react';
import {saveSvgAsPng} from 'save-svg-as-png';

function Meme({img, textTop, textBottom}) {

    const ref = useRef();

    const downloadMeme = () => {
      saveSvgAsPng(ref.current, `Meme Generator - ${img.name}.png`)
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
          <image xlinkHref={img.url} x="0" y="0" width="100%" height="100%"></image>
          <text>{textTop}</text>
          <text>{textBottom}</text>
        </svg>

      </div>
    )

}

export default Meme
