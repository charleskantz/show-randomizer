import React from 'react';

function SelectedShowFooter({ selections, randomize, handleClear }) {

  return (
    <div className="fixed min-h-6 inset-x-0 bottom-0 p-1 bg-show-900 border-t border-show-700 items-center">
      <div className="w-10/12 mx-auto my-6 max-w-screen-lg flex flex-wrap ">
        <div className="randomButtons">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full"
            onClick={randomize}>
              Randomize
          </button>
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
            className="h-12 w-12 object-cover m-4 rounded"
          />
        ))}
      </div>
    </div>
  )
}

export default SelectedShowFooter;