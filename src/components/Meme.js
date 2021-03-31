import React from 'react';

function Meme({img, textTop, textBottom}) {

    return(
      <div className="App-meme-window">
        <svg
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
