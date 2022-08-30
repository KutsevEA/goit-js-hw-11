import { fetchPictures } from './js/fetchPictures';
import { createMarkupForGallery } from './js/markup-gallery';
import { addPicToGallery } from './js/markup-gallery';
import Notiflix from 'notiflix';

let page = 1;
let pages = 0;

const submitBtn = document.querySelector('form');
const inputSearchQuery = document.querySelector('input');
submitBtn.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  loadMoreBtn.style.opacity = '0';
  loadMoreBtn.style.pointerEvents = 'none';

  const submitValue = e.currentTarget.searchQuery.value;
  if (submitValue === '') {
    alertNoEmptySearch();
    loadMoreBtn.style.opacity = '0';
    loadMoreBtn.style.pointerEvents = 'none';
    return;
  } else {
    doMagic(submitValue);

    loadMoreBtn.style.opacity = '1';
    loadMoreBtn.style.pointerEvents = 'auto';
  }
}

async function doMagic(submitValue) {
  page = 1;
  try {
    const respons = await fetchPictures(submitValue, page);

    if (respons.data.totalHits === 0) {
      alertNoImagesFound();
      loadMoreBtn.style.opacity = '0';
      loadMoreBtn.style.pointerEvents = 'none';
      return;
    } else createMarkupForGallery(respons.data.hits);
    alertImagesFound(respons.data);

    pages = respons.data.totalHits / 40;
  } catch (error) {
    console.log(error.message);
  }
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
  Notiflix.Notify.warning(
    'Sorry, there are no images matching your search query. Please try again.'
  );
}

function alertEndOfSearch() {
  Notiflix.Notify.warning(
    'We are sorry, but you have reached the end of search results.'
  );
}

const loadMoreBtn = document.querySelector('.load-more');

loadMoreBtn.addEventListener('click', addEltoGallery);

loadMoreBtn.style.opacity = '0';
loadMoreBtn.style.pointerEvents = 'none';

async function addEltoGallery(submitValue) {
  page += 1;
  try {
    if (Math.ceil(pages) >= page) {
      const respons = await fetchPictures(inputSearchQuery.value, page);
      addPicToGallery(respons.data.hits);

      loadMoreBtn.style.opacity = '1';
      loadMoreBtn.style.pointerEvents = 'auto';
    } else {
      alertEndOfSearch();
      loadMoreBtn.style.opacity = '0';
      loadMoreBtn.style.pointerEvents = 'none';
    }
  } catch (error) {
    console.log(error.message);
  }
  
}
