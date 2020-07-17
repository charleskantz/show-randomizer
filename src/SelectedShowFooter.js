import React from 'react';
import SelectedShowItem from './SelectedShowItem';

function SelectedShowFooter({ selections, randomize, handleClear }) {

  console.log(selections);
  const handleRemove = evt => {
    const rmv = evt.target.id;
    handleClear(show => show.filter(show => show.id !== parseInt(rmv)));
  }

  return (
    <div className="fixed min-h-6 inset-x-0 bottom-0 p-1 bg-show-900 border-t border-show-700 items-center">
      <div className="w-10/12 mx-auto my-4 max-w-screen-lg flex flex-wrap ">
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
        {selections.map(show => {
          const showImg = show?.image?.medium
            || "https://static.tvmaze.com/images/no-img/no-img-portrait-text.png"
          return <SelectedShowItem
            id={show.id}
            key={show.id}
            showImg={showImg}
            handleRemove={handleRemove}
          />
        })}
      </div>
    </div>
  )
}

export default SelectedShowFooter;