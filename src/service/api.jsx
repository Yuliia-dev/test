import axios from 'axios';

const BASE_URL = 'https://627d4408e5ac2c452a004c1c.mockapi.io/api/v1';

export default class ApiService {
  async fetchItems() {
    const response = await axios.get(`${BASE_URL}//gallery`);
    // console.log(response.data);
    return response.data;
  }
}
