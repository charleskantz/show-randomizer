import axios from 'axios';

class CallAPI {
  static async searchShows(query) {
    try {
      let res = await axios.get(`https://api.tvmaze.com/search/shows?q=${query}`);
      return res.data;
    } catch(err) {
      return new Error(err);
    }
  }

  static async getShowDetails(id) {
    try {
      let res = await axios.get(`https://api.tvmaze.com/shows/${id}?embed=episodes`);
      return res.data;
    } catch(err) {
      return new Error(err);
    }
  }

  static async getSelectedShows(shows) {
    try {
      let res = await shows.map(async show => {
        let response = await this.getShowDetails(show.id);
        return response;
      });

      let allResults = await Promise.all(res);
      return allResults;
    } catch(err) {
      return new Error(err);
    }
  }
}

export default CallAPI;