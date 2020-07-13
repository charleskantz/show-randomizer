import React from 'react';

function CardImage(image) {
  console.log("IMAGE", image, "img.img?", image.image);
  if (image.image) {
    return (
      <div
        className="h-64 md:h-auto md:w-60 flex-none bg-cover bg-center rounded-t-big md:rounded-t-none md:rounded-l-big text-center overflow-hidden"
        style={{ backgroundImage: `url('${image.image}')` }}
      >
      </div>
    )
  } else
  return (
    <div
      className="img-default h-64 md:h-auto md:w-60 flex-none bg-cover bg-center rounded-t-big md:rounded-t-none md:rounded-l-big text-center overflow-hidden"
    >
    </div>
  )
}

export default CardImage;