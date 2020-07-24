import React from 'react';
import CardImage from './CardImage';

function SearchResultItem({ show, handleSelection, getRandomEpisode, isDisabled }) {

  const regExNoTags = /<[^>]*>/g;

  const setSelection = () => {
    handleSelection(show.id);
  }


  return (
    <div
      className="w-10/12 mx-auto my-6 md:flex max-w-screen-lg"
    >
      <CardImage image={show.image?.medium} />
      <div className="w-full rounded-b-big md:rounded-b-none md:rounded-r-big p-6 flex flex-col justify-between flex-wrap leading-normal card-bg">
        <div className="mb-8">
          <p className="text-sm italic text-show-400 flex items-center">
            {show.network?.name || null}
          </p>
          <div className="text-gray-100 font-bold text-2xl mb-2">
            {show.name}
          </div>
          <p className="text-show-300 text-base">
          {
            show?.summary?.replace(regExNoTags, '')
              || 'No description.'
          }
          </p>
        </div>
        <div className="flex items-center">
          <div>
            <button
              disabled={isDisabled}
              id={show.id}
              onClick={setSelection}
              className="add-button bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full disabled:opacity-50 disabled:cursor-default focus:outline-none focus:shadow-outline"
            >
              <span className="anim-spin font-bold mr-1"></span> Add
            </button>
            <button
              id={show.id}
              onClick={getRandomEpisode}
              className="text-blue-700 font-bold hover:text-white cursor-pointer mt-4 block md:inline md:ml-6 border-none bg-transparent focus:outline-none focus:shadow-outline"
            >
              <span className="anim-spin font-bold mr-1"></span> Get Random Episode Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchResultItem;