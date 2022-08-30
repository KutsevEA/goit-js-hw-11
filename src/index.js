import { fetchPictures } from './js/fetchPictures';
import { createMarkupForGallery } from './js/markup-gallery';

const submitBtn = document.querySelector('form');
submitBtn.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  const submitValue = e.currentTarget.searchQuery.value;
  console.log(submitValue);
  if (submitValue === '') {
    alertNoEmptySearch();
    return;
  } else doMagic(submitValue);
}

async function doMagic(submitValue) {
  const respons = await fetchPictures(submitValue);
  

  createMarkupForGallery(respons.data.hits);
  alertImagesFound(respons.data);
}

function alertImagesFound(data) {
  Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`);
}

function alertNoEmptySearch() {
  Notiflix.Notify.failure(
    'The search string cannot be empty. Please specify your search query.'
  );
}

function alertNoImagesFound() {
  Notiflix.Notify.failure(
    'Sorry, there are no images matching your search query. Please try again.'
  );
}

function alertEndOfSearch() {
  Notiflix.Notify.failure(
    'We are sorry, but you have reached the end of search results.'
  );
}
