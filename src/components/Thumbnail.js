import React from 'react';

function Thumb({name, url, width, height, selectImg}) {

  const props = {name, url, width, height}

  const handleClick = () => {
    selectImg(props)
  }

  return (
    <div className="List-thumbnail">
      <img src={url} alt={name} onClick={handleClick}/>
    </div>
  )
}

export default Thumb;
