import React from 'react';

function Thumb({name, url}) {
  return (
    <div className="List-thumbnail">
      <p>{name}</p>
      <img src={url} alt={name}/>
    </div>
  )
}

export default Thumb;
