import React from 'react';
import _ from 'lodash';
import './RandomEpisode.css'

function RandomEpisode({ episode, setRandomEpisode, setIsLoading }) {

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

  const handleClose = () => {
    setRandomEpisode({});
  }

  console.log("episode", episode)

  return (
    <div className="modalBG">
      <div className="modalCard">
        <button className="closeBtn" onClick={handleClose}>X</button>
        <h5>Your Random Episode</h5>
        <h1>{episode.random.name}</h1>
        <p><small>{episode.name}</small></p>
        <p>{`Season ${episode.random.season} Episode ${episode.random.number}`}</p>
        <p>{episode.random?.summary?.slice(3, -4)}</p>
        <button className="btn" onClick={handleRedo} >Naw, try another</button>
      </div>
    </div>
  )
}

export default RandomEpisode;