import axios from 'axios';

async function fetchImages(name, page) {
  const baseURL = 'https://pixabay.com/api/';
  const KEY = '30704191-cd8b2d540f8f7e20db5127511';

  try {
    const response = await axios.get(
      `${baseURL}?key=${KEY}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

const api = {
  fetchImages,
};

export default api;