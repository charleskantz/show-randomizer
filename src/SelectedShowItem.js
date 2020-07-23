import React from 'react';

function SelectedShowItem({ id, showImg, handleRemove }) {
  return (
    <div
      id={id}
      className="selected-show-img relative inline-block text-show-300 cursor-pointer text-lg font-bold"
      onClick={() => handleRemove(id)}
    >
      <img
        src={showImg}
        alt="show cover art"
        className="h-20 w-auto object-cover m-2 rounded border-2 border-show-400"
      />
    </div>
  )
}

export default SelectedShowItem;