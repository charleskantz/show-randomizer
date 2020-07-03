import React from 'react';

function SearchResultItem({ show, handleSelection, getRandomEpisode }) {
  return (
    <div
      className="searchResultCard"
      key={show.id}
    >
      <h3>{show.name}</h3>
      <div className="searchResultDetails">
        <img
          src={
            show.image?.medium ||
            "https://static.tvmaze.com/images/no-img/no-img-portrait-text.png"
          }
          height="200px"
          width="auto"
          alt="show-img"
        />
        <div className="searchResultDesc">
          {show.summary?.slice(3, -4)}
          <button id={show.id} onClick={handleSelection}>Add to Randomizer</button>
          <button id={show.id} onClick={getRandomEpisode}>Get Random Episode Now</button>
        </div>
      </div>
    </div>
  )
}

export default SearchResultItem;