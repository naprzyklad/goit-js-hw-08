import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';

// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const galleryItem = galleryItems
  .map(
    item =>
      `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
  )
  .join('');

gallery.innerHTML = galleryItem;

const simple = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'outside',
  captionDelay: 250,
});
