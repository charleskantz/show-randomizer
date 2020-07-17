import React from 'react';

function SelectedShowItem({ id, showImg, handleRemove }) {
  return (
    <img
      id={id}
      src={showImg}
      alt="show-img"
      className="h-20 w-20 object-cover m-4 rounded border-2 border-show-400"
      onClick={evt => handleRemove(evt)}
    />
  )
}

export default SelectedShowItem;