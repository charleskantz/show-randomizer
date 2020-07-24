import React from 'react';
import SearchResultItem from './SearchResultItem';

function SearchResultList({ searchResults, selections, getRandomEpisode, handleSelection }) {

  // search result list
  const renderResults = () => {
    if (Array.isArray(searchResults)) {
      return searchResults.map(show => {
        // show can only be added once, and set limit of shows to 5
        const isDisabled = selections.includes(show) || selections.length === 5;
        return <SearchResultItem
          key={show.id}
          show={show}
          getRandomEpisode={getRandomEpisode}
          handleSelection={handleSelection}
          isDisabled={isDisabled}
        />
      })
    } else {
      return <h3>No results found.</h3>;
    }
  }

  return (
    <div>{ renderResults() }</div>
  )
}

export default SearchResultList;