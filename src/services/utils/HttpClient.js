import delay from '../../utils/delay';

class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get(endpoint) {
    const response = await fetch(`${this.baseURL}/${endpoint}`);
    await delay(500);
    return response.json();
  }
}

export default HttpClient;
