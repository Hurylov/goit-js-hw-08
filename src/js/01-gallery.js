// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryList = document.querySelector('.gallery');

const gallerySettingsObject = {
  captionsData: 'alt',
  captionDelay: 250,
};

const makeGalleryMarkup = () => {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"/>
</a>`;
    })
    .join('');
};

const render = () => {
  galleryList.insertAdjacentHTML('beforeend', makeGalleryMarkup());
};

render();

let gallery = new SimpleLightbox('.gallery a', gallerySettingsObject);
