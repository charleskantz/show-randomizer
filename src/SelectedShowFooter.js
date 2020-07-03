import React from 'react';

function SelectedShowFooter({ selections, randomize, handleClear }) {

  return (
    <div className="selectionCard">
        <div className="randomButtons">
          <button className="startRandom" onClick={randomize}>Randomize</button>
          {selections.length > 0
            ? <button className="clearRandom" onClick={() => handleClear([])}>Clear</button>
            : null
          }
        </div>
        {selections.map(show => (
          <img
            src={
              show.image?.medium ||
              "https://static.tvmaze.com/images/no-img/no-img-portrait-text.png"
            }
            height="50px"
            width="auto"
            alt="show-img"
            className="selectionShow"
          />
        ))}
      </div>
  )
}

export default SelectedShowFooter;