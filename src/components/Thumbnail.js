import React from 'react';

function Thumb({name, url}) {
  return (
    <div className="List-thumbnail">
      <img src={url} alt={name}/>
    </div>
  )
}

export default Thumb;
