import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

for (const image of galleryItems) {
  const newItem = `<a class="gallery__link" href="${image.original}">
    <img class="gallery__image" src="${image.preview}" alt="${image.description}"/></a>`;
  gallery.insertAdjacentHTML("beforeend", newItem);
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});
