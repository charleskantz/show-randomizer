import React from 'react';
import CardImage from './CardImage';

function SearchResultItem({ show, handleSelection, getRandomEpisode, selected }) {

  const regExNoTags = /<[^>]*>/g;

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
          {show?.summary?.replace(regExNoTags, '')}
          </p>
        </div>
        <div className="flex items-center">
          <div>
            <button
              disabled={selected}
              id={show.id}
              onClick={handleSelection}
              className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full disabled:opacity-50 disabled:cursor-default"
            >
              <strong>+</strong> Add
            </button>
            <span
              id={show.id}
              onClick={getRandomEpisode}
              className="text-blue-700 font-semibold hover:text-white cursor-pointer mt-4 block md:inline md:ml-6 "
            >
              Get Random Episode Now
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchResultItem;

/*
  return (
    <div
      className="container shadow-md m-6 mx-auto p-6 bg-white rounded"
      key={show.id}
    >
      <div
        className="inset-y-0 left-0 w-48 bg-cover bg-center"
        style={{
          backgroundImage: `url('${show.image?.medium}')`
            || "url('https://static.tvmaze.com/images/no-img/no-img-portrait-text.png')"
        }}
        ></div>
      <div className="searchResultDetails">
        <h3>{show.name}</h3>
        <div className="searchResultDesc">
          {show.summary?.slice(3, -4)}
          <button id={show.id} onClick={handleSelection}>Add to Randomizer</button>
          <button id={show.id} onClick={getRandomEpisode}>Get Random Episode Now</button>
        </div>
      </div>
    </div>
  )
*/