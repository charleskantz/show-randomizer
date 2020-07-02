import React from 'react';

function Header({ query, handleChange, handleSubmit }) {
  return (
    <div className="header">
      <h1>Enter Show Name</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="query">
          <input
            type="text"
            name="query"
            value={query}
            onChange={handleChange}
          />
        </label>
        <button>Search</button>
      </form>
    </div>
  )
}

export default Header;