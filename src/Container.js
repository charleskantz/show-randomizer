import React, { useState, useEffect } from 'react';
import CallAPI from './CallAPI';
import _ from 'lodash';
import SearchResultItem from './SearchResultItem';
import SelectedShowFooter from './SelectedShowFooter';
import Header from './Header';
import RandomEpisode from './RandomEpisode';
import Spinner from './Spinner';

function Container() {
  const [ query, setQuery ] = useState("");
  const [ isLoading, setIsLoading ] = useState('');
  const [ searchResults, setSearchResults ] = useState([])
  const [ selections, setSelections ] = useState([]);
  const [ randomShowId, setRandomShowId ] = useState('');
  const [ randomEpisode, setRandomEpisode ] = useState({});
  const [ randomShowList, setRandomShowList ] = useState([])

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
  const handleSelection = evt => {
    let show = searchResults.find(show => show.id === parseInt(evt.target.id));
    setSelections(selections => [...selections, show]);
  }

  // search result list
  const renderResults = () => {
    if (Array.isArray(searchResults)) {
      return searchResults.map(show => {
        const selected = selections.includes(show);
        return <SearchResultItem
          key={show.id}
          show={show}
          getRandomEpisode={getRandomEpisode}
          handleSelection={handleSelection}
          selected={selected}
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

      {isLoading ? <Spinner /> : null}

      {Object.keys(randomEpisode).length > 0
        ? <RandomEpisode
            episode={randomEpisode}
            setRandomEpisode={setRandomEpisode}
            setIsLoading={setIsLoading}
          />
        : null
      }

      <Header
        query={query}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

      {searchResults.length > 0
        ? <div>{renderResults()}</div>
        : null
      }

      {selections.length > 0
        ? <SelectedShowFooter
            selections={selections}
            randomize={handleRandomize}
            handleClear={setSelections}
          />
        : null
      }
    </div>
  )
}

export default Container;