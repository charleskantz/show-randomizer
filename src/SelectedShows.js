import React from 'react';

function SelectedShows({ selections }) {
  return (
    <div className="selectionCard">
        <button className="startRandom">Randomize</button>
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

export default SelectedShows;