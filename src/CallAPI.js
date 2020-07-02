import axios from 'axios';

class CallAPI {
  static async searchShows(query) {
    try {
      let res = await axios.get(`http://api.tvmaze.com/search/shows?q=${query}`);
      return res.data;
    } catch(err) {
      return new Error(err);
    }
  }

  static async getShowDetails(id) {
    try {
      let res = await axios.get(`http://api.tvmaze.com/shows/${id}?embed=episodes`);
      return res.data;
    } catch(err) {
      return new Error(err);
    }
  }
}

export default CallAPI;