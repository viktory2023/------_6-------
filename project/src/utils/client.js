import axios from "axios"

export const baseUrl = 'olshanskyvv.ru';

const client = axios.create({
  baseURL: baseUrl
});

export default client;
