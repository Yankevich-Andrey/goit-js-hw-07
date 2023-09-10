import { galleryItems } from "./gallery-items.js";

const galleryList = document.querySelector(".gallery");

galleryList.insertAdjacentHTML("beforeend", createGalleryMarkup(galleryItems));

function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
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

  const instance = basicLightbox.create(`
  <img src="${event.target.dataset.source}" width="800" height="600">
`);

  instance.show();

  document.addEventListener("keydown", onEscKeyPress);

  function onEscKeyPress(event) {
    if (event.code === "Escape") {
      instance.close();
      document.removeEventListener("keydown", onEscKeyPress);
    }
  }
}
/* ===========================
Не знаю – як Ви це перевіряєте?
Я хоч і написав (і ніби все працює), але дивлюся в код і майже НІЧОГО НЕ РОЗУМІЮ.
Мені здається вдруге я таке не напишу))
Дякую Вам!
*/
