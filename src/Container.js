import React, { useState, useEffect } from 'react';
import CallAPI from './CallAPI';
import _ from 'lodash';
import SearchResultItem from './SearchResultItem';
import SelectedShowFooter from './SelectedShowFooter';
import Header from './Header';
import RandomEpisode from './RandomEpisode';
import Spinner from './Spinner';
import HowItWorks from './HowItWorks';

function Container() {
  const [ query, setQuery ] = useState(""); // search query
  const [ isLoading, setIsLoading ] = useState(''); // shows loading spinner
  const [ searchResults, setSearchResults ] = useState([]) // API search results
  const [ selections, setSelections ] = useState([]); // shows selected by user
  const [ randomShowId, setRandomShowId ] = useState(''); // show ID for single show
  const [ randomShowList, setRandomShowList ] = useState([]) // list of show(s) with episodes, for random picking
  const [ randomEpisode, setRandomEpisode ] = useState({}); // randomly selected show
  const [ instructions, setInstructions ] = useState(false); // how-to-use toggle

  // search for a list of shows
  useEffect(() => {
    async function getShowData() {
      try {
        let res = await CallAPI.searchShows(query);
        if (res.length === 0) {
          setIsLoading('');
        } else {
          setSearchResults(res.map(show => show.show));
          setIsLoading('');
        }
      } catch(err) {
        alert(err);
      }
    }
    if (isLoading === 'search') { getShowData() };
  }, [isLoading, query, searchResults]);

  // select random episode for one show
  useEffect(() => {
    async function pickRandom() {
      try {
        let res = await CallAPI.getShowDetails(randomShowId);
        res.random = _.sample(res._embedded.episodes);
        res.method = 'single';
        setRandomShowId('');
        setIsLoading('');
        setRandomEpisode(res);
      } catch(err) {
        return new Error(err);
      }
    }
    if (isLoading === 'single') { pickRandom() };
  }, [randomShowId, isLoading]);

  // select random episode from a selection of shows
  useEffect(() => {
    async function pickRandomFromShows() {
      try {
        // ensures we don't call API unless it's a new set of shows
        if (randomShowList.length === 0) {
          let res = await CallAPI.getSelectedShows(selections);
          setRandomShowList(res);
        }
        let selectedShow = _.sample(randomShowList);
        selectedShow.random = _.sample(selectedShow._embedded.episodes);
        selectedShow.method = 'multi';
        setIsLoading('');
        setRandomEpisode(selectedShow);
      } catch (err) {
        return new Error(err);
      }
    }
    if (isLoading === 'multi') { pickRandomFromShows() };
  }, [randomShowList, isLoading, selections]);

  // search form handling
  const handleChange = evt => {
    setQuery(evt.target.value);
  }

  // search form submit handling
  const handleSubmit = evt => {
    evt.preventDefault()
    setIsLoading('search');
  }

  // random episode for a single show
  const getRandomEpisode = evt => {
    setIsLoading('single');
    setRandomShowId(evt.target.id);
  }

  // selecting a show
  const handleSelection = showID => {
    let show = searchResults.find(show => show.id === parseInt(showID));
    setSelections(selections => [...selections, show]);
  }

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

  // random episode from list of shows
  const handleRandomize = async () => {
    setIsLoading('multi');
  }

  return (
    <div className="relative">

      { // display loading modal if we're calling the API
        isLoading && <Spinner />
      }

      { // display random ep modal if a random episode is selected
        Object.keys(randomEpisode).length > 0 &&
          <RandomEpisode
            episode={randomEpisode}
            setRandomEpisode={setRandomEpisode}
            setIsLoading={setIsLoading}
          />
      }

      { // display instruction modal if link is clicked
        instructions && <HowItWorks setInstructions={setInstructions}/>
      }

      <Header
        query={query}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        setInstructions={setInstructions}
      />

      { // if there are search results, render list of results
        searchResults.length > 0
          ? <div>{renderResults()}</div>
          : null
      }

      { // if a show is selected for multi-show randomization, show list of selected shows
        selections.length > 0 &&
          <SelectedShowFooter
            selections={selections}
            randomize={handleRandomize}
            handleClear={setSelections}
          />
      }
    </div>
  )
}

export default Container;