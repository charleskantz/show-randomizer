import React, { useState, useEffect } from 'react';
import CallAPI from './CallAPI';
import './Container.css'
import _ from 'lodash';
import SearchResultItem from './SearchResultItem';
import SelectedShows from './SelectedShows';
import Header from './Header';

function Container() {
  const [ query, setQuery ] = useState("");
  const [ isLoading, setIsLoading ] = useState(false);
  const [ searchResults, setSearchResults ] = useState([])
  const [ selections, setSelections ] = useState([]);
  const [ singleRandomizer, setSingleRandomizer ] = useState('');
  const [ randomEpisode, setRandomEpisode ] = useState({});

  // search for a list of shows
  useEffect(() => {
    async function getShowData() {
      try {
        let res = await CallAPI.searchShows(query);
        if (res.length === 0) {
          setSearchResults("No results found.");
          setIsLoading(false);
        } else {
          setSearchResults(res.map(show => show.show));
          console.log("search", searchResults);
          setIsLoading(false);
        }
      } catch(err) {
        alert(err);
      }
    }
    if (isLoading) { getShowData() };
  }, [isLoading, query, searchResults]);

  // select random episode for one show
  useEffect(() => {
    async function pickRandom() {
      try {
        let res = await CallAPI.getShowDetails(singleRandomizer);
        let randomEp = _.sample(res._embedded.episodes);
        setSingleRandomizer('');
        setRandomEpisode(randomEp);
        console.log(randomEp)
      } catch(err) {
        return new Error(err);
      }
    }
    if (singleRandomizer) { pickRandom() };
  }, [singleRandomizer]);

  // search form handling
  const handleChange = evt => {
    setQuery(evt.target.value);
  }

  // search form submit handling
  const handleSubmit = evt => {
    evt.preventDefault()
    setIsLoading(true);
  }

  // random episode for a single show
  const getRandomEpisode = evt => {
    setSingleRandomizer(evt.target.id);
  }

  // selecting a show
  const handleSelection = evt => {
    console.log("selections before", selections)
    let show = searchResults.find(show => show.id === parseInt(evt.target.id));
    console.log("show", show)
    setSelections(selections => [...selections, show]);
    console.log("selections after", selections)
  }

  // search result list
  const renderResults = () => {
    if (Array.isArray(searchResults)) {
      return searchResults.map(show => (
        <SearchResultItem
          show={show}
          getRandomEpisode={getRandomEpisode}
          handleSelection={handleSelection}
        />
      ))
    } else {
      return <h3>No results found.</h3>;
    }
  }

  const renderSelections = () => {
    return (
      <SelectedShows selections={selections} />
    )
  }

  return (
    <>
      <Header
        query={query}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {isLoading
        ? <h3>Searching...</h3>
        : searchResults.length > 0
        ? renderResults()
        : null
      }
      <footer>
        {renderSelections()}
      </footer>
    </>
  )
}

export default Container;