import React, { useState } from 'react';

function Header({ handleSubmit, setInstructions }) {

  const [ query, setQuery ] = useState('');

    // search form handling
  const handleChange = evt => {
    setQuery(evt.target.value);
  }

  const submitForm = evt => {
    evt.preventDefault();
    handleSubmit(query);
  }

  return (
    <div className="container mx-auto">
      <h1 className="font-test font-bold text-gray-100 text-center antialiased text-4xl">
        Enter Show Name
      </h1>
      <form onSubmit={submitForm}>
        <div className="text-center">
          <label htmlFor="query">
            <input
            className="text-show-300 bg-show-900 focus:outline-none focus:shadow-outline shadow-inner rounded-l-lg py-2 px-4 my-4 w-1/2 border border-show-900 appearance-none leading-normal placeholder-opacity-50 placeholder-show-300 text-base"
              type="text"
              name="query"
              value={query}
              onChange={handleChange}
              placeholder="Breaking Bad, Real Housewives, SNL, etc."
            />
          </label>
          <button className="text-gray-100 hover:text-white hover:bg-show-600 text-md font-semibold rounded-r-lg px-6 py-2 card-bg border border-show-900 -m-px leading-normal focus:outline-none focus:shadow-outline">
            Search
          </button>
          <p onClick={() => setInstructions(true)} className="font-bold text-sm text-show-400 cursor-pointer hover:text-show-300">
            How it Works
          </p>
        </div>
      </form>
    </div>
  )
}

export default Header;