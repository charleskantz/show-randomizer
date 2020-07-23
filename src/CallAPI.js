import axios from 'axios';

const BASE_URL = 'https://api.tvmaze.com/'

class CallAPI {
  static async searchShows(query) {
    try {
      let res = await axios.get(`${BASE_URL}search/shows?q=${query}`);
      return res.data;
    } catch(err) {
      return new Error(err);
    }
  }

  static async getShowDetails(id) {
    try {
      // get all the episode details now for quicker random selection
      let res = await axios.get(`${BASE_URL}shows/${id}?embed=episodes`);
      return res.data;
    } catch(err) {
      return new Error(err);
    }
  }

  static async getSelectedShows(shows) {
    try {
      let res = shows.map( show => this.getShowDetails(show.id) );
      let allResults = await Promise.all(res);
      return allResults;
    } catch(err) {
      return new Error(err);
    }
  }
}

export default CallAPI;