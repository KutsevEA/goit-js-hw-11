import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');

let simpleLightbox = '';

function createMarkupForGallery(items) {
  galleryEl.innerHTML = ' ';
  const markupForGallery = items
    .map(
      item =>
        `<div class="gallery__item"><a class="gallery__link" href="${item.largeImageURL}"><img class="gallery__image" src="${item.webformatURL}" data-source="${item.largeImageURL}" alt="${item.tags}"/><div class="gallery__description"><p class="gallery__descriptionEl"><b>Likes</b>${item.likes}</p><p class="gallery__descriptionEl"><b>Views</b>${item.views}</p><p class="gallery__descriptionEl"><b>Comments</b>${item.comments}</p><p class="gallery__descriptionEl"><b>Downloads</b>${item.downloads}</p></div></a></div>`
    )
    .join(``);
  galleryEl.insertAdjacentHTML('beforeend', markupForGallery);

  simpleLightbox = new SimpleLightbox('.gallery a').refresh();
}

function addPicToGallery(items) {
  simpleLightbox.destroy();
  const markupForGallery = items
    .map(
      item =>
        `<div class="gallery__item"><a class="gallery__link" href="${item.largeImageURL}"><img class="gallery__image" src="${item.webformatURL}" data-source="${item.largeImageURL}" alt="${item.tags}"/><div class="gallery__description"><p class="gallery__descriptionEl"><b>Likes</b>${item.likes}</p><p class="gallery__descriptionEl"><b>Views</b>${item.views}</p><p class="gallery__descriptionEl"><b>Comments</b>${item.comments}</p><p class="gallery__descriptionEl"><b>Downloads</b>${item.downloads}</p></div></a></div>`
    )
    .join(``);
  galleryEl.insertAdjacentHTML('beforeend', markupForGallery);

  simpleLightbox = new SimpleLightbox('.gallery a').refresh();
}

export { addPicToGallery };
export { createMarkupForGallery };
