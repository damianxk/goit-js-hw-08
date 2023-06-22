import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

for (const image of galleryItems) {
  const newItem = `<a class="gallery__link" href="${image.original}"> <img class="gallery__image" src="${image.preview}" data-source="${image.original}" alt="${image.description}"/></a>`;
  gallery.insertAdjacentHTML("beforeend", newItem);
}

gallery.addEventListener("click", (e) => {
  e.preventDefault();
  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}"/>`
  );
  instance.show();
});
