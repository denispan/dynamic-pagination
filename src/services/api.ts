import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com/photos?_limit=10'

export const getPhotosByPage = async (pageNumber: number = 1) => {
  const response = await axios.get(`${URL}&_page=${pageNumber}`);
  return response;
}
