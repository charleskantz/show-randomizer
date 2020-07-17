import React from 'react';
import _ from 'lodash';

/*
  Popup that shows a randomly selected episdode

*/

function RandomEpisode({ episode, setRandomEpisode, setIsLoading }) {

  // for removing the occasional HTML tag found in text
  const regExNoTags = /<[^>]*>/g;

  // grab another random ep from list
  const handleRedo = ()=> {
    if (episode.method === 'single') {
      let random = _.sample(episode._embedded.episodes);
      setRandomEpisode(ep => {
        return {
          ...ep,
          random
        }
      });
    } else if (episode.method === 'multi') {
      setIsLoading('multi')
    }
  }

  // make sure we're actually clicking the close btn or modal area
  const handleClose = evt => {
    console.log("target", evt.target.id);
    if (evt.target.id === 'modalBG' || evt.target.id === 'closeBtn') {
      setRandomEpisode({});
    }
  }

  return (
    <div className="modalBG bg-overlay-900" onClick={handleClose} id="modalBG">
      <div className="z-20 fixed p-6 rounded-big w-3/4 mx-auto my-6 max-w-screen-sm card-bg md:w-1/2 text-center">
        <button className="closeBtn" onClick={handleClose} id="closeBtn">X</button>
        <p className="text-sm italic text-show-400">
          Your Random Episode
        </p>
        <div className="text-gray-100 font-bold text-2xl mb-2 w-4/5 mx-auto flex flex-col justify-center h-20 pt-2">
          {episode.random.name}
        </div>
        <p className="text-lg text-show-300">
          {episode.name}
        </p>
        <p className="text-sm text-gray-100 italic"
        >
          {`Season ${episode.random.season} Episode ${episode.random.number}`}
        </p>
        <button
          onClick={handleRedo}
          className="bg-blue-500 mt-4 hover:bg-blue-700 text-white py-2 px-4 rounded-full"
        >
          Naw, try another
        </button>
        <p className="text-left text-gray-300 mt-6">
          {episode.random?.summary?.replace(regExNoTags, '')}
        </p>
      </div>
    </div>
  )
}

export default RandomEpisode;