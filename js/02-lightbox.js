import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  const galleryItem = document.createElement("li");
  galleryItem.classList.add("gallery__item");

  const link = document.createElement("a");
  link.href = item.original;
  link.classList.add("gallery__link");

  const image = document.createElement("img");
  image.src = item.preview;
  image.alt = item.description;
  image.classList.add("gallery__image");

  link.appendChild(image);
  galleryItem.appendChild(link);
  gallery.appendChild(galleryItem);
});
document.addEventListener("DOMContentLoaded", function () {
  const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
});
console.log(galleryItems);
