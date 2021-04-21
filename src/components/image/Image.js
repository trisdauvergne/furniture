import React from 'react';
import './image.css';

const Image = ({ image }) => {
  const width = `${Math.floor(Math.random() * 80) + 1}` + 'px';
  const height = `${Math.floor(Math.random() * 80) + 1}` + 'px';

  return (
    <>
      <img className="item-img"
          src={image.url}
          alt={image.title}
          style={{
            left: width,
            top: height,
            }}
            />
    </>
  )
}

export default Image;
