

import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const listEl = document.querySelector(".gallery");

// Crearea și randarea unui marcaj pe baza datelor din matricea de date galleryItems
galleryItems.forEach((item) => {
  const listItem = document.createElement("li");
  listItem.classList.add("gallery__item");
  listItem.innerHTML = `
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>`;
  listEl.appendChild(listItem);
});

// Adăugarea evenimentului de click pentru deschiderea imaginii în fereastra modală
listEl.addEventListener("click", openImageInModal);

let instance;

function openImageInModal(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const imageSource = event.target.dataset.source;

  instance = basicLightbox.create(`
    <img src="${imageSource}" width="800" height="600">
  `);

  instance.show();

  document.addEventListener("keydown", onEscPress);
}

function onEscPress(event) {
  if (event.code === "Escape" && instance) {
    instance.close();
    document.removeEventListener("keydown", onEscPress);
  }
}







