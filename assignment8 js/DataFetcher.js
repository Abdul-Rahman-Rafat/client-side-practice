// DataFetcher.js
export default class DataFetcher {
  async getUser(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    return res.json();
  }
}
