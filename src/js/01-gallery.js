import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';

// Change code below this line

const list = document.querySelector('.gallery');
list.insertAdjacentHTML('beforeend', createMarkup(galleryItems));

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
    </li>`
    )
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
  overlayOpacity: 0.7,
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
