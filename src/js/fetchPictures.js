import axios from 'axios';
export { fetchPictures };

options = {
  key: '29584505-fef9e62872125eda21502d6ec',
  url: 'https://pixabay.com/api/',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
  per_page: 40,
};

async function fetchPictures(q, page) {
  try {
    const response = await axios.get(
      `${options.url}?key=${options.key}&q=${q}&image_type=${options.image_type}&safesearch=${options.safesearch}&orientation=${options.orientation}&page=${page}&per_page=${options.per_page}`
    );
    return response;
  } catch (error) {
    console.log(error.message);
  }
}
