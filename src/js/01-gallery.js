import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

for (const item of galleryItems) {
  const newItem = `<a class="gallery__link" href="${item.original}"> <img class="gallery__item" src="${item.preview}" alt="${item.description}" /> </a>`;
  gallery.innerHTML += newItem;
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 200,
});
