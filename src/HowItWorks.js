import React from 'react';
import CloseButton from './CloseButton';

function HowItWorks({ setInstructions }) {

  // make sure we're actually clicking the close btn or modal area
  const handleClose = evt => {
    if (evt.target.id === 'modalBG' || evt.target.id === 'closeBtn') {
      setInstructions(false);
    }
  }

  return (
    <div className="modalBG bg-overlay-900" onClick={handleClose} id="modalBG">
      <div className="z-20 fixed p-6 rounded-big w-3/4 mx-auto my-6 max-w-screen-sm card-bg md:w-1/2 text-center">
        <CloseButton handleClose={handleClose} />
        <div className="text-gray-100 text-center text-lg">
          How it Works
        </div>
        <div className="text-left text-show-300">
          <ol className="list-decimal pl-6">
            <li className="mt-3">
              Search for the name of the show you’d like to get a random episode for
            </li>
            <li className="mt-3">
              Select the show(s) you’d like to get a random episode from
              <ol className="pl-4">
                <li className="font-bold text-gray-100 mt-3">Random Episode From Single Show</li>
                <li className="mt-3">Press “Get Random Episode Now” on your preferred show</li>
                <li className="mt-3 font-bold text-gray-100">Random Episode From Multiple Shows</li>
                <li className="mt-3">
                  Press “Add” to begin collecting show to randomly choose from.
                  You can search for other shows until you have all the shows you want
                  (maximum of 5 shows)
                </li>
                <li className="mt-3">
                  If you no longer want a specific show, you can press its thumbnail in
                  the footer to remove it, or press “Clear” to clear all selections
                </li>
                <li className="mt-3">
                When you have all your shows you want, press “Randomize” to get a
                random episode from the selected shows
                </li>
              </ol>
            </li>
            <li className="mt-3">
              We’ll randomly choose an episode and display its details. If you’re not
              interested, press “Nope, Try Another” to select a different episode.
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks;