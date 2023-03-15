import axios from "axios";

export default class FetchServices {
  static async getAll() {
    const response = await axios.get(`https://razer-api.onrender.com/devices`);
    return response;
  }
}
