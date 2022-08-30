import axios from 'axios';
export { fetchPictures };

options = {
  key: '29584505-fef9e62872125eda21502d6ec',
  url: 'https://pixabay.com/api/',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
};

async function fetchPictures(q) {
  const response = await axios.get(
    `${options.url}?key=${options.key}&q=${q}&image_type=${options.image_type}&safesearch=${options.safesearch}&orientation=${options.orientation}`);
    return response;
}
