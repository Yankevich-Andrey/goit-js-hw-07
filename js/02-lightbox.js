import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

galleryList.insertAdjacentHTML("beforeend", createGalleryMarkup(galleryItems));

function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
              <img class="gallery__image" src="${preview}" alt="${description}" />
          </a>
        </li>
      `;
    })
    .join("");
}

galleryList.addEventListener("click", onImageClick);

function onImageClick(event) {
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  // console.log(`Link = ${event.target.dataset.source}`);

  event.preventDefault();

  //   const instance = basicLightbox.create(`
  //   <img src="${event.target.dataset.source}" width="800" height="600">
  // `);

  //   instance.show();

  // (function () {
  //   var $gallery = new SimpleLightbox(".gallery a", {});
  // })();

  var lightbox = new SimpleLightbox(".gallery a", {
    captions: true,
    captionsData: "alt",
    captionDelay: 250,
  });

  document.addEventListener("keydown", onEscKeyPress);

  function onEscKeyPress(event) {
    // if (event.code === "Escape") {
    //   instance.close();
    //   document.removeEventListener("keydown", onEscKeyPress);
    // }
  }
}

// console.log(galleryItems);
