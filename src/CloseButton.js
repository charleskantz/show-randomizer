import React from 'react';

function CloseButton({ handleClose }) {
  return (
    <button
    className="absolute w-6 h-6 rounded-full top-1 right-1 border-none font-bold text-show-900 text-lg hover:bg-show-600 flex justify-center items-end"
    onClick={handleClose}
    id="closeBtn"
  >
    ×
  </button>
  )
}

export default CloseButton;